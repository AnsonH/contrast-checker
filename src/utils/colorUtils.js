import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
extend([a11yPlugin]); // Uses the accessibility plugin from colord

/**
 * Get the string representation of the color according to the given color format.
 * @param {Colord} color Input color object
 * @param {import("colord/types").Format} [format] The color format for the output
 * @returns {string}  String representation of the color
 * @example
 * const color = colord("#ff0000");
 * getColorString(color, "hsl");  // Returns "hsl(0, 100%, 50%)"
 */
export function getColorString(color, format) {
  let output = null;
  switch (format) {
    case "hex":
      output = color.toHex().toUpperCase();
      break;
    case "rgb":
      output = color.toRgbString();
      break;
    case "hsl":
      output = color.toHslString();
      break;
    default:
      output = color.toHex();
  }

  return output;
}

/**
 * Convert a RGB object into a string
 * @param {{r: number, g: number, b: number}} rgbColor Input color object
 * @returns {string}
 */
export function getRgbString(rgbColor) {
  return colord(rgbColor).toRgbString();
}

/**
 * Gets the contrast ratio between background and foreground colors
 * @param {{r: number, g: number, b: number}} backgroundRgb Background color
 * @param {{r: number, g: number, b: number}} foregroundRgb Foreground color
 * @returns number
 */
export function getContrast(backgroundRgb, foregroundRgb) {
  const backgroundColor = colord(backgroundRgb);
  const foregroundColor = colord(foregroundRgb);

  return backgroundColor.contrast(foregroundColor);
}

/**
 * Get the WCAG 2.0 Level AA & AAA ratings given a contrast ratio
 * @param {number} contrast Contrast ratio
 * @returns `[aaNormal, aaLarge, aaaNormal, aaaLarge]`. For each item, `true` means it passes the test while `false` means it fails the test
 */
export function getWcagRatings(contrast) {
  const aaNormal = contrast >= 4.5;
  const aaLarge = contrast >= 3;
  const aaaNormal = contrast >= 7;
  const aaaLarge = contrast >= 4.5;

  return [aaNormal, aaLarge, aaaNormal, aaaLarge];
}
