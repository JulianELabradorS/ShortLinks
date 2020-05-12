import React from 'react';
import SingUp from './singUp';
import { connect } from 'react-redux';
import * as userActions from '../reducers/actions/userActions';

class SingUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      email: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let counter = 0;
    for (let key in this.state) {
      if (this.state[key] === '') {
        counter++;
        document.getElementById(`form${key}`).style.border = 'red 1px solid';
        document.getElementById('alert').style.display = 'block';
      } else {
        document.getElementById(`form${key}`).style.border = 'none';
      }
    }
    if (counter === 0) {
      document.getElementById('alert').style.display = 'none';
      this.props.createUser(this.state);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return <SingUp handleSubmit={this.handleSubmit} handleChange={this.handleChange} />;
  }
}
const mapStateToProps = ({ userReducer }) => userReducer;

export default connect(mapStateToProps, userActions)(SingUpContainer);
