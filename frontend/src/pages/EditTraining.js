import React from "react";
import UpdateTrainingForm from "../components/forms/training/EditTrainingForm";
import { useParams } from "react-router";

export const EditTraining = () => {
  const { id } = useParams();

  return (
    <>
      <div className="page">
        <UpdateTrainingForm id={id}/>
      </div>
    </>
  );
};

export default EditTraining;
