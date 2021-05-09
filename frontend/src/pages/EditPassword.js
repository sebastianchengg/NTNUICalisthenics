import React from "react";
import { EditPasswordForm } from "../components/forms/EditPasswordForm";
import { useLoggedInPage } from "../core/auth";

export const EditPassword = () => {
  useLoggedInPage();

  return (
    <>
      <EditPasswordForm />
    </>
  );
};

export default EditPassword;
