import React, { Component } from "react";

export default class Home extends React.Component{
  state = {users:[]}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render(){
    return(
      <div>
        <h1>Welcome to DegreeAudit++</h1>
        <h2>Users</h2>
        {this.state.users.map( user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}