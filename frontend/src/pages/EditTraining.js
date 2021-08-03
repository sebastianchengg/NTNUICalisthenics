import React from "react";
import UpdateTrainingForm from "../components/forms/training/EditTrainingForm";
import { useParams } from "react-router";
import Grid from "@material-ui/core/Grid";
import { useStaffAccessPage } from "../core/auth";

export const EditTraining = () => {
  useStaffAccessPage();
  const { id } = useParams();

  return (
    <>
      <div className="page">
        <Grid container spacing={0} justifyContent="center">
          <UpdateTrainingForm id={id} />
        </Grid>
      </div>
    </>
  );
};

export default EditTraining;
