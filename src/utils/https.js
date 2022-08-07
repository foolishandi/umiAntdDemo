import axios from 'axios';
import nprogress from 'nprogress';
// axios.defaults.baseURL='http://localhost:3000'
axios.interceptors.request.use(
  function (config) {
    nprogress.start();
    if (config?.url.includes('login')) {
      return config;
    }

    const token = localStorage.getItem('token');
    console.log('请求前', token);
    if (token) {
      config.headers.auth = `Bearer ${token}`;
    } else {
      localStorage.removeItem('user');
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response) {
    nprogress.done();
    console.log('请求后', response.headers.auth);
    const { auth } = response.headers;
    auth && localStorage.setItem('token', auth);
    return response;
  },
  function (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);
