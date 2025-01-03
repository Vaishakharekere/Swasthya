// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', // Update this with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
