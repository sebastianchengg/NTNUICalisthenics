import React from "react";
import { useParams } from "react-router";
import { ResetPasswordConfirmForm } from "../components/forms/ResetPasswordConfirmForm";
import { TextSection } from "../components/TextSection";
import "./ResetPasswordConfirm.css";

export const ResetPasswordConfirm = ({ setSuccess }) => {
  const { token } = useParams();

  return (
    <>
      <div className="reset-password-confirm-container">
        <TextSection title="Reset password" text="Set your new password." />

        <ResetPasswordConfirmForm token={token} setSuccess={setSuccess} />
      </div>
    </>
  );
};

export default ResetPasswordConfirm;
