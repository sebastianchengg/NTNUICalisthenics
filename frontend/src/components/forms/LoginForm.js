import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSessionContext } from "../../context/session";
import AuthenticationService from "../../core/user";

export const LoginForm = () => {
  const session = useSessionContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [validated, setValidated] = useState(false);

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
        session.updateSelfUser();
      })
      .catch((error) => {
        if (error.response.status === 401) {
          //   setError("Feil brukernavn eller passord!");
          return;
        }

        // setError("En uforventet error oppstod!");
      });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={onSubmit}>
        <Form.Group controlId="form-login-email">
          <Form.Label>
            <p>Email</p>
          </Form.Label>
          <Form.Control
            autoFocus
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Vennligst skriv inn din emailaddresse!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="form-login-password">
          <Form.Label>
            <p>Password</p>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Vennligst skriv inn ditt passord!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="form-login-remember">
          <Form.Check
            type="checkbox"
            label="Forbli innlogget"
            onClick={(e) => setRemember(!remember)}
          />
        </Form.Group>

        <Button variant="secondary" href="/register">
          Opprett konto
        </Button>
        <Button variant="primary" type="submit">
          Logg inn
        </Button>
      </Form>
    </>
  );
};
