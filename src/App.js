import 'antd/dist/antd.css';
import './App.css';
import LoginPage from './components/LoginPage';
import SideBar from './components/SideBar';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ParticipantPage from "./components/ParticipantPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route component={SideBar} />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/participants" component={ParticipantPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}