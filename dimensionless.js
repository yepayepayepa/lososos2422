/************
 * Dimensionless function
 * yepayepayepa 💥 EmProps
 * https://emprops.io/
 *****/

const CENTER = "center";

class DimensionlessCanvas {
  constructor(position, size, reference = 1) {
    this.position = position;
    this.reference = reference;
    this.size = size;
  }
  d(value) {
    return value * (this.size || this.dimensions()) / this.reference;
  }
  x(value) {
    return this.d(value) +
      // If position is centered
      (this.position === CENTER ? 1 : 0) * (
        ((width - this.dimensions()) / 2) +
        ((this.dimensions() - (this.size || this.dimensions())) / 2)
      );
  }
  y(value) {
    return this.d(value) +
      // If position is centered
      (this.position === CENTER ? 1 : 0) * (
        ((height - this.dimensions()) / 2) +
        ((this.dimensions() - (this.size || this.dimensions())) / 2)
      );
  }
  dimensions() {
    return Math.min(width, height);
  }
}

p5.prototype.dimensionlessCanvas = new DimensionlessCanvas(CENTER);

/**
 * Transforms a normalized value to its proportional dimension into the canvas.
 * Note that for coordinates x and y dimensionless x and dimensionless y must be used.
 * @param {number} value the normalized value to be transformed
 * @returns the transformed value  
 */
p5.prototype.dimensionless = function (value) {
  return this.dimensionlessCanvas.d(value);
}

/**
 * Transforms a normalized value into its proportional x coordinate.
 * This function exists so a centered canvas can be rendered taking in count the 
 * shortest side between width and height.
 */
p5.prototype.dimensionlessx = function (value) {
  return this.dimensionlessCanvas.x(value);
}

/**
* Transforms a normalized value into its proportional y coordinate.
* This function exists so a centered canvas can be rendered taking in count the 
* shortest side between width and height.
*/
p5.prototype.dimensionlessy = function (value) {
  return this.dimensionlessCanvas.y(value);
}