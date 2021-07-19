import React, { useState } from "react";
import { InternalButton } from "../components/LinkButton";
import { CreateTrainingForm } from "../components/forms/training/CreateTrainingForm";
import Grid from "@material-ui/core/Grid";
import "./CreateTraining.css";

export const Book = () => {
  const [mobile, setMobile] = useState();
  const [trainingForm, setTrainingForm] = useState([
    <CreateTrainingForm />,
    <CreateTrainingForm />,
    <CreateTrainingForm />,
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
    setTrainingForm((state) => [...state, <CreateTrainingForm/>])
  }

  window.addEventListener("resize", showMobile);
  return (
    <>
      <div className="page">
        <Grid
          container
          spacing={0}
          justifyContent={mobile ? "center" : "flex-start"}
        >
          {trainingForm}
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
    </>
  );
};

export default Book;
