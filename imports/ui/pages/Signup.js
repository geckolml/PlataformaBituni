import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import handleSignup from '../../modules/signup';

export default class Signup extends React.Component {
  componentDidMount() {
    handleSignup({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (<Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 }>
        <h4 className="page-header">Sign Up</h4>
        <form ref="signup" className="signup" onSubmit={ this.handleSubmit }>
          <Row>
            <Col xs={ 6 } sm={ 6 }>
              <FormGroup>
                <ControlLabel>Nombres</ControlLabel>
                <FormControl
                  type="text"
                  ref="firstName"
                  name="firstName"
                  placeholder="Nombres"
                />
              </FormGroup>
            </Col>
            <Col xs={ 6 } sm={ 6 }>
              <FormGroup>
                <ControlLabel>Apellidos</ControlLabel>
                <FormControl
                  type="text"
                  ref="lastName"
                  name="lastName"
                  placeholder="Apellidos"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <ControlLabel>Correo Electrónico</ControlLabel>
            <FormControl
              type="text"
              ref="emailAddress"
              name="emailAddress"
              placeholder="Correo Electrónico"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Contraseña</ControlLabel>
            <FormControl
              type="password"
              ref="password"
              name="password"
              placeholder="Contraseña"
            />
          </FormGroup>
          <Button type="submit" bsStyle="success">Registrarse</Button>
        </form>
        <p>Ya tienes una cuenta ? <Link to="/login">Log In</Link>.</p>
      </Col>
    </Row>);
  }
}
