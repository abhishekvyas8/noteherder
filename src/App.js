import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
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
        this.handleAuth(user);
      }
      else{
        this.handleUnAuth();
      }
    });

    this.setState({
      uid: JSON.parse(localStorage.getItem('uid'))
    })
  }

  handleAuth = (user) => {
    this.setState({
      uid: user.uid,
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
        <Switch>
          <Route 
            path = "/sign-in" 
            render = {() => 
              this.signedIn()
              ? <Redirect to = "/notes"/>
              : <SignIn handleAuth = {this.handleAuth}/>
            }
          /> 
          <Route 
            path = "/notes" 
            render = {() => 
              this.signedIn()
              ? <Main signOut = {this.signOut} uid = {this.state.uid}/>
              : <Redirect to = "/sign-in"/>
          }
          />
        </Switch>
        {/* {this.signedIn() ? <Main signOut = {this.signOut} uid = {this.state.uid}/> : <SignIn handleAuth = {this.handleAuth}/>} */}
      </div>
    );
  }
}

export default App;
