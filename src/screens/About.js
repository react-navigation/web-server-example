import React, { Component } from "react";

export default class About extends Component {
  static path = "about";

  static navigationOptions = {
    title: "About"
  };
  render() {
    return (
      <div>
        <h2>About Screen</h2>
      </div>
    );
  }
}
