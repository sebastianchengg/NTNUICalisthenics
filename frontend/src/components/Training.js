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
  const [isRegistered, setIsRegistered] = useState();
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

  const handleRegister = () => {
    const numberRegistered = participants.filter(
      (participant) => participant.status === "REGISTERED"
    ).length;
    let status = "REGISTERED";

    if (numberRegistered >= max_registered) {
      status = "WAITINGLIST";
    }

    const relation = { user: session.user.id, training: id, status: status };

    TrainingAPI.createUserTrainingRelation(relation);
    setIsRegistered(true);
  };

  const handleUnregister = () => {
    const participantToUnregister = participants.find(
      (participant) =>
        participant.user === session.user.id && participant.training === id
    );

    const relation = { user: session.user.id, training: id };
    TrainingAPI.deleteUserTrainingRelation(relation);
    setIsRegistered(false);

    const numberRegistered = participants.filter(
      (participant) => participant.status === "REGISTERED"
    ).length;

    if (numberRegistered >= max_registered && participantToUnregister.status === "REGISTERED") {
        const firstOnWaitinglist = participants.find(participant => participant.status === "WAITINGLIST")
        
        const nextParticipant = {
            user: firstOnWaitinglist.user,
            training: firstOnWaitinglist.training,
            status: "REGISTERED",
        }
        TrainingAPI.updateUserTrainingRelation(nextParticipant)
        // Should fire an action that sends SMS/Mail to the one who goes from
        // the waiting list, to registered
    }
  };

  useEffect(() => {
    TrainingAPI.getTrainingparticipants(id).then((users) =>
      setParticipants(users.map((user) => user))
    );
  }, [id]);

  useEffect(() => {
    if (participants.some((e) => e.user === session.user.id)) {
      setIsRegistered(true);
    } else {
      setIsRegistered(false);
    }
  }, [id, participants, session.user]);

  const makeRegisterButton = () => {
    return isRegistered ? (
      <InternalButton
        buttonStyle="btn-primary"
        buttonSize="btn-medium"
        extraCss="apply-here profile-button"
        onClick={handleUnregister}
      >
        Unregister
      </InternalButton>
    ) : (
      <InternalButton
        buttonStyle="btn-primary"
        buttonSize="btn-medium"
        extraCss="apply-here profile-button"
        onClick={handleRegister}
      >
        Register
      </InternalButton>
    );
  };
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className="training-container">
          <div className="training-heading">{name}</div>
          <div className="info">{`${day}, ${date}`}</div>
          <div className="info">{`${startTime} - ${finishTime}`}</div>
          <div className="info">{`Trainer: ${trainer}`}</div>

          {makeRegisterButton()}
        </div>
      </Grid>
    </>
  );
};

export default Training;
