import React from "react";
import { useParams } from "react-router";
import { ResetPasswordConfirmForm } from "../components/forms/ResetPasswordConfirmForm";

export const ResetPasswordConfirm = () => {
  const { token } = useParams();

  return (
    <>
      <ResetPasswordConfirmForm token={token} />
    </>
  );
};

export default ResetPasswordConfirm;
