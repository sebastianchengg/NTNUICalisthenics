import React, { useState, useEffect } from "react";
import { LinkButton } from "../components/LinkButton";
import TrainingAPI from "../api/TrainingAPI";
import { Training } from "../components/Training";
import Grid from "@material-ui/core/Grid";

export const Book = () => {
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

  return (
    <>
      <div className="page">
        <Grid
          container
          spacing={0}
          justifyContent="center"
        >
          {renderTrainings()}
        </Grid>

        <LinkButton url="/create-training">Create training</LinkButton>
      </div>
    </>
  );
};

export default Book;
