import React from 'react'
import axios from "axios";

export const API_URL = "http://localhost:8000/";

/**
 * Creates an axios instance with a set base URL
 */
const client = axios.create({ baseURL: API_URL });

export default client;