import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { InternalButton } from "../LinkButton";
import { useErrorState } from "../error/ErrorHandler";
import UserAPI from "../../api/UserAPI";
import { readDjangoError } from "../../core/client";
import "./ResetPasswordForm.css";

export const ResetPasswordForm = ({ setSuccess }) => {
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState(false);

  const { error, setError } = useErrorState();

  const onSubmit = (e) => {
    setError();
    setValidated(true);

    e.preventDefault();
    e.stopPropagation();

    const form = e.target;
    if (!form.checkValidity()) {
      return;
    }

    UserAPI.resetPassword(email)
      .then(() => setSuccess("An email to set a new password has been sent"))
      .catch((error) => {
        if (error.response.status === 400) {
          setError("No active user with this email");
          return;
        } else {
          setError(
            error.response
              ? readDjangoError(error.response)
              : "An unexpected error occured"
          );
          return;
        }
      });
  };

  return (
    <>
      <div className="reset-password-form-container">
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
            />
            <Form.Control.Feedback type="invalid">
              Please enter your email
            </Form.Control.Feedback>
          </Form.Group>

          <InternalButton
            buttonStyle="btn-primary"
            buttonSize="btn-medium"
            extraCss="apply-here login-button"
            type="submit"
          >
            Reset password
          </InternalButton>

          {error}
        </Form>
      </div>
    </>
  );
};
