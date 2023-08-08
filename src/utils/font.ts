export const FONT_RESET = '\x1b[0m';
export const FONT_RED = '\x1b[31m';
export const FONT_GREEN = '\x1b[32m';
export const FONT_YELLOW = '\x1b[33m';
export const FONT_BLUE = '\x1b[34m';
export const FONT_DIM = '\x1b[2m';
export const FONT_BRIGHT = '\x1b[1m';
export const FONT_UNDERSCORE = '\x1b[4m';

export const fontRed = (m: string) => `${FONT_RED}${m}${FONT_RESET}`;
export const fontGreen = (m: string) => `${FONT_GREEN}${m}${FONT_RESET}`;
export const fontYellow = (m: string) => `${FONT_YELLOW}${m}${FONT_RESET}`;
export const fontBlue = (m: string) => `${FONT_BLUE}${m}${FONT_RESET}`;
export const fontDim = (m: string) => `${FONT_DIM}${m}${FONT_RESET}`;
export const fontBright = (m: string) => `${FONT_BRIGHT}${m}${FONT_RESET}`;
export const fontUnderscore = (m: string) =>
    `${FONT_UNDERSCORE}${m}${FONT_RESET}`;
