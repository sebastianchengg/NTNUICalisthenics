import React from "react";
import { RegisterForm } from "../components/forms/RegisterForm";
import {TextSection} from "../components/TextSection";
import "./../App.css";

export const Register = () => {
  return (
    <>
      <div className="page">
        <TextSection title="Register" text="Register an account to be able to sign up for trainings." />
        <RegisterForm logIn rememberLogIn />
      </div>
    </>
  );
};

export default Register;
