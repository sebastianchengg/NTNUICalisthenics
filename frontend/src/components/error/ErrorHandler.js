import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const warningStyle = {
  fontSize: "12px",
  padding: "5px 5px",
  width: "inherit",
  margin: "10px auto",
  textAlign: "center",
};

/**
 * A state for making simple error handling components. Supports
 * simple error messages.
 *
 * @returns a newly created {@link ErrorState}
 */
export const useErrorState = () => {
  const [error, setError] = useState(undefined);

  const makeErrorComponent = () => {
    if (!error) {
      return null;
    }

    return (
      <>
        <Alert variant="warning" style={warningStyle}>
          {error}
        </Alert>
      </>
    );
  };

  return { error: makeErrorComponent(), setError };
};
