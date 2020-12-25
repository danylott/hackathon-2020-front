import 'antd/dist/antd.css';
import './App.css';
import Login from './components/LoginPage';
import SideBar from './components/SideBar';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Participant from "./components/ParticipantPage";
import Wishlist from "./components/WishlistPage";
import Rules from "./components/RulesPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/participants" component={Participant} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/rules" component={Rules} />
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}