import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { FaAngleUp } from "react-icons/fa";
const Accordion = withStyles({
  root: {
    border: "1px solid #5d5d5d",
    margin: "15px 0",
    boxShadow: "none",

    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    background: "linear-gradient(to left, #485e93 0%, #7185b4 100%)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    color: "white",
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: "#343434",
    color: "white",
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions({ title }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion square expanded={expanded} onChange={handleChange("panel1")}>
        <AccordionSummary
          expandIcon={<FaAngleUp style={{ color: "white" }} />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography style={{ fontWeight: 700 }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
