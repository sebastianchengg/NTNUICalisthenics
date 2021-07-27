import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { InternalButton, LinkButton } from "../LinkButton";
import { useHistory } from "react-router";
import UserAPI from "../../api/UserAPI";
import { useSessionContext } from "../../context/session";
import Grid from "@material-ui/core/Grid";
import { noInputIcon } from "./styled";
import { useErrorState } from "../error/ErrorHandler";
import { readDjangoError } from "../../core/client";
import "./EditProfileForm.css";
import "../ProfileComponent.css";
import "./RegisterForm.css";

/**
 * A form for registering a new user
 *
 * @param props - The props
 */
export const EditProfileForm = ({ user, setSuccess }) => {
  const history = useHistory();
  const session = useSessionContext();
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
  const [validated, setValidated] = useState(false);

  const { error, setError } = useErrorState();

  const onSubmit = (e) => {
    // We use a state for this so that validation doesn't display
    // until after the first submission attempt
    setValidated(true);
    e.preventDefault();

    const form = e.target;
    if (!form.checkValidity()) {
      e.stopPropagation();
      return;
    }

    const user = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
    };

    // PUT request doesn't get sent if nothing changes
    var changed = true;
    if (
      email === session.user.email &&
      firstName === session.user.first_name &&
      lastName === session.user.last_name &&
      phoneNumber === session.user.phone_number
    ) {
      changed = false;
    }

    if (changed) {
      UserAPI.editUser(user)
        .then(() => {
          session.updateSelfUser().then(() => history.push("/profile"));
          setSuccess("Profile updated successfully");
        })
        .catch((error) => {
          setError(
            error.response
              ? readDjangoError(error.response)
              : "An unexpected error occured"
          );
          return;
        });
    } else {
      history.push("/profile");
    }
  };

  return (
    <div className="edit-profile-container">
      <Form noValidate validated={validated} onSubmit={onSubmit}>
        <Grid container spacing={0} justifyContent="center">
          <Grid item xs={12} sm={4} md={5}>
            <Form.Label>First name: </Form.Label>
          </Grid>
          <Grid item xs={12} sm={8} md={7}>
            <Form.Control
              defaultValue={firstName}
              autoFocus
              size="sm"
              type="text"
              pattern="^[a-zA-Z\p{L}]+$"
              minLength={2}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={noInputIcon}
            />
          </Grid>
          <br />
          <br />

          <Grid item xs={12} sm={4} md={5}>
            <Form.Label>Last name: </Form.Label>
          </Grid>
          <Grid item xs={12} sm={8} md={7}>
            <Form.Control
              defaultValue={lastName}
              size="sm"
              type="text"
              pattern="^[a-zA-Z\p{L}]+$"
              minLength={2}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={noInputIcon}
            />
          </Grid>
          <br />
          <br />

          <Grid item xs={12} sm={4} md={5}>
            <Form.Label>Email address: </Form.Label>
          </Grid>
          <Grid item xs={12} sm={8} md={7}>
            <Form.Control
              defaultValue={email}
              size="sm"
              type="email"
              minLength={7}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={noInputIcon}
            />
          </Grid>
          <br />
          <br />

          <Grid item xs={12} sm={4} md={5}>
            <Form.Label>Phone number: </Form.Label>
          </Grid>

          <Grid item xs={12} sm={8} md={7}>
            <InputGroup size="sm">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">+</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                defaultValue={phoneNumber.substring(1)}
                type="text"
                pattern="[0-9]*"
                minLength={8}
                maxLength={17}
                onChange={(e) => setPhoneNumber("+" + e.target.value)}
                required
                style={noInputIcon}
              />
            </InputGroup>
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

        <LinkButton
          url="/profile/edit-password"
          buttonStyle="btn-primary"
          buttonSize="btn-medium"
          extraCss="apply-here profile-button"
        >
          Change password
        </LinkButton>

        {error}
      </Form>
    </div>
  );
};
