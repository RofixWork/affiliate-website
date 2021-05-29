import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import classes from "./Title.module.css";
const Title = ({ title, desc }) => {
  return (
    <>
      <Container maxWidth="md">
        <div className={classes.titleContent}>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="subtitle1" className={classes.desc}>
            {desc}
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default Title;
