import axios from 'axios';
export const getUserList = () => {
  return axios('/user/list')
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
