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
import EditPost from './Modal/EditPost';

const cities = [{name:"london",country:"United Kingdom",img:"/images/london.jpg"},
                {name:"New York",country:"United States of America",img:"/images/niagra.jpg"},
                {name:"San Francisco",country:"United States of America",img:"/images/gg.jpg"},
                {name:"Delhi",country:"India",img:"/images/taj.jpg"},    
                {name:"San Jose",country:"United States of America",img:"/images/roses.jpg"}, 
                {name:"Rome",country:"Italy",img:"/images/rome.jpg"}, 
                {name:"Ontario",country:"Canada",img:"/images/canada.jpg"}
                
]

export default class App extends Component {

  state = {
    modalName : '',
    profile: null,
    editablePost: null
  }

  componentWillMount() {
    let profile = localStorage.getItem('profile');
    if(profile) {
      let parsedProfile = JSON.parse(profile);
      this.setState({ profile : parsedProfile });
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

    if(this.state.modalName === 'editPost') {
      return <EditPost onClose={ (e) => { this.setModalName('')}} 
                       post={ this.state.editablePost } 
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

  onPostEdit = (post) => {
    this.setState({ editablePost : post});
    this.setModalName('editPost');
  }

  render() {
    return (
      <BrowserRouter>
        <Group>
          <Header onModalChange={ (e) => this.setModalName(e) } profile={ this.state.profile } onProfileChange={ (data) => this.setProfileData(data) }/>
   
          <main>
              <MyRoutes onModalChange={ (name) => this.setModalName(name) } 
                        user={this.state.profile} cities={ cities } 
                        onPostEdit={ (post) => this.onPostEdit(post) } />
            </main>

          <Footer />

          <IfClause condition={ this.state.modalName !== ''}>
            <div className='modal-backdrop'></div>
            <div className='modal-container'>
              { this.getModalToDisplay() }
            </div>
          </IfClause>
        </Group>
      </BrowserRouter>
    );
  }
}
