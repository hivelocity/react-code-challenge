import colors from "open-color/open-color";

const baseSpacing = 8;

const theme = {
  colors: {
    black: colors.gray[9],
    white: colors.white,
    gray: colors.gray[2],
    darkGray: colors.gray[7],
    off: colors.red[6],
    on: colors.green[6]
  },

  border: {
    size: 3
  },

  font: {
    family: "Arial",
    sizes: {
      small: 12,
      medium: 16,
      big: 24
    },
    weights: {
      normal: 400
    }
  },

  spacing: {
    base: baseSpacing,
    small: baseSpacing * 2,
    big: baseSpacing * 4
  },

  layout: {
    maxWidth: 1100
  }
};

export default theme;
