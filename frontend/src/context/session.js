import React, { createContext, useContext, useState, useEffect } from "react";
import AuthenticationService from "../core/auth";
import UserAPI from "../api/UserAPI";

/**
 * Creates a session with initial values from outside providers
 *
 * @returns The created {@link Session}
 */
export const useProviderValue = () => {
  const [user, setUser] = useState(undefined);
  const [redirectPath, setRedirectPathState] = useState("/profile");

  const updateSelfUser = () =>
    new Promise((resolve, reject) => {
      if (!AuthenticationService.isLoggedIn()) {
        setUser(undefined);
        resolve();
        return;
      }

      UserAPI.getSelfUser()
        .then((user) => {
          setUser(user);
          resolve();
        })
        .catch((error) => {
          setUser(undefined);
          reject(error);
        });
    });

  const setRedirectPath = (redirectPath) => {
    // This ensures that we can never want to redirect someone to
    // an authentication endpoint when authenticating
    if (redirectPath === "/login" || redirectPath === "/register") {
      return;
    }

    setRedirectPathState(redirectPath);
  };

  // Load the initial user if we are logged in
  useEffect(() => {
    if (!AuthenticationService.isLoggedIn()) {
      return;
    }

    updateSelfUser();
  }, []); // By setting dependencies to none this is ran only once.

  const isAuthenticated = AuthenticationService.isLoggedIn();
  return {
    isAuthenticated,
    user,
    redirectPath,
    updateSelfUser,
    setRedirectPath,
  };
};

const SessionContext = createContext(undefined);
SessionContext.displayName = "SessionContext";

/**
 * Context provider for the {@link Session} context. Any child of this
 * component will have access to session data.
 *
 * @param props - Any props, passed directly to the Provider component
 */
export const SessionContextProvider = (props) => {
  const value = useProviderValue();
  return <SessionContext.Provider value={value} {...props} />;
};

/**
 * Hook for getting the current session context. Must be called from
 * a component that is a child (Does not have to be a direct child)
 * of a {@link SessionContextProvider}.
 *
 * @returns The current {@link Session}
 */
export const useSessionContext = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSessionContext must be called within a provider!");
  }

  return context;
};
