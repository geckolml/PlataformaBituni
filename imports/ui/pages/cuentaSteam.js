import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

//import 'main'
export default class cuentaSteam extends React.Component {

  id() {
    return Meteor.user().profile.id;
  }

  handleClick(e) {

      Meteor.loginWithSteam();
    //  console.log(id());

  }

  render() {
    return (
      <div>
      <button id="loginSteam" onClick={this.handleClick.bind(this)}>Log in with Steam</button>

      </div>
);
  }
}
