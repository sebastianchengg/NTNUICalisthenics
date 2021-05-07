import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSessionContext } from "../../context/session";
import { Form, InputGroup } from "react-bootstrap";
import { InternalButton } from "../LinkButton";
import AuthenticationService from "../../core/user";
import Grid from "@material-ui/core/Grid";
import "./RegisterForm.css";

/**
 * A form for registering a new user
 *
 * @param props - The props
 */
export const RegisterForm = ({ logIn, rememberLogIn }) => {
  const session = useSessionContext();
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validated, setValidated] = useState(false);

  const onSubmit = (e) => {
    // We use a state for this so that validation doesn't display
    // until after the first submission attempt
    setValidated(true);

    e.preventDefault();

    const form = e.target;
    if (!form.checkValidity() || password !== confirmPassword) {
      e.stopPropagation();
      return;
    }

    const user = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      phone_number: contryCode + phoneNumber,
    };

    AuthenticationService.signUp(user, password, logIn, rememberLogIn)
      .then(() => {
        session
          .updateSelfUser()
          .then(() =>
            history.push(logIn ? session.redirectPath ?? "/" : "/login")
          )
          .catch((error) => {
            setPassword("");
            setConfirmPassword("");
          });
      })
      .catch((error) => {
        setPassword("");
        setConfirmPassword("");
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
              autoFocus
              size="sm"
              type="text"
              pattern="^[a-zA-Z\p{L}]+$"
              minLength={2}
              placeholder="First name"
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
              size="sm"
              type="text"
              pattern="^[a-zA-Z\p{L}]+$"
              minLength={2}
              placeholder="Last name"
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
              size="sm"
              type="email"
              minLength={7}
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <br />
          <br />

          <Grid item xs={12} sm={4} md={5}>
            <Form.Label>Password: </Form.Label>
          </Grid>
          <Grid item xs={12} sm={8} md={7}>
            <Form.Control
              size="sm"
              type="password"
              placeholder="Password"
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={validated && password !== confirmPassword}
              required
            />
            <Form.Text>Password has to be at least 8 characters</Form.Text>
          </Grid>
          <br />
          <br />

          <Grid item xs={12} sm={4} md={5}>
            <Form.Label>Repeat password: </Form.Label>
          </Grid>
          <Grid item xs={12} sm={8} md={7}>
            <Form.Control
              size="sm"
              type="password"
              placeholder="Password"
              minLength={8}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              isInvalid={validated && password !== confirmPassword}
              required
            />
          </Grid>
          <br />
          <br />

          <Grid item xs={12} sm={4} md={5}>
            <Form.Label>Phone number: </Form.Label>
          </Grid>
          <Grid container item xs={12} sm={8} md={7}>
            <Grid item xs={5} sm={4}>
              <InputGroup size="sm">
                <InputGroup.Prepend>
                  <InputGroup.Text>+</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  size="sm"
                  type="text"
                  pattern="[0-9]*"
                  placeholder="47"
                  onChange={(e) => setCountryCode("+" + e.target.value)}
                  required
                />
              </InputGroup>
            </Grid>

            <Grid item xs={7} sm={8}>
              <Form.Control
                size="sm"
                type="text"
                pattern="[0-9]*"
                minLength={8}
                maxLength={17}
                placeholder="99999999"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </Grid>
            <br />
            <br />
          </Grid>
        </Grid>

        <InternalButton
          buttonStyle="btn-primary"
          buttonSize="btn-medium"
          extraCss="apply-here profile-button"
          type="submit"
        >
          Register
        </InternalButton>
      </Form>
    </div>
  );
};
