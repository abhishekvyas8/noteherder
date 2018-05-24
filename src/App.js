import React, { Component } from 'react';
import './App.css';
import Main from './Main.js'
import SignIn from './SignIn.js'

class App extends Component {
  constructor(){
    super()

    this.state = {
      uid: null,
    }
  }

  handleAuth = () => {
    this.setState({
      uid: 'hi',
    })
  }

  signOut = () => {
    this.setState({
      uid: null,
    })
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
