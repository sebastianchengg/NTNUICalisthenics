import React from 'react'
import axios from "axios";
import "./client.css";

export function readDjangoError(response) {
    let errors = [];
    for (const prop in response.data) {
      const val = response.data[prop];
      errors = errors.concat(val);
    }
  
    if (errors.length === 0) {
      return "An unexpected error occured";
    }
  
    if (errors.length === 1) {
      return errors[0];
    }
  
    return (
      <div>
        {errors.map((error, idx) => (
          <div className="error-text" key={idx}>{error}</div>
        ))}
      </div>
    );
  }

export const API_URL = "http://localhost:8000/";

/**
 * Creates an axios instance with a set base URL
 */
const client = axios.create({ baseURL: API_URL });

export default client;