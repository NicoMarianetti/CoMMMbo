export const SQUARE_SIZE: number = window.innerWidth / 45;
export const HEIGHT_SQUARE: number = window.innerHeight / 100;

// Retrieve initial screen's width
let screenWidth: number = window.innerWidth;

// Retrieve initial screen's height
let screenHeight: number = window.innerHeight;

/**
 * Converts provided width percentage to independent pixel (px).
 * @param  {string | number} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated px depending on the current device's screen width.
 */
export const widthPercentageToPX = (widthPercent: string | number): number => {
  // Parse string percentage input and convert it to number.
  const elemWidth: number =
    typeof widthPercent === 'number'
      ? widthPercent
      : parseFloat(widthPercent as string);

  // Calculate the size in pixels.
  return (screenWidth * elemWidth) / 100;
};

/**
 * Converts provided height percentage to independent pixel (px).
 * @param  {string | number} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated px depending on the current device's screen height.
 */
export const heightPercentageToPX = (
  heightPercent: string | number,
): number => {
  // Parse string percentage input and convert it to number.
  const elemHeight: number =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent as string);

  // Calculate the size in pixels.
  return (screenHeight * elemHeight) / 100;
};

const scale: number = screenWidth / 411;

export const normalizeSize = (size: number): number => {
  const newSize: number = size * scale;
  return Math.round(newSize);
};

// USAR EN SELECTORES
const fontScale: number = 1; // Font scaling is not applicable in web environments.

export const unScaleFontSize = (font: number): number => {
  return font;
};
