import './styles.css';

import {
  HeatMapOutlined
} from '@ant-design/icons';

import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="sidebar">
      <Menu>
        <Menu.Item key="0" icon={<HeatMapOutlined />}>
          <Link to="/">SimpleMap</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
