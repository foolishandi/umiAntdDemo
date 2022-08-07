import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
import React from 'react';

const Avatars = ({ style }) => (
  <span style={style}>
    <Badge dot>
      <Avatar shape="circle" icon={<UserOutlined />} size="small" />
    </Badge>
  </span>
);

export default Avatars;
