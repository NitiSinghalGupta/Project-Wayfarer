import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './container/Header';
import MyRoutes from './config/Routes';
import MainBody from './container/MainBody';
import Footer from './component/Footer';
import SigninSignup from './Modal/SigninSignup';
import CreatePost from './Modal/CreatePost';

export default class App extends Component {

  // state = {
  //   modalName : 'signinSignup'
  // }

  // getModalToDisplay = () => {
  //   if(this.state.modalName === 'signinSignup') {
  //     return <SigninSignup />
  //   }

  //   if(this.state.modalName === 'createPost') {
  //     return <CreatePost />
  //   }

  //   return null;
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <MainBody />
        <Footer />

        {/* <div className='modal-container'>
          { this.getModalToDisplay() }
        </div> */}
      </div>
    );
  }
}
