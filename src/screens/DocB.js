import React, { Component } from "react";

export default class DocB extends Component {
  static path = "doc-b";

  static navigationOptions = {
    title: "DocB",
    linkName: "Document B"
  };
  render() {
    return (
      <div>
        <h2>DocB Screen</h2>
      </div>
    );
  }
}
