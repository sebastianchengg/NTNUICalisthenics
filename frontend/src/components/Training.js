import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { InternalButton } from "./LinkButton";
import TrainingAPI from "../api/TrainingAPI";
import { useSessionContext } from "../context/session";
import "./Training.css";

export const Training = ({
  id,
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

  const session = useSessionContext();
  const [participants, setParticipants] = useState([]);
  const day = days[start.getDay()];
  const date =
    start.getDate().toString() +
    "/" +
    start.getMonth().toString() +
    "/" +
    start.getFullYear().toString();
  const startTime =
    checkTime(start.getHours()) + ":" + checkTime(start.getMinutes());
  const finishTime =
    checkTime(finish.getHours()) + ":" + checkTime(finish.getMinutes());

  useEffect(() => {
    TrainingAPI.getTrainingparticipants(id).then((users) =>
      setParticipants(users.map((user) => user))
    );
  }, [id]);

  const IsRegistered = () => {
    if (participants.some((e) => e.user === session.user.id)) {
      return true;
    }
    return false;
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className="training-container">
          <div className="training-heading">{name}</div>
          <div className="info">
            {`${day}, ${date}`}
          </div>
          <div className="info">{`${startTime} - ${finishTime}`}</div>
          <div className="info">{`Trainer: ${trainer}`}</div>

          {IsRegistered() ? (
            <InternalButton
              buttonStyle="btn-primary"
              buttonSize="btn-medium"
              extraCss="apply-here profile-button"
            >
              Unregister
            </InternalButton>
          ) : (
            <InternalButton
              buttonStyle="btn-primary"
              buttonSize="btn-medium"
              extraCss="apply-here profile-button"
            >
              Register
            </InternalButton>
          )}
        </div>
      </Grid>
    </>
  );
};

export default Training;
