let pfp;

function preload() {
    // Initialize the pseudorandom engine with fxhash seed
    pseudorandom.fxhash();
    // Instantiate a PFP factory using a schema
    const factory = new PFPFactory(losOsosSchema);
    // Build the PFP with debug enabled 
    pfp = factory.build(true);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    pfp.draw();
    fxpreview();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Saves the artwork as an image when the S key is pressed
function keyPressed() {
    if (key == 's' || key == 'S') {
        const DESIRED_SIZE_IN_PIXELS = 1800;
        resizeCanvas(DESIRED_SIZE_IN_PIXELS / pixelDensity(), DESIRED_SIZE_IN_PIXELS / pixelDensity());
        saveCanvas('lososos2422_' + fxhash + "_", 'png');
        windowResized();

    }
}