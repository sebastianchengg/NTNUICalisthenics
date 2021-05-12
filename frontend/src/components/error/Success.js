import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import "./Success.css";

export const Success = () => {
  const [success, setSuccess] = useState(undefined);

  const makeSuccessComponent = () => {
    if (!success) {
      return null;
    }

    return (
      <>
        <div className="success-container">
          <Toast
            onClose={() => setSuccess(false)}
            show={!!success}
            delay={3000}
            autohide
          >
            <div className="toast-text">{success}</div>
          </Toast>
        </div>
      </>
    );
  };

  return { success: makeSuccessComponent(), setSuccess };
};
