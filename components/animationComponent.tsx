import React from "react";
import styles from "@/styles/animation.module.css";
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Card,
  CardHeader,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { theme } from "@/theme";

export const AnimationComponent = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleSearchButton = () => {
    console.log("toggle button");
    setOpen((prev) => !prev);
  };
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
        <Box>
          <Box className={styles.bounce}></Box>
        </Box>

        <Button className={styles.opacity} variant="contained" color="error">
          opacity
        </Button>

        <Box className={styles.demo}>
          <Typography className={styles.growAndBig}>
            This grow and stay big
          </Typography>
          <Typography className={styles.grow}>This just grow</Typography>
        </Box>

        <Box className={styles.element}>
          <h1 className={styles.rotate}>i"ll rotate on hover</h1>
        </Box>

        <Button className={styles.stretch} variant="contained" color="success">
          stretch
        </Button>

        <Card className={styles.shimmer_card} raised>
          <Box
            className={`${styles.shimmer_card_header} ${styles.stroke} ${styles.animate}`}
          ></Box>
          <Box
            className={`${styles.shimmer_img} ${styles.stroke} ${styles.animate}`}
          ></Box>
          <Box
            className={`${styles.shimmer_details} ${styles.stroke} ${styles.animate}`}
          ></Box>
        </Card>
        <Box className={styles.ball_container}>
          <Box className={`${styles.red_ball}   ${styles.red_ball_1}`}></Box>
          <Box className={`${styles.blue_ball} ${styles.blue_ball_1}`}></Box>
        </Box>

        <Box className={styles.ball_container}>
          <Box className={`${styles.red_ball}  ${styles.red_ball_2}`}></Box>
          <Box className={`${styles.blue_ball}`}></Box>
        </Box>
        <Box className={styles.ball_container}>
          <Box className={`${styles.red_ball}  ${styles.red_ball_3}`}></Box>
          <Box className={`${styles.blue_ball}`}></Box>
        </Box>
        <Button
          className={styles.pressme_button}
          variant="contained"
          color="info"
        >
          Submit
        </Button>

        <Box className={styles.search_container}>
          <Button onClick={toggleSearchButton}>
            <SearchIcon
              style={open ? { width: 0 } : { width: "24px", height: "24px" }}
            />
          </Button>
          <Box
            className={`${open ? styles.input_styles : styles.input_container}`}
            style={
              open
                ? {
                    width: "inherit ",
                    display: "flex",
                  }
                : { width: 0 }
            }
          >
            <Button onClick={toggleSearchButton}>
              <SearchIcon />
            </Button>
            <input
              className={styles.slidebar}
              id="searchbar"
              name="searchbar"
              type="text"
              placeholder="Title,genres,Movies"
            ></input>
          </Box>
        </Box>
      </Container>
    </>
  );
};
