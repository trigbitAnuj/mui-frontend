import { products } from "@/utils";
import { List, ListItem, ListItemText, Typography, Grid } from "@mui/material";
import React from "react";

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

const Review: React.FC = () => {
  return (
    <>
      <Typography variant="h6">Order Summary</Typography>
      <List>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mt: 2 }}>
            Shipping Address{" "}
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography>{addresses.join(", ")}</Typography>
        </Grid>

        <Grid item container direction="column" xs={12} md={6}>
          <Typography gutterBottom sx={{ fontWeight: 700, mt: 2 }}>
            Payment Details
          </Typography>

          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom sx={{ my: 1, fontWeight: 700 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid> */}
    </>
  );
};

export default Review;
