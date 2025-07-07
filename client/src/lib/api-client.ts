import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost/georgianpoint-main/php/api/', // Your PHP backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});
