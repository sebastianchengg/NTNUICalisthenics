import React from 'react';
import AuthenticationService from "../core/user";
import { useSessionContext } from "../context/session";
import { useHistory } from "react-router";
import { Button } from "react-bootstrap";

export const ProfileComponent = ({user}) => {
    const session = useSessionContext();
    const history = useHistory();

    const logOut = () => {
        AuthenticationService.logOut();
        session.updateSelfUser().then(() => history.push("/login"));
      };

    return (
        <>
            <div>{user.first_name} {user.last_name}</div>
            <div>{user.email}</div>
            <div>{user.phone_number}</div>
            <div>{user.date_joined}</div>
            <Button className="button" onClick={logOut} variant="outline-primary">
          Logg Ut
        </Button>
        </>
    )
}