import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSessionContext } from "../../context/session";
import { Col, Form, InputGroup } from "react-bootstrap";
import { InternalButton } from "../LinkButton";
import AuthenticationService from "../../core/user";

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
    <Form noValidate validated={validated} onSubmit={onSubmit}>
      <Form.Row>
        <Col sm={4} md={3} lg={2}>
          <Form.Label>First name</Form.Label>
        </Col>
        <Col sm={6} md={5} lg={4} xl={3}>
          <Form.Control
            autoFocus
            type="text"
            pattern="^[a-zA-Z\p{L}]+$"
            minLength={2}
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </Col>
      </Form.Row>
      <br />

      <Form.Row>
        <Col sm={4} md={3} lg={2}>
          <Form.Label>Last name</Form.Label>
        </Col>
        <Col sm={6} md={5} lg={4} xl={3}>
          <Form.Control
            type="text"
            pattern="^[a-zA-Z\p{L}]+$"
            minLength={2}
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Col>
      </Form.Row>
      <br />

      <Form.Row>
        <Col sm={4} md={3} lg={2}>
          <Form.Label>Email address</Form.Label>
        </Col>
        <Col sm={6} md={5} lg={4} xl={3}>
          <Form.Control
            type="email"
            minLength={7}
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Col>
      </Form.Row>
      <br />

      <Form.Row>
        <Col sm={4} md={3} lg={2}>
          <Form.Label>Password</Form.Label>
        </Col>
        <Col sm={6} md={5} lg={4} xl={3}>
          <Form.Control
            type="password"
            placeholder="Password"
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={validated && password !== confirmPassword}
            required
          />
          <Form.Text>Password has to be at least 8 characters long</Form.Text>
        </Col>
      </Form.Row>
      <br />

      <Form.Row>
        <Col sm={4} md={3} lg={2}>
          <Form.Label>Repeat password</Form.Label>
        </Col>
        <Col sm={6} md={5} lg={4} xl={3}>
          <Form.Control
            type="password"
            placeholder="Password"
            minLength={8}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            isInvalid={validated && password !== confirmPassword}
            required
          />
        </Col>
      </Form.Row>
      <br />

      <Form.Row>
        <Col sm={4} md={3} lg={2}>
          <Form.Label>Phone number</Form.Label>
        </Col>
        <Col xs={5} sm={3} md={2} lg={2} xl={1}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>+</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              pattern="[0-9]*"
              placeholder="47"
              onChange={(e) => setCountryCode("+" + e.target.value)}
              required
            />
          </InputGroup>
        </Col>
        <Col xs={7} sm={3} md={3} lg={2} xl={2}>
          <Form.Control
            type="text"
            pattern="[0-9]*"
            minLength={8}
            maxLength={17}
            placeholder="99999999"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </Col>
      </Form.Row>
      <br />

      <InternalButton
        buttonStyle="btn-primary"
        buttonSize="btn-large"
        extraCss="apply-here"
        type="submit"
      >
        Registrer
      </InternalButton>
    </Form>
  );
};
