import React from "react";
import { EditProfileForm } from "../components/forms/EditProfileForm";
import { useSessionContext } from "../context/session";
import { useLoggedInPage } from "../core/auth";

export const EditProfile = () => {
  useLoggedInPage();

  const session = useSessionContext();

  return <>{session.user ? <EditProfileForm user={session.user} /> : null}</>;
};

export default EditProfile;
