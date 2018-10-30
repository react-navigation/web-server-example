import React, { Component } from "react";
import { Link } from "@react-navigation/web";

export default class Contributor extends Component {
  static path = "contributor/:name";

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("name"),
    linkName: "Contributor Page"
  });
  render() {
    return (
      <div>
        <h2>Contributor Screen</h2>
      </div>
    );
  }
}
