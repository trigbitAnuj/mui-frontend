import { theme } from "@/theme";

import { Container, Slider, Box, SliderProps } from "@mui/material/";

import { Typography, CssBaseline } from "@mui/material";
import React from "react";
import {
  MyStyledButton,
  StyledBox,
  StyledBoxComponent,
  StyledButtonDemo,
  StyledContainer,
  StyledLinkDemo,
  StyledTextField,
  SuccessSlider,
} from "@/components/styledComponent";

// interface MyThemeComponentProps {
//   color?: "primary" | "secondary";
//   variant?: "normal" | "dashed";
// }

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

const Styled: React.FC = () => {
  const [text, setText] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <CssBaseline />
      <StyledButtonDemo>Styled Button</StyledButtonDemo>
      <StyledLinkDemo href="/login">Button</StyledLinkDemo>

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
        label="Text Area"
        sx={{
          width: 500,
          margin: theme.spacing(1, 2),
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

      <MyStyledButton myBackgroundColor="red">MyStyleButton</MyStyledButton>
    </>
  );
};

export default Styled;
