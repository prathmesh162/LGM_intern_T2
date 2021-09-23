import Users from "./profiles";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_data: [], loading: true };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    document.getElementById("main").style.display = "flex";
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <h4>Brand Name</h4>
            <button onClick={this.updateState}>Get Users</button>
          </div>
        </nav>
        <Users loading={this.state.loading} users={this.state.users_data} />
      </>
    );
  }
}

export default App;
