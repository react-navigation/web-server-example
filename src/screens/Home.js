import React, { Component } from "react";
import { Link } from "@react-navigation/web";

export default class Home extends Component {
  static path = "";

  static navigationOptions = {
    title: "Home",
    linkName: "Home Page"
  };
  render() {
    return (
      <div>
        <h2>Home Screen</h2>
        <Link routeName="Contributor" params={{ name: "Brent" }}>
          Go to Brent's Contributor page
        </Link>
        <Link routeName="Docs">Go to Docs</Link>
      </div>
    );
  }
}
