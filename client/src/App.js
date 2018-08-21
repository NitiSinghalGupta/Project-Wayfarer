import React, { Component } from 'react';
import './App.css';
import Header from './container/Header';
import Footer from './component/Footer';
import SignUp from './Modal/SignUp';
import SignIn from './Modal/SignIn';
import Group from './component/Group';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyRoutes from './config/Routes';
import CreatePost from './Modal/CreatePost';
import IfClause from './component/IfClause';

const cities = [{name:"london",country:"United Kingdom",img:""},
                {name:"Delhi",country:"India",img:""},    
                {name:"San Jose",country:"United States of America",img:""}, 
                {name:"Rome",country:"Italy",img:""}, 
                {name:"Ontario",country:"Canada",img:""}
]

export default class App extends Component {

  state = {
    modalName : '',
    profile: null,
    userHasLoggedIn: false,
  }

  checkProtect = () => {
    if (localStorage.getItem("email") !== '') {
      this.setState({userHasLoggedIn: true})
    }

  }


  getModalToDisplay = () => {
    if(this.state.modalName === 'SignUp') {
      return <SignUp 
                 onClose={ (e) => { this.setModalName('')}} 
                 onProfileChange={ (data) => {
                  this.setProfileData(data); 
                  console.log('from signup set profile data as: ', data);
                 }
                } 
              />
      
    }

    if(this.state.modalName === 'SignIn') {
      return <SignIn 
               onClose={ (e) => { this.setModalName('')}} 
               checkProtect={this.checkProtect}
               onProfileChange={ (data) => {
                 this.setProfileData(data) 
                 console.log('from signin set profile data as: ', data);
                }
                }  
                
              />
    }

     

    if(this.state.modalName === 'createPost') {
      return <CreatePost 
      onClose={ (e) => { this.setModalName('')}} cities={ cities } 
      user={ this.state.profile } />
    }

    return null;
  }

  setModalName = (name) => {
    this.setState({ modalName: name});
  } 

  setProfileData = (data) => {
    this.setState({ profile : data});
    console.log('set profile data as: ', data);
  }

  render() {
    return (
      <BrowserRouter>
        <Group>
          <Header onModalChange={ (e) => this.setModalName(e) } profile={ this.state.profile } onProfileChange={ (data) => this.setProfileData(data) }/>
   
          <main>
              <MyRoutes onModalChange={ (name) => this.setModalName(name) } 
                        user={this.state.profile}
                        cities={ cities }
                        userHasLoggedIn={this.state.userHasLoggedIn}
                        />
            </main>

          <Footer />

          <IfClause condition={ this.state.modalName !== ''}>
            <div className='modal-container'>
              { this.getModalToDisplay() }
            </div>
          </IfClause>
        </Group>
      </BrowserRouter>
    );
  }
}
