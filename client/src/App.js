import React, { Component } from 'react';
import './App.css';
import Header from './container/Header';
import MainBody from './container/MainBody';
import Footer from './component/Footer';
import SigninSignup from './Modal/SigninSignup';
import CreatePost from './Modal/CreatePost';

export default class App extends Component {

  state = {
    modalName : ''
  }

  getModalToDisplay = () => {
    if(this.state.modalName === 'signinSignup') {
      return <SigninSignup onClose={ (e) => { this.setModalName('')}}/>
    }

    if(this.state.modalName === 'createPost') {
      return <CreatePost />
    }

    return null;
  }

  setModalName = (name) => {
    this.setState({ modalName: name});
  } 

  render() {
    return (
      <div className="App">
        <Header onModalChange={ (e) => this.setModalName(e) } />
        <MainBody />
        <Footer />

        <div className='modal-container'>
          { this.getModalToDisplay() }
        </div>
      </div>
    );
  }
}
