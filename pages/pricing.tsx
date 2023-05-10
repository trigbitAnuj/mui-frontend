import { tiers } from "@/utils";
import {
  AppBar,
  CssBaseline,
  GlobalStyles,
  Toolbar,
  Typography,
  Link,
  Button,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Box,
  CardActions,
} from "@mui/material";
import { NextPage } from "next";

const Copyright: React.FC = () => {
  return (
    <Typography
      variant="body2"
      align="center"
      color="custom.main"
      sx={{ mt: 5 }}
    >
      CopyRight © <Link href="#">Anuj Kumar</Link> {new Date().getFullYear()}
    </Typography>
  );
};

const Pricing: NextPage = () => {
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="primary"
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            MUI Example
          </Typography>
          <nav>
            <Link
              variant="button"
              color="primary.contrastText"
              underline="hover"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="primary.contrastText"
              href="#"
              underline="hover"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="primary.contrastText"
              href="#"
              underline="hover"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <Button
            color="secondary"
            href="/login"
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" component="main" sx={{ pt: 4, pb: 3 }}>
        <Typography
          component="h3"
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ fontWeight: 500 }}
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          deleniti sit consectetur facere reprehenderit quo quidem modi
          consequuntur porro ducimus itaque recusandae eligendi dolorum commodi!
          Amet minus repellat laudantium id?
        </Typography>
      </Container>
      <Container component="main" maxWidth="md" sx={{ mb: 3 }}>
        <Grid container spacing={5}>
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card raised>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center", fontWeight: 400 }}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                  >
                    <Typography component="h2" variant="h4">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6">/mo</Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    href={
                      tier.title === "Free"
                        ? "/register"
                        : tier.title === "Pro"
                        ? "/"
                        : "/contact"
                    }
                    fullWidth
                    variant={tier.buttonVariant as "outlined" | "contained"}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Copyright />
      </Container>
    </>
  );
};

export default Pricing;
