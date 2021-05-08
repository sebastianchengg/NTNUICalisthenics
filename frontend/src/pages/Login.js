import React from "react";
import { LoginForm } from "../components/forms/LoginForm";
import { useAuthenticationPage } from "../core/auth";

export const Login = () => {
  useAuthenticationPage();

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
