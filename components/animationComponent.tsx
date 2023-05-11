import styles from "./Animation.module.css";
import { Box, Button, Container, Typography } from "@mui/material";

export const AnimationComponent = () => {
  return (
    <>
      <Container className={styles.container}>
        <Typography className={styles.heading} component="h1" variant="h6">
          Hello World
        </Typography>
        {/* <p className={styles.para}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        accusantium sunt quia maxime in aut eligendi beatae, amet laudantium
        magnam magni totam a repellendus, tempora et odio. Animi, neque
        reiciendis.
      </p> */}

        <Box className={styles.box}>hover</Box>
        <Button variant="contained" color="primary" className={styles.btn}>
          hover over me
        </Button>

        <Box className={styles.parentBox}>
          <Box className={styles.childBox}>Child</Box>
        </Box>

        <Box className={styles.bounce}></Box>
        <Button className={styles.opacity} variant="contained" color="error">
          opacity
        </Button>

        <Box className={styles.demo}>
          <Typography className={styles.growAndBig}>
            This grow and stay big
          </Typography>
          <Typography className={styles.grow}>This just grow</Typography>
        </Box>
      </Container>
    </>
  );
};
