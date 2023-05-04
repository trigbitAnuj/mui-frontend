import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";

import type { AppProps } from "next/app";
import "@fontsource/mulish";
import "@fontsource/montserrat";
import React from "react";
import {
  FontStyle,
  FontStyleOptions,
} from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface Theme {
    fontFamily?: FontStyle["fontFamily"];
  }
  interface ThemeOption {
    fontFamily?: FontStyleOptions["fontFamily"];
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }

  interface PaletteOptions {
    custom: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Typography" {
  interface TypographyVariants {
    h1Bold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1Bold?: React.CSSProperties;
  }
}
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1Bold: true;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    fontFamily: {
      montserrat: "montserrat",
    },
    palette: {
      primary: {
        light: "#ffa726",
        main: "#f57c00",
        dark: "#ef6c00",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      secondary: {
        light: "#0066ff",
        main: "#0044ff",
        contrastText: "#ffcc00",
      },
      custom: {
        light: "#84ffff",
        main: "#18ffff",
        dark: "#00e5ff",
        contrastText: "#00bcd4",
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
      h1: { fontFamily: ["monserrat"].join(",") },
      h2: { fontFamily: ["monserrat"].join(",") },
      h3: { fontFamily: ["monserrat"].join(",") },
      h4: { fontFamily: ["monserrat"].join(",") },
      h5: { fontFamily: ["monserrat"].join(",") },
      h6: { fontFamily: ["monserrat"].join(",") },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1Bold: "h3",
          },
        },
      },
    },
  } as ThemeOptions);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
