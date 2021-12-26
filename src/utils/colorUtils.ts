import { Colord, colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import { AcceptedFormat, RgbColor } from "../types/colors.types";
extend([a11yPlugin]); // Uses the accessibility plugin from colord

/**
 * Get the string representation of the color according to the given color format.
 * @returns String representation of the color
 * @example
 * const color = colord("#ff0000");
 * getColorString(color, "hsl");  // Returns "hsl(0, 100%, 50%)"
 */
export function getColorString(color: Colord, format: AcceptedFormat) {
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
export function getRgbString(rgbColor: RgbColor) {
  return colord(rgbColor).toRgbString();
}

/**
 * Gets the contrast ratio between background and foreground colors.
 */
export function getContrast(backgroundRgb: RgbColor, foregroundRgb: RgbColor) {
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

/**
 * Converts HEX string to RGB object. `Colord.toRgb()` is not used because it always returns a RGBA object
 * with an extra unwanted alpha field of `a: number`.
 */
export function hexToRgb(hex: string): RgbColor {
  const color = colord(hex).toRgb();
  return { r: color.r, g: color.g, b: color.b };
}
