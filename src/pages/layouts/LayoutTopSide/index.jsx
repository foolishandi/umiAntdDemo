import React from 'react';
import styles from './index.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { Link } from 'umi';
import MyHeader from './Header/MyHeader';

import { Scrollbars } from 'react-custom-scrollbars';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default (props) => (
  <div className={styles.container}>
    <div id="components-layout-demo-top-side-2">
      <Layout>
        <Header className="header">
          <Menu className="logo" theme="light" mode="horizontal">
            后台系统测试
          </Menu>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{
              lineHeight: '64px',
              justifyContent: 'flex-end',
            }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <UserOutlined />
                  测试
                </span>
              }
            >
              <Menu.Item key="12">
                <Link to="/admin/userlist">用户列表</Link>
              </Menu.Item>
              <Menu.Item key="22">option2</Menu.Item>
            </SubMenu>
            <Menu.Item key="10" style={{ order: 6 }}>
              <MyHeader></MyHeader>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['0']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                borderRight: 0,
              }}
            >
              <Menu.Item key="0">
                <Link to="/admin">首页</Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
                    用户管理
                  </span>
                }
              >
                <Menu.Item key="1">
                  <Link to="/admin/userlist">用户列表</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  {' '}
                  <Link to="/admin/listtablelist">查询列表</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/admin/accountcenter">个人中心</Link>
                </Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <LaptopOutlined />
                    subnav 2
                  </span>
                }
              >
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <NotificationOutlined />
                    subnav 3
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout
            style={{
              padding: '0 24px 24px',
            }}
          >
            {/* <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}

            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Scrollbars>{props.children} </Scrollbars>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </div>
);
