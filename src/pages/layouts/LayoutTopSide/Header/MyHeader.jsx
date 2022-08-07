import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';

import styles from './MyHeader.module.css';

import UserDrop from './components/UserDrop';
import Avatars from './components/Avatars';
import { useSelector } from 'react-redux';

const { Header } = Layout;

function MyHeader({ handleToggle, collapsed }) {
  // const user = useSelector((store) => store.init.user);
  let user;
  const localUser = JSON.parse(localStorage.getItem('user'));
  return (
    <Header
      style={{
        padding: 0,
        background: '#fff',
        borderBottom: '1px solid rgba(0,0,0,.2)',
      }}
    >
      <span style={{ float: 'right', marginRight: '20px' }}>
        <Avatars style={{ marginRight: 10 }}></Avatars>
        <UserDrop>{localUser ? localUser.username : user.username}</UserDrop>
      </span>
    </Header>
  );
}
export default MyHeader;
