import React, { useState, useEffect } from "react";
import TrainingAPI from "../api/TrainingAPI";
import { Training } from "../components/Training";
import Grid from "@material-ui/core/Grid";
import { useLoggedInPage } from "../core/auth";

export const Book = () => {
  useLoggedInPage();

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
        <Grid container spacing={0} justifyContent="center">
          {renderTrainings()}
        </Grid>
      </div>
    </>
  );
};

export default Book;
