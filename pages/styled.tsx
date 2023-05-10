import { theme } from "@/theme";

import { Container, Slider, Box, SliderProps } from "@mui/material/";

import { Typography, CssBaseline } from "@mui/material";
import React from "react";
import {
  MyStyledButton,
  MyThemeComponent,
  StyledBox,
  StyledBoxComponent,
  StyledButtonDemo,
  StyledContainer,
  StyledLinkDemo,
  StyledTextField,
  SuccessSlider,
} from "@/components/styledComponent";

//
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

      <MyThemeComponent>Styled div with theme</MyThemeComponent>

      <SuccessSlider defaultValue={30} />
      <br />

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
