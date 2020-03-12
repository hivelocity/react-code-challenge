import axios from 'axios';

const api = axios.create({
  baseURL: 'https://core.hivelocity.net/api/v2',
  headers: {
    'X-API-KEY': 'b4b63a0eea99007ed9089582eebe9c62f8e38c20',
  },
});

export { api };
