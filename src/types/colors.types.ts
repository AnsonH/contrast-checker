export type Color = {
  rgb: { r: number; g: number; b: number; a: number };
  input: string;
  inputFormat: "hex" | "rgb" | "hsl";
  validInput: boolean;
};

export type RgbObject = { r: number; g: number; b: number };

/**
 * Colors saved in local storage.
 */
export type SavedColors = {
  background: Color;
  foreground: Color;
  time: number;
}[];
