import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { InternalButton, LinkButton } from "../LinkButton";
import { useHistory } from "react-router";
import UserAPI from "../../api/UserAPI";
import { readDjangoError } from "../../core/client";
import { useSessionContext } from "../../context/session";
import Grid from "@material-ui/core/Grid";
import "./EditProfileForm.css";
import "../ProfileComponent.css";
import "./RegisterForm.css";

/**
 * A form for registering a new user
 *
 * @param props - The props
 */
export const EditProfileForm = ({ setError, user }) => {
  const history = useHistory();
  const session = useSessionContext();
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
  const [validated, setValidated] = useState(false);

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

    UserAPI.editUser(user).then(() => {
      session
        .updateSelfUser()
        .then(() => history.push("/profile"))
        .catch((error) => {
          setError(
            error.response
              ? readDjangoError(error.response)
              : "En uforventet error oppstod!"
          );
        });
    });
  };

  return (
    <div className="register-container">
      <Form noValidate validated={validated} onSubmit={onSubmit}>
        <Grid container spacing={0} justify="center">
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
              />
            </InputGroup>
          </Grid>
          <br />
          <br />
        </Grid>

        <InternalButton buttonStyle="btn-primary" buttonSize="btn-medium" extraCss="apply-here profile-button" type="submit">
          Save changes
        </InternalButton>


        <LinkButton url="/profile/edit-password" buttonStyle="btn-primary" buttonSize="btn-medium" extraCss="apply-here profile-button">
          Change password
        </LinkButton>
      </Form>
    </div>
  );
};
