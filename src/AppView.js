import React, { Component } from "react";
import { SceneView } from "@react-navigation/core";
import { Link } from "@react-navigation/web";

export default class AppView extends Component {
  render() {
    const { descriptors, navigation } = this.props;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const descriptor = descriptors[activeKey];
    return (
      <div style={{ height: "100%" }}>
        <h1>My Project</h1>
        <div
          style={{
            borderBottom: "1px solid #99b",
            padding: 20
          }}
        >
          <Link routeName={"Home"} navigation={navigation}>
            Home
          </Link>
          <Link routeName={"Docs"} navigation={navigation}>
            Docs
          </Link>
          <Link routeName={"About"} navigation={navigation}>
            About
          </Link>
        </div>
        <div>
          <SceneView
            navigation={descriptor.navigation}
            component={descriptor.getComponent()}
          />
        </div>
      </div>
    );
  }
}
