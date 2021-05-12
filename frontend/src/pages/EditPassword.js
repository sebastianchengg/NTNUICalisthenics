import React from "react";
import { EditPasswordForm } from "../components/forms/EditPasswordForm";
import { useLoggedInPage } from "../core/auth";

export const EditPassword = ({ setSuccess }) => {
  useLoggedInPage();

  return (
    <>
      <EditPasswordForm setSuccess={setSuccess} />
    </>
  );
};

export default EditPassword;
