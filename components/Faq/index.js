import React from "react";
import Title from "../../helpers/Title";
import classes from "./Faq.module.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CustomizedAccordions from "../Accordion";
const Faq = () => {
  return (
    <section className={classes.faq} id="faq">
      <Title
        title="Frequently Asked Questions"
        desc="Perpetual sincerity out suspected necessary one but provision satisfied. Respect nothing use set waiting pursuit nay you looking."
      />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} xl={6}>
            <CustomizedAccordions title="On am we offices expense thought ?" />
            <CustomizedAccordions title="Entire any had depend and figure winter ?" />
            <CustomizedAccordions title="Companions shy had solicitude own ?" />
            <CustomizedAccordions title="Its estimating are motionless day ?" />
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <CustomizedAccordions title="Exquisite no my attention extensive ?" />
            <CustomizedAccordions title="Sitting so totally forbade hundred to ?" />
            <CustomizedAccordions title="Still court no small think death so wrote ?" />
            <CustomizedAccordions title="Far curiosity incommode allowance ?" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Faq;
