import React, { useState, useEffect } from "react";
import { LinkButton } from "../components/LinkButton";
import TrainingAPI from "../api/TrainingAPI";
import { Training } from "../components/Training";
import Grid from "@material-ui/core/Grid";
import { useLoggedInPage } from "../core/auth";
import { useSessionContext } from "../context/session";

export const Book = () => {
  useLoggedInPage();

  const session = useSessionContext();
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    TrainingAPI.getRegisterableTraining().then((training) =>
      setTrainings(training.map((train) => train))
    );
  }, []);

  const renderTrainings = () => {
    return trainings.map((training) => (
      <Training {...training} key={training.id} />
    ));
  };

  const renderCreateTrainingButton = () => {
    return session.user ? (
      session.user.is_staff ? (
        <LinkButton url="/create-training">Create training</LinkButton>
      ) : null
    ) : null;
  };

  return (
    <>
      <div className="page">
        <Grid container spacing={0} justifyContent="center">
          {renderTrainings()}
        </Grid>

        {renderCreateTrainingButton()}
      </div>
    </>
  );
};

export default Book;
