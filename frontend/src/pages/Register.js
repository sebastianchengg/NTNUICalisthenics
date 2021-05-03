import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useSessionContext } from "../context/session";
import { RegisterForm } from "../components/forms/RegisterForm";
import { TextSection } from "../components/TextSection";
import "./../App.css";

/**
 * Utility function for authentication pages. Automatically redirects
 * a user to `/` or the set redirect path if they are already authenticated,
 * and attempt to load this user, or the user is loaded while they are on
 * this page.
 */
const useAuthenticationPage = () => {
  const session = useSessionContext();
  const history = useHistory();

  useEffect(() => {
    if (session.user) {
      const redirect = session.redirectPath ?? "/";
      history.push(redirect);
      session.setRedirectPath("/");
    }
  }, [history, session]);
};

export const Register = () => {
  useAuthenticationPage();

  return (
    <>
      <div className="page">
        <TextSection
          title="Register"
          text="Register an account to be able to sign up for trainings."
        />
        <RegisterForm logIn rememberLogIn />
      </div>
    </>
  );
};

export default Register;
