import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyUserDrop = ({ children = '游客' }) => {
  const handleOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    document.location.href = '/login';
  };

  const menu = (
    <Menu
      items={[
        {
          label: <a href="https://www.antgroup.com">1st menu item</a>,
          key: '0',
        },
        {
          label: <a href="https://www.aliyun.com">2nd menu item</a>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: <Button onClick={handleOut}>退出登录</Button>,
          key: '3',
        },
      ]}
    />
  );
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <span onClick={(e) => e.preventDefault()}>
        <Space>
          {children}
          <DownOutlined />
        </Space>
      </span>
    </Dropdown>
  );
};

export default MyUserDrop;
