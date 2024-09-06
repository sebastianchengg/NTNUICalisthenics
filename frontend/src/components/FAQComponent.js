import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getFAQ } from "../api/training";
import "./FAQComponent.css";

const useStyles = makeStyles(() => ({
  expansionHeading: {
    fontSize: "min(20.5px, 5vw)",
    font: "inherit",
    opacity: "0.95",
    margin: "min(5px, 0.5vw) 0",
  },
  expansionText: {
    fontSize: "min(16px, 4.5vw)",
    font: "inherit",
    opacity: "0.95",
    color: "rgb(220, 220, 220)",
  },
  container: {
    background: "rgb(66, 66, 66)",
    border: 10,
  },
  expanded: {
    "&$expanded": {
      margin: "0",
    },
  },
}));

//Component for a single Expansion panel
export const ExpansionPanel = ({ question, answer }) => {
  const classes = useStyles();
  return (
    <Accordion
      className={classes.container}
      classes={{ expanded: classes.expanded }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.expansionHeading}>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.expansionText}>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

//The entire component used in FAQ page
export const FAQComponent = () => {
  const [FAQ, setFAQ] = useState();

  useEffect(() => {
    getFAQ().then((res) => setFAQ(res.faq)
    )
  }, []);

  const getFAQRows = () => {
    return (
      <>
        {FAQ &&
          FAQ.map((faq) => (
            <ExpansionPanel
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
          ))}
          </>
    );
  };

  return (
    <>
      <div className="FAQ-container">
        {getFAQRows()}
      </div>
    </>
  );
};
