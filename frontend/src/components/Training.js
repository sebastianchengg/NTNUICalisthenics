import React from "react";
import Grid from "@material-ui/core/Grid";
import { InternalButton } from "./LinkButton";
import "./Training.css";

export const Training = ({
  name,
  trainer,
  max_registered,
  starting_time,
  finishing_time,
}) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const checkTime = (number) => {
    return number < 10 ? "0" + number.toString() : number.toString();
  };

  const start = new Date(starting_time);
  const finish = new Date(finishing_time);

  const day = days[start.getDay()];
  const startTime =
    checkTime(start.getHours()) + ":" + checkTime(start.getMinutes());
  const finishTime =
    checkTime(finish.getHours()) + ":" + checkTime(finish.getMinutes());

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className="training-container">
          <div className="training-heading">{name}</div>
          <div className="info">
            {day} {startTime + "-" + finishTime}
          </div>
          <div className="info">{trainer}</div>
          
          
          <InternalButton
            buttonStyle="btn-primary"
            buttonSize="btn-medium"
            extraCss="apply-here profile-button"
            type="submit"
          >
            Submit
          </InternalButton>
        </div>
      </Grid>
    </>
  );
};

export default Training;
