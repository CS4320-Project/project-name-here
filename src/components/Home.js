import React from "react";
import UserInfo from './UserInfo';
import ToggleButtons from './ToggleButtons';
import Table from './Table.js';

export default class Home extends React.Component{
  state = {users:[]}

  render(){
    return(
      <div>
        <UserInfo student={this.props.student}/>
	      <ToggleButtons />
        <Table courses={this.props.student.courses}/>
      </div>

    );
  }
}
