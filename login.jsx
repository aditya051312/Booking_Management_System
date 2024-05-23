import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type='text' name='username' onChange={this.handleInputChange} />
        </label>
        <label>
          Password:
          <input type='password' name='password' onChange={this.handleInputChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}