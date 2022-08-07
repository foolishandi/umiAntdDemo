import axios from 'axios';

export const login = (formData) => {
  console.log('logindata-----------------');
  return axios
    .post('/user/login', formData)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
