import React from 'react';
import axios from 'axios';

export default class UserList extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({ email: event.target.value, password: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.name,
      password: this.state.password
    };

    axios.post(`${process.env.URL}api/auth/login/`,{user})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}


