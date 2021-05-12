import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { InternalButton } from "../LinkButton";
import { useHistory } from "react-router";
import { readDjangoError } from "../../core/client";
import { useErrorState } from "../error/ErrorHandler";
import Grid from "@material-ui/core/Grid";
import UserAPI from "../../api/UserAPI";
import "./ResetPasswordConfirmForm.css";

export const ResetPasswordConfirmForm = ({ token, setSuccess }) => {
  const history = useHistory();
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const { error, setError } = useErrorState();

  const onSubmit = (e) => {
    setValidated(true);

    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity() || newPassword !== confirmNewPassword) {
      e.stopPropagation();
      if (newPassword !== confirmNewPassword)
        setError("Your new passwords don't match");
      return;
    }

    UserAPI.resetPasswordConfirm(newPassword, token)
      .then(() => {
        setSuccess("Password reset successfully");
        history.push("/login");
      })
      .catch((error) => {
        setError(
          error.response
            ? readDjangoError(error.response)
            : "An unexpected error occured"
        );
      });
  };

  return (
    <>
      <div className="reset-password-confirm-form-container">
        <Form noValidate validated={validated} onSubmit={onSubmit}>
          <Grid container spacing={0} justify="center">
            <Grid item xs={12} sm={4} md={5}>
              <Form.Label>New password: </Form.Label>
            </Grid>
            <Grid item xs={12} sm={8} md={7}>
              <Form.Control
                size="sm"
                type="password"
                minLength={8}
                placeholder="New password"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  setError("");
                }}
                isInvalid={validated && newPassword !== confirmNewPassword}
                required
              />
            </Grid>
            <br />
            <br />

            <Grid item xs={12} sm={4} md={5}>
              <Form.Label>Confirm new password: </Form.Label>
            </Grid>
            <Grid item xs={12} sm={8} md={7}>
              <Form.Control
                size="sm"
                type="password"
                minLength={8}
                placeholder="Confirm new password"
                value={confirmNewPassword}
                onChange={(e) => {
                  setConfirmNewPassword(e.target.value);
                  setError("");
                }}
                isInvalid={validated && newPassword !== confirmNewPassword}
                required
              />
            </Grid>

            <br />
            <br />
          </Grid>

          <InternalButton
            buttonStyle="btn-primary"
            buttonSize="btn-medium"
            extraCss="apply-here profile-button"
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
