import React from "react";
import { ResetPasswordForm } from "../components/forms/ResetPasswordForm";
import { TextSection } from "../components/TextSection";
import "./ResetPassword.css";

export const ResetPassword = ({ setSuccess }) => {
  return (
    <>
      <div className="reset-password-container">
        <TextSection
          title="Forgot password"
          text="Enter the email that you log in with."
        />
        <ResetPasswordForm setSuccess={setSuccess} />
      </div>
    </>
  );
};

export default ResetPassword;
