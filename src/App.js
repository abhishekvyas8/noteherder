import React, { Component } from 'react';
import './App.css';
import Main from './Main.js'
import SignIn from './SignIn.js'
import {auth} from './firebaseSetup.js'

class App extends Component {
  constructor(){
    super()

    this.state = {
      uid: null,
    }
  }

  componentWillMount(){
    auth.onAuthStateChanged((user) => {
      if(user){
        this.handleAuth();
      }
      else{
        this.handleUnAuth();
      }
    });

    this.setState({
      uid: JSON.parse(localStorage.getItem('uid'))
    })
  }

  componentDidMount(){
  }

  handleAuth = () => {
    this.setState({
      uid: 'hi',
    })
    window.localStorage.setItem('uid', JSON.stringify(this.state.uid));
  }

  handleUnAuth = () => {
    this.setState({
      uid: null,
    });
    window.localStorage.setItem('uid', JSON.stringify(this.state.uid));
  }

  signOut = () => {
    auth.signOut();
  }

  signedIn = () => {
    return(this.state.uid);
  }

  render() {
    return (
      <div className="App">
        {this.signedIn() ? <Main signOut = {this.signOut}/> : <SignIn handleAuth = {this.handleAuth}/>}
      </div>
    );
  }
}

export default App;
