import React from 'react';
import LoginFrom from './component';
import axios from 'axios';
axios('/user/list').then((res) => {
  console.log(res);
});
export default function Login() {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>后台管理测试</h1>
      <LoginFrom></LoginFrom>
    </div>
  );
}
