import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { readDjangoError } from "../../core/client";
import { useSessionContext } from "../../context/session";
import { useErrorState } from "../error/ErrorHandler";
import { InternalButton } from "../LinkButton";
import { noInputIcon } from "./styled";
import UserAPI from "../../api/UserAPI";
import Grid from "@material-ui/core/Grid";
import "./EditPasswordForm.css";

/**
 * A form for registering a new user
 *
 * @param props - The props
 */
export const EditPasswordForm = () => {
  const history = useHistory();
  const session = useSessionContext();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const { error, setError } = useErrorState();

  const onSubmit = (e) => {
    // We use a state for this so that validation doesn't display
    // until after the first submission attempt
    setValidated(true);

    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity() || newPassword !== confirmNewPassword) {
      e.stopPropagation();
      if (newPassword !== confirmNewPassword)
        setError("Your new passwords don't match");
      return;
    }

    UserAPI.editPassword(oldPassword, newPassword)
      .then(() => {
        session.updateSelfUser().then(() => history.push("/profile"));
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
    <div className="edit-password-container">
      <Form noValidate validated={validated} onSubmit={onSubmit}>
        <Grid container spacing={0} justify="center">
          <Grid item xs={12} sm={4} md={5}>
            <Form.Label>Current password: </Form.Label>
          </Grid>
          <Grid item xs={12} sm={8} md={7}>
            <Form.Control
              size="sm"
              type="password"
              minLength={8}
              placeholder="Current password"
              value={oldPassword}
              onChange={(e) => {
                setOldPassword(e.target.value);
                setError("");
              }}
              isInvalid={validated}
              required
              style={noInputIcon}
            />
          </Grid>
          <br />
          <br />

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
              style={noInputIcon}
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
              style={noInputIcon}
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
          Save changes
        </InternalButton>

        {error}
      </Form>
    </div>
  );
};
