import React from 'react'
import axios from "axios";

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
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    );
  }

export const API_URL = "http://localhost:8000/";

/**
 * Creates an axios instance with a set base URL
 */
const client = axios.create({ baseURL: API_URL });

export default client;