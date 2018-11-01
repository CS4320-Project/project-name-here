import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Main from './Main.js';

const storage = window.localStorage;

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isAuthenticated: storage.getItem('isAuthenticated'),
      user: null
    };
  }

  componentDidMount(){
    let user = storage.getItem('user');
    console.dir(JSON.parse(user));
    if(user !== 'undefined'){
      this.setState({user: JSON.parse(user)});
    }
  }

  userHasAuthenticated = (authenticated, user) => {
    this.setState({isAuthenticated: authenticated});
    storage.setItem('isAuthenticated', authenticated);
    if(user){
      this.setState({user: user});
      storage.setItem('user', JSON.stringify(user));
    } else {
      this.setState({user: null});
      storage.removeItem('user');
    }
    if(!authenticated){
      window.location = '/login';
    }
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App">

        <Header childProps={childProps}/>
        <Main user={this.state.user} childProps={childProps}/>

      </div>
    );
  }
}

export default App;
