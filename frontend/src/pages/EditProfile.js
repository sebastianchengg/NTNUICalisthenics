import React from "react";
import { EditProfileForm } from "../components/forms/EditProfileForm";
import { useSessionContext } from "../context/session";

export const EditProfile = () => {
    const session = useSessionContext();

  return (
    <>
      {session.user ? <EditProfileForm user={session.user}/> : null}
    </>
  );
};

export default EditProfile;