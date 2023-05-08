import { theme } from "@/theme";
import { useTheme } from "@emotion/react";
import {
  ThemeProvider,
  createTheme,
  styled,
  alpha,
} from "@mui/material/styles";

import { Container, Slider, Box, SliderProps } from "@mui/material/";

import Link from "next/link";
import { TextField, TextFieldProps, Typography } from "@mui/material";
import React from "react";

// interface MyThemeComponentProps {
//   color?: "primary" | "secondary";
//   variant?: "normal" | "dashed";
// }

interface StyleContainerType {
  borderColor: string;
}

interface StyledTextFieldType {
  placeHolderColor: string;
  borderColor: string;
}

// const customTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#1976d2",
//       contrastText: "white",
//     },
//     custom: {
//       light: "#ff8a65",
//       main: "#ff5722",
//       dark: "#f4511e",
//       contrastText: "#fff",
//     },
//   },

//   components: {
//     styledDiv: {
//       styleOverrides: {
//         root: {
//           color: "darkslategray",
//         },
//         primary: {
//           color: "darkblue",
//         },
//         secondary: {
//           color: "darkred",
//           backgroundColor: "pink",
//         },
//       },
//       variants: [
//         {
//           props: { variant: "dashed", color: "primary" },
//           style: {
//             border: "1px dashed darkblue",
//           },
//         },
//         {
//           props: { variant: "dashed", color: "secondary" },
//           style: {
//             border: "1px dashed darkred",
//           },
//         },
//       ],
//     },
//   },
// });

// const MyThemeComponent = styled("div")(({ theme }) => ({
//   color: theme.palette.primary.contrastText,
//   backgroundColor: theme.palette.custom.main,
//   padding: theme.spacing(1),
//   margin: theme.spacing(1),
//   borderRadius: theme.shape.borderRadius,
// }));

// const StyledDiv = styled("div", {
//   shouldForwardProp: (props) =>
//     props !== "color" && props !== "variant" && props !== "sx",
//   name: "MySecondThemeComponent",
//   slot: "Root",
//   overridesResolver: (props, styles) => [
//     styles.root,
//     props.color === "primary" && styles.primary,
//     props.color === "secondary" && styles.secondary,
//   ],
// })<MyThemeComponentProps>(({ theme }) => ({
//   backgroundColor: "aliceblue",
//   padding: theme.spacing(1),
// }));

const StyledButton = styled("button")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.custom.light,
  textDecoration: "none",
  margin: theme.spacing(1),
  padding: theme.spacing(1),
}));

const SuccessSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  width: 500,
  color: theme.palette.primary.main,
  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0px 2px 0px 8px ${alpha(theme.palette.primary.main, 0.5)}`,
    },
    "&.Mui-active": {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.primary.main, 0.5)}`,
    },
  },
}));

const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => {
    return prop !== "placeHolderColor" && prop !== "borderColor";
  },
})((prop: StyledTextFieldType) => ({
  input: {
    color: theme.palette.success.main,
    "&::placeholder": {
      fontStyle: "oblique",
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: prop.borderColor,
      borderRadius: "5px",
    },
  },
}));

const StyledContainer = styled(Container, {
  shouldForwardProp: (props) => {
    return props !== "borderColor";
  },
})((prop: StyleContainerType) => ({
  display: "flex",
  borderColor: prop.borderColor,
  borderRadius: "5px",
  border: 1,
  justifyContent: "space-between",
  alignItems: "center",
  margin: 1,
  padding: 2,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.grey[900],

  "@media (min-width:640px)": {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.grey[100],
  },
  [`@media screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.grey[900],
  },
}));

const StyledBoxComponent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.grey[900],
  padding: theme.spacing(2),
  textAlign: "center",

  "& .MuiBox-root": {
    "& p": {
      backgroundColor: theme.palette.error.dark,
      color: theme.palette.grey[100],
    },
  },
}));

const Styled = () => {
  const [text, setText] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <StyledButton>Styled Button</StyledButton>
      <StyledLink href="/login">Button</StyledLink>

      {/* <MyThemeComponent>Styled div with theme</MyThemeComponent> */}
      {/* <StyledDiv sx={{ m: 1 }} color="secondary" variant="dashed">Primary</StyledDiv> */}
      <SuccessSlider defaultValue={30} />
      <br />

      {/* <TextField
        sx={{
          margin: theme.spacing(2, 1),
          fontFamily: theme.fontFamily.montserrat,
        }}
        id="outlined-textarea"
        fullWidth
        label="Text Area"
      /> */}

      <StyledTextField
        placeHolderColor="green"
        borderColor="red"
        value={text}
        onChange={handleChange}
        fullWidth
        label="Text Area"
        sx={{
          margin: theme.spacing(2, 1),
          fontFamily: theme.fontFamily.montserrat,
        }}
      />

      <StyledContainer maxWidth="md" borderColor="red">
        <Typography>hello i am left item</Typography>
        <Typography>hello i am right item</Typography>
      </StyledContainer>
      <StyledBox>
        <Typography>hello i am in styledbox</Typography>
      </StyledBox>
      <StyledBoxComponent>
        <Typography>Child component in Box</Typography>
      </StyledBoxComponent>
    </>
  );
};

export default Styled;
