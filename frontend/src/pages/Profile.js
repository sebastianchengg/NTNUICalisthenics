import React, { useState, useEffect } from "react";
import { useSessionContext } from "../context/session";
import { ProfileComponent } from "../components/ProfileComponent";
import { useLoggedInPage } from "../core/auth";

export const Profile = () => {
  const session = useSessionContext();
  const [profile, setProfile] = useState();

  useLoggedInPage();

  useEffect(() => {
    if (session !== undefined) {
      setProfile(true);
    }
  }, [session]);

  return (
    <>
      {profile && session.user ? (
        <ProfileComponent user={session.user} />
      ) : null}
    </>
  );
};

export default Profile;
