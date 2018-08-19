import React, { Component } from 'react';
import './App.css';
import Header from './container/Header';
import MainBody from './container/MainBody';
import Footer from './component/Footer';
import SignUp from './Modal/SignUp';
import SignIn from './Modal/SignIn';
import CreatePost from './Modal/CreatePost';
import Group from './component/Group';

export default class App extends Component {

  state = {
    modalName : ''
  }

  getModalToDisplay = () => {
    if(this.state.modalName === 'SignUp') {
      return <SignUp onClose={ (e) => { this.setModalName('')}}/>
    }

    if(this.state.modalName === 'SignIn') {
      return <SignIn onClose={ (e) => { this.setModalName('')}}/>
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
      <Group>
        <Header onModalChange={ (e) => this.setModalName(e) } />
        <MainBody />
        <Footer />

        <div className='modal-container'>
          { this.getModalToDisplay() }
        </div>
      </Group>
    );
  }
}
