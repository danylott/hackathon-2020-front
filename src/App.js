import 'antd/dist/antd.css';
import './App.css';
import SimpleMap from './components/SimpleMap';
import SideBar from './components/SideBar';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route component={SideBar} />
        <Switch>
          <Route path="/" component={SimpleMap} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}