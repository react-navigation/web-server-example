import React, { Component } from "react";
import { Link } from "@react-navigation/web";

export default class DocA extends Component {
  static path = "doc-a";

  static navigationOptions = {
    title: "DocA",
    linkName: "Document A"
  };
  render() {
    return (
      <div>
        <h2>DocA Screen</h2>
        <Link routeName="DocB">Go to doc B</Link>
      </div>
    );
  }
}
