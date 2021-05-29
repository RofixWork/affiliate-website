import React from "react";
import classes from "./ImportantFeatures.module.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
const ImportantFeatures = () => {
  return (
    <section className={classes.importantFeatures}>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <div className={classes.content}>
              <Typography variant="h3" className={classes.title}>
                1GB
              </Typography>
              <Typography variant="subtitle1" className={classes.desc}>
                RAM
              </Typography>
            </div>
          </Grid>
          {/* two */}
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <div className={classes.content}>
              <Typography variant="h3" className={classes.title}>
                16GB
              </Typography>
              <Typography variant="subtitle1" className={classes.desc}>
                Internal Memory
              </Typography>
            </div>
          </Grid>
          {/* three */}
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <div className={classes.content}>
              <Typography variant="h3" className={classes.title}>
                1.3 Inches
              </Typography>
              <Typography variant="subtitle1" className={classes.desc}>
                Display Size
              </Typography>
            </div>
          </Grid>
          {/* four */}
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <div className={classes.content}>
              <Typography variant="h3" className={classes.title}>
                18 Hours
              </Typography>
              <Typography variant="subtitle1" className={classes.desc}>
                Stand by Battery
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ImportantFeatures;
