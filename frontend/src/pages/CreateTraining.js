import React, { useState } from "react";
import { InternalButton } from "../components/LinkButton";
import { CreateTrainingForm } from "../components/forms/training/CreateTrainingForm";
import Grid from "@material-ui/core/Grid";
import { v4 as uuidv4 } from "uuid";
import { useStaffAccessPage } from "../core/auth";
import "./CreateTraining.css";

export const CreateTraining = () => {
  useStaffAccessPage();

  const [mobile, setMobile] = useState();
  const [trainingForm, setTrainingForm] = useState([
    { key: uuidv4() },
    { key: uuidv4() },
    { key: uuidv4() },
  ]);

  //sets variable to define if mobile-layout is needed
  const showMobile = () => {
    if (window.innerWidth <= 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  const addTraining = () => {
    const training = { key: uuidv4() };
    setTrainingForm((state) => [...state, training]);
  };

  const removeTraining = (identifier) => {
    const trainings = trainingForm.filter((train) => train.key !== identifier);
    setTrainingForm(trainings);
  };

  const renderTrainings = () => {
    return trainingForm.map((training) => (
      <CreateTrainingForm
        {...training}
        identifier={training.key}
        remove={removeTraining}
      />
    ));
  };

  window.addEventListener("resize", showMobile);
  return (
    <div className="page">
      <Grid
        container
        spacing={0}
        justifyContent={mobile ? "center" : "flex-start"}
      >
        {renderTrainings()}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div onClick={() => addTraining()} className="add-training-container">
            <i
              className={`fas fa-plus-circle ${
                mobile ? "mobile-add-training" : "add-training"
              }`}
            />
          </div>
        </Grid>
      </Grid>

      <InternalButton
        buttonStyle="btn-primary"
        buttonSize="btn-medium"
        extraCss="apply-here profile-button"
        type="submit"
      >
        Submit
      </InternalButton>
    </div>
  );
};

export default CreateTraining;
