import ky from 'ky';

const apiClient = ky.create({
  prefixUrl: process.env.API_URL,
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'omit',
});

export default apiClient;
