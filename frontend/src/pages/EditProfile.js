import React from "react";
import { EditProfileForm } from "../components/forms/EditProfileForm";
import { useSessionContext } from "../context/session";
import { useLoggedInPage } from "../core/auth";

export const EditProfile = ({ setSuccess }) => {
  useLoggedInPage();

  const session = useSessionContext();

  return (
    <>
      {session.user ? (
        <EditProfileForm user={session.user} setSuccess={setSuccess} />
      ) : null}
    </>
  );
};

export default EditProfile;
