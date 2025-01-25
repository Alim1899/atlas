import * as React from "react";
import classes from "./ui.module.css";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LineSlider from "./LineSlider";

export default function AccordionExpandIcon() {
  return (
    <div className={classes.accordion}>
      <Accordion>
        <AccordionSummary
          className={classes.header}
          id="panel1-header"
          aria-controls="panel1"
          expandIcon={<ExpandMoreIcon />}
        ></AccordionSummary>
        <AccordionDetails className={classes.details}>
          <LineSlider />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
