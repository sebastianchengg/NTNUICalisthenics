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

export const FAQComponent = () => {
  return (
    <>
      <div className="FAQ-container">
        <ExpansionPanel question="Do I need a NTNUI membership?" answer="Yes, you need a NTNUI membership to join the group." />
        <ExpansionPanel question="How do I become a member?" answer="To become a member you have to apply through our application form. You will then be put on the waiting list. When it's your turn on the waiting list, you'll be accepted into the group." />
        <ExpansionPanel question="Do you have a semester fee?" answer="Yes, our semester fee is 350NOK." />
        <ExpansionPanel question="When do you recruit new members?" answer="We bring in new members at the beginning of each semester. We usually have more open spots in the fall versus the spring. We might also bring in new members during the semester if our capacity allows it." />
        <ExpansionPanel question="Do you have trainings/tryouts for non-members?" answer="We don't currently have any trainings/tryouts for non-members." />
        <ExpansionPanel question="Do I have to be a student/employee at NTNU to join your group?" answer="Yes, you have to either be a student/emplyee at NTNU, or going to become it in the near future to be a member." />
        <ExpansionPanel question="Do I need any prior knowledge or skills in calisthenics?" answer="No, our group is for all individuals at every level. We set up our trainings so that people of all levels will be able to learn and develop." />
        <ExpansionPanel question="Can I just show up on your trainings?" answer="No, our trainings are for members only." />
      </div>
    </>
  );
};
