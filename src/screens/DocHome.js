import React, { Component } from "react";
import { Link } from "@react-navigation/web";

export default class DocHome extends Component {
  static path = "";

  static navigationOptions = {
    title: "DocHome",
    linkName: "DocHome Page"
  };
  render() {
    return (
      <div>
        <h2>DocHome Screen</h2>
        <Link routeName="DocA">Go to doc A</Link>
      </div>
    );
  }
}
