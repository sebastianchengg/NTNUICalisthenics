import React, { useState } from "react";
import { InternalButton } from "../components/LinkButton";
import { CreateTrainingForm } from "../components/forms/training/CreateTrainingForm";
import Grid from "@material-ui/core/Grid";

export const Book = () => {
  const [mobile, setMobile] = useState();

  //sets variable to define if mobile-layout is needed
  const showMobile = () => {
    if (window.innerWidth <= 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  window.addEventListener("resize", showMobile);
  return (
    <>
      <div className="page">
        <Grid container spacing={0} justifyContent={mobile ? "center" : "flex-start"}>
          <CreateTrainingForm />
          <CreateTrainingForm />
          <CreateTrainingForm />
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
