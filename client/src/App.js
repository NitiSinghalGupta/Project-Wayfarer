import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './component/Header';
import MyRoutes from './config/Routes';
import Profile from './container/Profile';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Profile />
      </div>
    );
  }
}


