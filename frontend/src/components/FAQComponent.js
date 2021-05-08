import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
    color: "rgb(200, 200, 200)",
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
  return (
    <>
      <div className="FAQ-container">
        <ExpansionPanel
          question="How do I become a member?"
          answer={
            "To become a member you have to apply through our application " +
            "form. You will then be put on the waiting list. When it's your turn " +
            "on the waiting list, you'll be accepted into the group."
          }
        />
        <ExpansionPanel
          question="When do you recruit new members?"
          answer={
            "We bring in new members at the beginning of each semester. " +
            "We usually have more open spots in the fall versus the spring. " +
            "We might also bring in new members during the semester if our " +
            "capacity allows it."
          }
        />
        <ExpansionPanel
          question="Do you have trainings/tryouts for non-members?"
          answer="We currently don't have any trainings/tryouts for non-members."
        />
        <ExpansionPanel
          question="Do I need any prior knowledge or skills in calisthenics?"
          answer={
            "No, our group is for all individuals at every level. " +
            "We set up our trainings so that people of all levels will be able " +
            "to learn and develop."
          }
        />
        <ExpansionPanel
          question="I have been on the waiting list for a long time, when will I get in?"
          answer={
            "The waiting list is currently very long, an estimate to when you'll " +
            "get in is about 6-18 months from when you applied. This depends on the " + 
            "state of the waiting list at the time you signed up."
          }
        />
        <ExpansionPanel
          question="Can I just show up on your trainings?"
          answer="No, our trainings are for members only."
        />
        <ExpansionPanel
          question="Do I have to be a student/employee at NTNU to join your group?"
          answer={
            "Yes, you have to be a student/employee at NTNU, or going to " +
            "become it in the near future to apply and be a member."
          }
        />
        <ExpansionPanel
          question="Do I need a NTNUI membership?"
          answer="Yes, you need a NTNUI membership to join the group."
        />
        <ExpansionPanel
          question="Do you have a semester fee?"
          answer="Yes, our semester fee is 350NOK."
        />
      </div>
    </>
  );
};
