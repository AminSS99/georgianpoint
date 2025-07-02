import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api', // Your PHP backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});
