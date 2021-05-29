import React, { useState } from "react";
import classes from "./Dna.module.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Dialog from "../Dialog";

const Dna = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className={classes.dna}>
      <Container maxWidth="lg">
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} md={6} xl={6}>
            <div className={classes.content}>
              <Typography variant="h3" className={classes.title}>
                Design DNA
              </Typography>
              <Typography variant="subtitle1" className={classes.desc}>
                Do play they miss give so up. Words to up style of since world.
                We leaf to snug on no need. Way own uncommonly travelling now
                acceptance bed compliment solicitude. Dissimilar admiration so
                terminated no in contrasted it. Limits far yet turned highly
                repair parish talked six. Draw fond rank form nor the day eat.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <div onClick={() => setOpen(true)} className={classes.videoProduct}>
              <h6>Play</h6>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Dialog open={open} setOpen={setOpen} />
    </section>
  );
};

export default Dna;
