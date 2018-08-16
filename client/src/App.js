import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './container/Header';
import MyRoutes from './config/Routes';
import Profile from './container/Profile';
import MainBody from './container/MainBody';
import Footer from './component/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <MainBody />
      <Footer />
      </div>
    );
  }
}


