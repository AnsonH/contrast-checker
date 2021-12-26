export type AcceptedFormat = "hex" | "rgb" | "hsl";
export type RgbColor = { r: number; g: number; b: number };
export type Target = "background" | "foreground";

export type Color = {
  rgb: RgbColor;
  input: string;
  inputFormat: AcceptedFormat;
  validInput: boolean;
};

/**
 * Colors saved in local storage.
 */
export type SavedColors = {
  background: Color;
  foreground: Color;
  time: number;
}[];
