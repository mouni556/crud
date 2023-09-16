import React from 'react';
import axios from 'axios';

const Api = () => {
  const http = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
      'Content-Type': 'application/json', // Use 'Content-Type' instead of 'Content-type'
    },
  });

  return {
    http,
  };
};

export default Api;
