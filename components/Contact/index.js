import React from "react";
import classes from "./Contact.module.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FaHome, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className={classes.contact} id="contact">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6} xl={6}>
            <form className={classes.form}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number" />
              <textarea cols="30" rows="10" placeholder="Message"></textarea>
              <Button
                className={classes.btn}
                variant="contained"
                color="default"
              >
                send message
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <div className={classes.content}>
              <Typography variant="h3" className={classes.title}>
                Contact With Us
              </Typography>
              <Typography variant="subtitle1" className={classes.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore consectetur
                adipiscing elit, magna aliqua.
              </Typography>
              <Typography className={classes.info} variant="subtitle2">
                Head Office
              </Typography>
              <ul className={classes.list}>
                <li>
                  <FaHome className={classes.icon} />
                  Taroudant, NY 12010
                </li>
                <li>
                  <FaMobileAlt className={classes.icon} />
                  Phone:+212615478523
                </li>
                <li>
                  <FaEnvelope className={classes.icon} />
                  Email:random@random.com
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
