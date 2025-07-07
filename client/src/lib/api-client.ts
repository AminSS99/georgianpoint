import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost/georgianpoint-main/php/api/', // Your PHP backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});
