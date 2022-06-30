let pfp;
let tintColor;

let bgColor; 

function preload() {
    pseudorandom.fxhash();
    const factory = new PFPFactory(losOsosSchema);

    const featurePlan = factory.plan();
    console.log(JSON.stringify(featurePlan, null, 4));
    window.$fxhashFeatures = featurePlan;

    pfp = factory.build(featurePlan);

    // For debug purposes
    // factory.simulate(2422);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bgColor = pseudorandom.pick(["#f0e7d8", "#e1dbc8", "#ebdeca", "#e5d7bf"]);
    noLoop();
}

function draw() {
    background(bgColor);
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


function addGrain(n) {
    loadPixels();
    for (let e = 0; e < width * pixelDensity() * (height * pixelDensity()) * 4; e += 4) {
        let i = map(pseudorandom.decimal(), 0, 1, -n, n);
        pixels[e] = pixels[e] + i,
        pixels[e + 1] = pixels[e + 1] + i,
        pixels[e + 2] = pixels[e + 2] + i,
        pixels[e + 3] = pixels[e + 3] + i
    }
    updatePixels()
  }