import axios from 'axios';

const axiosConfig = {
  baseURL: '/api',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  responseType: 'json',
};

const AxiosInstance = axios.create(axiosConfig);

AxiosInstance.interceptors.response.use(
  (res) => {
    if (res.status !== 200 || !res.data) {
      throw 'error';
    }
    return res.data;
  },
  (error) => {
    throw error;
  }
);

export default AxiosInstance;
