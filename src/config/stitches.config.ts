import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "#F25D27",
      secondary: "#DDE9F0",
      secondaryDark: "#115D8C",

      shape: "#FFFFFF",
    },
  },
});