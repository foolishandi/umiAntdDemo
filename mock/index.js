import Mock from 'mockjs';
import userList from './json/userList.json';
export default {
  'GET /user/list': Mock.mock(userList),
  'POST /user/login': (req, res) => {
    const { username, password } = req.body;
    let currentList = Mock.mock(userList);
    let users = [...currentList.data, currentList.superAdmin];
    let isAuth, token;
    console.log('a', username, password);
    for (let user of users) {
      if (user.username === username && user.password === Number(password)) {
        isAuth = user;
        token = '123123';
        break;
      }
    }
    console.log(isAuth);
    res.send(
      isAuth
        ? {
            status: 200,
            msg: 'success',
            data: isAuth,
            token: token,
          }
        : {
            status: 404,
            msg: 'error',
            data: '账号或者密码错误',
          },
    );
  },
};
