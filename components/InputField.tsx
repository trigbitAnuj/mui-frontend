import React,  from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  
  useTheme,
} from "@mui/material";

const InputField:React.FC = () => {
  const theme = useTheme();
  const [text, setText] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleUpperCase = () => {
    const newText = text?.toUpperCase();
  
    setText(newText);
  };

  const handleLowerCase = () => {
    const newText = text?.toLowerCase();
 
    setText(newText);
  };

  const handleExtraSpaces = () => {
    
    const newText = text.split(/[ ]+/).join(" ");
    setText(newText);
  };

  const handleClearText = () => {
    setText("");
  };

  return (
    <>
      <Container component="main" maxWidth="sm">
        <TextField
          sx={{
            margin: theme.spacing(2, 1),
            fontFamily: theme.fontFamily.montserrat,
          }}
          id="outlined-textarea"
          multiline
          rows={6}
          fullWidth
          value={text}
          label="Text Area"
          onChange={handleChange}
        />
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="success"
          onClick={handleUpperCase}
          sx={{
            margin: theme.spacing(2, 1),
          }}
        >
          Change To UpperCase
        </Button>
        <Button
          variant="contained"
          sx={{
            margin: theme.spacing(2, 1),
          }}
          onClick={handleLowerCase}
        >
          Change To LowerCase
        </Button>
        <Button
          onClick={handleExtraSpaces}
          sx={{
            margin: theme.spacing(2, 1),
          }}
          color="custom"
          variant="contained"
        >
          Remove Extra Space
        </Button>
        <Button
          onClick={handleClearText}
          sx={{
            margin: theme.spacing(2, 1),
          }}
          color="error"
          variant="contained"
        >
          Clear Text
        </Button>
      </Box>

      <Box>
        <Typography variant="h2" component="h1" textAlign="center">
          Text
        </Typography>
        <Typography
          gutterBottom
          variant="h3"
          component="p"
          // sx={{ fontFamily: theme.fontFamily.montserrat }}
        >
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default InputField;
