import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import classes from "./About.module.css";
import {
  FaMapMarkedAlt,
  FaWifi,
  FaStethoscope,
  FaCloudRain,
} from "react-icons/fa";
import Title from "../../helpers/Title";
const About = () => {
  return (
    <section className={classes.about} id="products">
      <Title
        title="About The Product"
        desc="Perpetual sincerity out suspected necessary one but provision satisfied. Respect nothing use set waiting pursuit nay you looking."
      />
      <Container maxWidth="lg">
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} md={6} xl={6}>
            <div>
              <div className={classes.box}>
                <div>
                  <FaMapMarkedAlt className={classes.icon} />
                </div>
                <div className={classes.content}>
                  <Typography className={classes.title} variant="h6">
                    GPS System Tracking
                  </Typography>
                  <Typography className={classes.desc} variant="subtitle1">
                    For though result and talent add are parish valley. Songs in
                    oh other avoid it hours woman style.
                  </Typography>
                </div>
              </div>
              <div className={classes.box}>
                <div>
                  <FaWifi className={classes.icon} />
                </div>
                <div className={classes.content}>
                  <Typography className={classes.title} variant="h6">
                    WiFi Data Sync
                  </Typography>
                  <Typography className={classes.desc} variant="subtitle1">
                    For though result and talent add are parish valley. Songs in
                    oh other avoid it hours woman style.
                  </Typography>
                </div>
              </div>
              <div className={classes.box}>
                <div>
                  <FaStethoscope className={classes.icon} />
                </div>
                <div className={classes.content}>
                  <Typography className={classes.title} variant="h6">
                    Blood Pressure Management
                  </Typography>
                  <Typography className={classes.desc} variant="subtitle1">
                    For though result and talent add are parish valley. Songs in
                    oh other avoid it hours woman style.
                  </Typography>
                </div>
              </div>
              <div className={classes.box}>
                <div>
                  <FaCloudRain className={classes.icon} />
                </div>
                <div className={classes.content}>
                  <Typography className={classes.title} variant="h6">
                    Weather Update
                  </Typography>
                  <Typography className={classes.desc} variant="subtitle1">
                    For though result and talent add are parish valley. Songs in
                    oh other avoid it hours woman style.
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <div className={classes.imgAbout}>
              <img
                src="https://geniusdevs.com/themeforest/ponno/ponno-gradint/assets/img/w2.png"
                alt="img about"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
