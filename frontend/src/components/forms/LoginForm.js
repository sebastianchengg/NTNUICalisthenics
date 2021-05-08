import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { InternalButton } from "../LinkButton";
import { useHistory } from "react-router";
import { useSessionContext } from "../../context/session";
import AuthenticationService from "../../core/auth";
import { useErrorState } from "../error/ErrorHandler";
import "./LoginForm.css";

export const noBackground = {
  backgroundImage: "none",
};

export const LoginForm = () => {
  const session = useSessionContext();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [validated, setValidated] = useState(false);

  const { error, setError } = useErrorState();

  const onSubmit = (e) => {
    setValidated(true);

    e.preventDefault();
    e.stopPropagation();

    const form = e.target;
    if (!form.checkValidity()) {
      return;
    }

    AuthenticationService.login(email, password, remember)
      .then((tokens) => {
        session.updateSelfUser().then(() => history.push("/profile"));
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setError("Feil brukernavn eller passord!");
          return;
        }

        setError("En uforventet error oppstod!");
      });
  };

  return (
    <>
      <div className="login-container">
        <Form noValidate validated={validated} onSubmit={onSubmit}>
          <Form.Group controlId="form-login-email">
            <Form.Control
              size="sm"
              autoFocus
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
              style={noBackground}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your email
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="form-login-password">
            <Form.Control
              size="sm"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
              style={noBackground}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your password
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="form-login-remember">
            <Form.Check
              className="checkbox-text"
              type="checkbox"
              label="Remember me"
              onClick={(e) => setRemember(!remember)}
            />
          </Form.Group>

          <InternalButton
            buttonStyle="btn-primary"
            buttonSize="btn-medium"
            extraCss="apply-here login-button"
            type="submit"
          >
            Log in
          </InternalButton>

          {error}

          <div className="signup-text">
            Don't have an account? Sign up{" "}
            {
              <a className="here-text" href="/register">
                here
              </a>
            }
          </div>
        </Form>
      </div>
    </>
  );
};
