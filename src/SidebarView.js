import React, { Component } from "react";
import { SceneView } from "@react-navigation/core";
import { Link } from "@react-navigation/web";

export default class SidebarView extends Component {
  render() {
    const { descriptors, navigation } = this.props;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const descriptor = descriptors[activeKey];
    return (
      <div
        style={{ display: "flex", height: "100%", justifyContent: "stretch" }}
      >
        <div
          style={{
            width: 300,
            backgroundColor: "#efefef",
            borderRight: "1px solid #99b"
          }}
        >
          {Object.keys(descriptors).map(d => (
            <div key={d}>
              <Link
                routeName={descriptors[d].navigation.state.routeName}
                navigation={navigation}
              >
                {descriptors[d].options.linkName ||
                  descriptors[d].navigation.state.routeName}
              </Link>
            </div>
          ))}
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
