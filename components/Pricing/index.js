import React from "react";
import classes from "./Pricing.module.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Box, Typography, Button } from "@material-ui/core";
import Title from "../../helpers/Title";
const Pricing = () => {
  return (
    <section className={classes.pricing} id='price'>
      <Container maxWidth="lg">
        <Title
          title="How It Stacks Up"
          desc="Perpetual sincerity out suspected necessary one but provision satisfied. Respect nothing use set waiting pursuit nay you looking."
        />
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} xl={6}>
            <div className={classes.content}>
              <div style={{ display: "flex" }}>
                <div className={classes.imgProduct}>
                  <img
                    src="https://geniusdevs.com/themeforest/ponno/ponno-gradint/assets/img/w3.png"
                    alt="img product"
                  />
                </div>
                <div style={{ marginLeft: "25px" }}>
                  <Typography className={classes.title} variant="h6">
                    {" "}
                    Smart Watch One
                  </Typography>
                  <Typography className={classes.desc} variant="subtitle1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, perferendis.
                  </Typography>
                  <ul className={classes.list}>
                    <li>Price</li>
                    <li>$435.99</li>
                  </ul>
                  <Button
                    className={classes.btn}
                    variant="contained"
                    color="default"
                  >
                    add to cart
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
          {/* two */}
          <Grid item xs={12} md={6} xl={6}>
            <div className={classes.content}>
              <div style={{ display: "flex" }}>
                <div className={classes.imgProduct}>
                  <img
                    src="https://geniusdevs.com/themeforest/ponno/ponno-gradint/assets/img/w1.png"
                    alt="img product"
                  />
                </div>
                <div style={{ marginLeft: "25px" }}>
                  <Typography className={classes.title} variant="h6">
                    {" "}
                    Smart Watch Two
                  </Typography>
                  <Typography className={classes.desc} variant="subtitle1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, perferendis.
                  </Typography>
                  <ul className={classes.list}>
                    <li>Price</li>
                    <li>$435.99</li>
                  </ul>
                  <Button
                    className={classes.btn}
                    variant="contained"
                    color="default"
                  >
                    add to cart
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
          {/* three */}
          <Grid item xs={12} md={6} xl={6}>
            <div className={classes.content}>
              <div style={{ display: "flex" }}>
                <div className={classes.imgProduct}>
                  <img
                    src="https://geniusdevs.com/themeforest/ponno/ponno-gradint/assets/img/w4.png"
                    alt="img product"
                  />
                </div>
                <div style={{ marginLeft: "25px" }}>
                  <Typography className={classes.title} variant="h6">
                    {" "}
                    Smart Watch Three
                  </Typography>
                  <Typography className={classes.desc} variant="subtitle1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, perferendis.
                  </Typography>
                  <ul className={classes.list}>
                    <li>Price</li>
                    <li>$435.99</li>
                  </ul>
                  <Button
                    className={classes.btn}
                    variant="contained"
                    color="default"
                  >
                    add to cart
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
          {/* four */}
          <Grid item xs={12} md={6} xl={6}>
            <div className={classes.content}>
              <div style={{ display: "flex" }}>
                <div className={classes.imgProduct}>
                  <img
                    src="https://geniusdevs.com/themeforest/ponno/ponno-gradint/assets/img/w2.png"
                    alt="img product"
                  />
                </div>
                <div style={{ marginLeft: "25px" }}>
                  <Typography className={classes.title} variant="h6">
                    {" "}
                    Smart Watch Four
                  </Typography>
                  <Typography className={classes.desc} variant="subtitle1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, perferendis.
                  </Typography>
                  <ul className={classes.list}>
                    <li>Price</li>
                    <li>$435.99</li>
                  </ul>
                  <Button
                    className={classes.btn}
                    variant="contained"
                    color="default"
                  >
                    add to cart
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Pricing;
