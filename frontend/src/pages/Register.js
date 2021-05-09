import React from "react";
import { useAuthenticationPage } from "../core/auth";
import { RegisterForm } from "../components/forms/RegisterForm";
import { TextSection } from "../components/TextSection";
import "./../App.css";
import "./Register.css";

export const Register = () => {
  useAuthenticationPage();

  return (
    <>
      <div className="register-page-container">
        <TextSection
          title="Register"
          text="Register an account to be able to sign up for trainings."
        />
        <RegisterForm logIn={true} />
      </div>
    </>
  );
};

export default Register;
