import React from "react";
import classes from "./Features.module.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  FaUserCog,
  FaFortAwesome,
  FaLightbulb,
  FaUserFriends,
} from "react-icons/fa";
import Title from "../../helpers/Title";
const Features = () => {
  return (
    <section className={classes.features} id="feat">
      <Title
        title="Product Features"
        desc="Perpetual sincerity out suspected necessary one but provision satisfied. Respect nothing use set waiting pursuit nay you looking."
      />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <div className={classes.content}>
              <FaUserCog className={classes.icon} />
              <Typography variant="h6" className={classes.title}>
                High <br /> Quality
              </Typography>
              <Typography variant="subtitle1" className={classes.desc}>
                Is at purse tried jokes china ready decay an. downs power.
              </Typography>
            </div>
          </Grid>
          {/* two */}
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <div className={classes.content}>
              <FaFortAwesome className={classes.icon} />
              <Typography variant="h6" className={classes.title}>
                Awesome <br />
                Design
              </Typography>
              <Typography variant="subtitle1" className={classes.desc}>
                Is at purse tried jokes china ready decay an. downs power.
              </Typography>
            </div>
          </Grid>
          {/* three */}
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <div className={classes.content}>
              <FaLightbulb className={classes.icon} />
              <Typography variant="h6" className={classes.title}>
                Latest <br />
                Technology
              </Typography>
              <Typography variant="subtitle1" className={classes.desc}>
                Is at purse tried jokes china ready decay an. downs power.
              </Typography>
            </div>
          </Grid>
          {/* four */}
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <div className={classes.content}>
              <FaUserFriends className={classes.icon} />
              <Typography variant="h6" className={classes.title}>
                User <br /> Friendly
              </Typography>
              <Typography variant="subtitle1" className={classes.desc}>
                Is at purse tried jokes china ready decay an. downs power.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Features;
