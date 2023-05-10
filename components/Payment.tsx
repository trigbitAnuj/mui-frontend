import {
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Payment = () => {
  const [isTrue, setIsTrue] = React.useState(true);

  const handleChange = () => {
    setIsTrue((isTrue) => !isTrue);
  };
  return (
    <>
      <Typography variant="h6">Payment Method</Typography>
      <Grid container spacing={3}>
        <Grid item>
          <TextField
            required
            id="cardName"
            name="cardName"
            label="Name on card"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="expiryDate"
            name="cardNumber"
            label="Card number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            label="Remember credit card details for next time"
            control={
              <Checkbox
                color="primary"
                name="savecard"
                value="yes"
                checked={isTrue}
                onChange={handleChange}
              />
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Payment;
