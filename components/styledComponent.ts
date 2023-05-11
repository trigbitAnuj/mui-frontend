import { InputFieldType, RoundedButtonType, StyleContainerType, StyledButtonType, StyledTextFieldType } from "@/model";
import { Box, Button, Container, Slider, SliderProps, TextField, alpha, styled} from "@mui/material";
import { blue } from "@mui/material/colors";
import {  useTheme } from '@mui/material/styles';
import Link from "next/link";



export const StyledButtonSignUp = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.success.main,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  
    "&: hover": {
      backgroundColor: theme.palette.success.light,
    },
  }));


  export const StyleBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    right: theme.spacing(1),
    bottom: theme.spacing(1),
  }));

  export const StyledButtonDemo = styled("button")(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  }));
  
  export const StyledLinkDemo = styled(Link)(({ theme }) => ({
    color: theme.palette.common.white,
    backgroundColor: theme.palette.custom.light,
    textDecoration: "none",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  }));
  
  export const SuccessSlider = styled(Slider)<SliderProps>(({ theme }) => ({
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
  
  export const StyledTextField = styled(TextField, {
    shouldForwardProp: (prop) => {
      return prop !== "placeHolderColor" && prop !== "borderColor";
    },
  })(({placeHolderColor,borderColor,theme}:StyledTextFieldType) => ({
    input: {
      color: placeHolderColor,
      "&::placeholder": {
        fontStyle: "oblique",
        
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: borderColor,
        borderRadius: "5px",
      },
    },
  }));
  
  export const StyledContainer = styled(Container, {
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
  
  export const StyledBox = styled(Box)(({ theme }) => ({
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
  
  export const StyledBoxComponent = styled(Box)(({ theme }) => ({
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
  
 export  const MyStyledButton = styled("button")((props: StyledButtonType) => ({
    backgroundColor: props.myBackgroundColor,
  }));

  export const MyThemeComponent = styled("div")(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.custom.main,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  }));

  export const InputField = styled('input')<InputFieldType>(({ width,padding,margin }) => ({

    display:"block",
    width: width,
    padding:padding,
    margin:margin,
    input:{
      '&::placeholder':{
      color:blue[300],
      fontStyle: 'italic',
      }
    }
  

  }));
  export const MyButton= styled(Button)(({theme})=>({
   
  }))

  export const RoundedButton=styled(MyButton)<RoundedButtonType>(({borderRadius})=>({
      borderRadius:"20px",
  }))


  