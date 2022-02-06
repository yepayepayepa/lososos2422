let pfp;

function preload() {
    const factory = new PFPFactory(losOsosSchema);
    pseudorandom.fxhash();

    const featurePlan = factory.plan();
    console.log(JSON.stringify(featurePlan, null, 4));
    window.$fxhashFeatures = featurePlan;

    pfp = factory.build(featurePlan);
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
    if (key == 's' || key == 'S') saveCanvas('lososos2622_' + fxhash.substring(0, 10) + "_", 'png');
  }
  