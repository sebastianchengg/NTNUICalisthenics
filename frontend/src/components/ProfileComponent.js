import React, { useState, useEffect } from "react";
import AuthenticationService from "../core/user";
import { useSessionContext } from "../context/session";
import { InternalButton } from "../components/LinkButton";
import { useHistory } from "react-router";
import Grid from "@material-ui/core/Grid";

const ProfileLine = ({ heading, info }) => {
  return (
    <>
      <div className="line-container">
        <Grid container spacing={0} justify="center">
          <Grid item xs={12} sm={4} md={5}>
            <div className="heading-text">{heading}:</div>
          </Grid>

          <Grid item xs={12} sm={8} md={7}>
            <div className="info-text">{info}</div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export const ProfileComponent = ({ user }) => {
  const session = useSessionContext();
  const history = useHistory();
  const [date, setDate] = useState();

  useEffect(() => {
    setDate(getDate(user.date_joined));
  }, [user.date_joined]);

  const getDate = (date) => {
    const list = date.split("T");
    const numbers = list[0].split("-");
    return numbers[2] + "." + numbers[1] + "." + numbers[0];
  };

  const logOut = () => {
    AuthenticationService.logOut();
    session.updateSelfUser().then(() => history.push("/login"));
  };

  return (
    <>
      <div className="profile-container">
        <ProfileLine
          heading="Name"
          info={`${user.first_name} ${user.last_name}`}
        />
        <ProfileLine heading="Email" info={user.email} />
        <ProfileLine heading="Phone number" info={user.phone_number} />
        <ProfileLine heading="Date joined" info={date} />

        <br/>

        <InternalButton
          buttonStyle="btn-primary"
          buttonSize="btn-medium"
          extraCss="apply-here"
          onClick={logOut}
        >
          Logout
        </InternalButton>
      </div>
    </>
  );
};
