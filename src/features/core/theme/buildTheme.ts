import {
  createTheme,
  responsiveFontSizes,
  Theme,
} from "@material-ui/core/styles";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const textPrimary = "#5a6f90";
const textSecondary = "#fff";

const palette: PaletteOptions = {
  primary: {
    main: "#5a6f90",
    contrastText: "#fff",
  },
  secondary: {
    main: "#ee5a36",
    contrastText: "#fff",
  },
  text: {
    primary: textPrimary,
    secondary: textSecondary,
  },
  background: {
    default: "#f7f7f7",
  },
};

const buildTheme = (palettePatch = {}): Theme => {
  const newPalette = {
    ...palette,
    ...palettePatch,
  };

  return responsiveFontSizes(
    createTheme({
      palette: newPalette,
      // typography: {
        
      // }

      // shape: {
      //   borderRadius: 6,
      // },
    })
  );
};

export default buildTheme;
