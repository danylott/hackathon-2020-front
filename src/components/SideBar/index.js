import './styles.css';

import {
    GiftOutlined,
    UserOutlined
} from '@ant-design/icons';

import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="sidebar">
      <Menu>
          <Menu.Item key="0" icon={<UserOutlined />}>
              <Link to="/login">Log In</Link>
          </Menu.Item>

          <Menu.Item key="1" icon={<GiftOutlined />}>
              <Link to="/participants">Participants</Link>
          </Menu.Item>
      </Menu>
    </div>
  );
}
