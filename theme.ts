import { createTheme } from "@mui/material";

import "@fontsource/mulish";
import "@fontsource/montserrat";

declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }

  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h1Bold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1Bold?: React.CSSProperties;
  }
}
declare module "@mui/material/typography" {
  interface TypographyPropsVariantOverrides {
    h1Bold: true;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    fontFamily: {
      montserrat: string;
    };
  }
  interface ThemeOptions {
    fontFamily?: {
      montserrat: string;
    };
  }
}

export const theme = createTheme({
  fontFamily: {
    montserrat: "montserrat",
  },
  palette: {
    primary: {
      light: "#d1c4e9",
      main: "#673ab7",
      dark: "#9575cd",
      contrastText: "#fff",
    },
    secondary: {
      light: "#bbdefb",
      main: "#64b5f6",
      contrastText: "#fff",
    },
    custom: {
      light: "#ff8a65",
      main: "#ff5722",
      dark: "#f4511e",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["mulish"].join(","),
    h1Bold: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: "3.3125rem",
      lineHeight: "1.15em",
      color: "#1D1D1D",
      marginTop: "20px",
      marginBottom: "10px",
    },
    // h1: {
    //   fontFamily: ["montserrat"].join(","),
    //   fontWeight: 500,
    //   fontSize: "2rem",
    //   lineHeight: 0.456,
    //   letterSpacing: "-0.015em",
    // },
    // h2: { fontFamily: ["montserrat"].join(",") },
    // h3: { fontFamily: ["montserrat"].join(",") },
    // h4: { fontFamily: ["montserrat"].join(",") },
    // h5: { fontFamily: ["montserrat"].join(",") },
    // h6: { fontFamily: ["montserrat"].join(",") },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1Bold: "h1",
        },
      },
    },
  },
});
