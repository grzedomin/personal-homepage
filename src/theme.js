const colorNames = {
  mercury: "#E5E5E5",
  mineShaft: "#252525",
  slateGray: "#6E7E91",
  white: "#FFFFFF",
  iron: "#D1D5DA",
  scienceBlue: "#0366D6",
  dodgerBlue: "#2188FF",
  mineShaftLight: "#363636",
  alto: "#DADADA",
  borderBottom: "rgba(209, 213, 218, 0.1)",
  doveGray: "#6D6C6C",
};


export const lightTheme = {
  colors: {
    primary: colorNames.scienceBlue,
    textPrimary: colorNames.slateGray,
    textSecondary: colorNames.mineShaft,
    background: colorNames.mercury,
    border: colorNames.mercury,
    headers: colorNames.mineShaft,
    icons: colorNames.mineShaft,
    buttonLink: {
      background: colorNames.scienceBlue,
      text: colorNames.white,
    },
    tile: {
      tileHeader: colorNames.scienceBlue,
      background: colorNames.white,
      border: colorNames.iron,
      borderHover: colorNames.dodgerBlue,
    },
    themeSwitch: {
      background: colorNames.mercury,
      icon: colorNames.white,
    },
    link: {
      active: colorNames.dodgerBlue,
    }
  },
};

export const darkTheme = {
  colors: {
    primary: colorNames.dodgerBlue,
    textPrimary: colorNames.white,
    textSecondary: colorNames.white,
    background: colorNames.mineShaft,
    border: colorNames.borderBottom,
    headers: colorNames.white,
    icons: colorNames.alto,
    buttonLink: {
      background: colorNames.dodgerBlue,
      text: colorNames.white,
    },
    tile: {
      tileHeader: colorNames.white,
      background: colorNames.mineShaftLight,
      border: colorNames.borderBottom,
      borderHover: colorNames.scienceBlue,
    },
    themeSwitch: {
      background: colorNames.doveGray,
      icon: colorNames.mineShaft,
    },
    link: {
      active: colorNames.scienceBlue,
    }
  },
};