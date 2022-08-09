import { PFPFactory } from "./pfp.js";
import losOsosSchema from "./2422.js";


window.pfp = {};

window.preload = () => {
    // Initialize the pseudorandom engine with fxhash seed
    pseudorandom.fxhash();
    // Instantiate a PFP factory using a schema
    const factory = new PFPFactory(losOsosSchema);
    // Build the PFP with debug enabled 
    pfp = factory.build(true);
}

window.setup = () => {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

window.draw = () => {
    pfp.draw();
    postProcess();
    fxpreview();
}

window.windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
}

// Saves the artwork as an image when the S key is pressed
window.keyPressed = () => {
    if (key == 's' || key == 'S') {
        const DESIRED_SIZE_IN_PIXELS = 1800;
        resizeCanvas(DESIRED_SIZE_IN_PIXELS / pixelDensity(), DESIRED_SIZE_IN_PIXELS / pixelDensity());
        saveCanvas('lososos2422_' + fxhash + "_", 'png');
        windowResized();

    }
}

function postProcess() {
    addGrain(12);
}

function addGrain(n) {
    pseudorandom.fxhash();
    loadPixels();
    for (let e = 0; e < width * pixelDensity() * (height * pixelDensity()) * 4; e += 4) {
        let i = map(pseudorandom.decimal(), 0, 1, -n, n);
        pixels[e] = pixels[e] + i,
        pixels[e + 1] = pixels[e + 1] + i,
        pixels[e + 2] = pixels[e + 2] + i,
        pixels[e + 3] = pixels[e + 3] + i
    }
    updatePixels();
  }
