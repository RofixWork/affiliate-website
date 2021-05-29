import React from "react";
import classes from "./Banner.module.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const Banner = () => {
  return (
    <section className={classes.banner} id="banner">
      <Container maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item md={6} xl={6}>
            <div className={classes.content}>
              <Typography className={classes.title} variant="h2">
                All New For a Better You
              </Typography>
              <Typography className={classes.desc} variant="subtitle1">
                From they fine john he give of rich he. They age and draw mrs
                like. Improving end distrusts may instantly was household
                applauded incommode.
              </Typography>
              <Button
                className={classes.btn}
                variant="contained"
                color="default"
              >
                order now
              </Button>
            </div>
          </Grid>
          <Grid item md={6} xl={6}>
            <div className={classes.imageBanner}>
              <img
                src="https://geniusdevs.com/themeforest/ponno/ponno-gradint/assets/img/w1.png"
                alt="img banner"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;
