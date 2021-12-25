import { Colord, colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import { Format } from "colord/types";
import { RgbObject } from "../types/colors.types";
extend([a11yPlugin]); // Uses the accessibility plugin from colord

/**
 * Get the string representation of the color according to the given color format.
 * @returns String representation of the color
 * @example
 * const color = colord("#ff0000");
 * getColorString(color, "hsl");  // Returns "hsl(0, 100%, 50%)"
 */
export function getColorString(color: Colord, format: Format) {
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
 * Convert a RGB object into a string.
 */
export function getRgbString(rgbColor: RgbObject) {
  return colord(rgbColor).toRgbString();
}

/**
 * Gets the contrast ratio between background and foreground colors.
 */
export function getContrast(backgroundRgb: RgbObject, foregroundRgb: RgbObject) {
  const backgroundColor = colord(backgroundRgb);
  const foregroundColor = colord(foregroundRgb);

  return backgroundColor.contrast(foregroundColor);
}

/**
 * Get the WCAG 2.0 Level AA & AAA ratings given a contrast ratio.
 * @returns `[aaNormal, aaLarge, aaaNormal, aaaLarge]`. For each item, `true` means it passes the test while `false` means it fails the test
 */
export function getWcagRatings(contrastRatio: number): [boolean, boolean, boolean, boolean] {
  const aaNormal = contrastRatio >= 4.5;
  const aaLarge = contrastRatio >= 3;
  const aaaNormal = contrastRatio >= 7;
  const aaaLarge = contrastRatio >= 4.5;

  return [aaNormal, aaLarge, aaaNormal, aaaLarge];
}
