import React, { Component } from "react";
import UserList from "./UserList";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div>
        <UserList />
      </div>
    );
  }
}

export default App;
