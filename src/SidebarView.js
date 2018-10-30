import React, { Component, useState } from "react";
import { SceneView } from "@react-navigation/core";
import { Link } from "@react-navigation/web";
import { useNavigationEvents } from "react-navigation-hooks";

export default function SidebarView({ descriptors, navigation }) {
  const [events, setEvents] = useState([]);
  useNavigationEvents(evt => {
    // latest state on evt.state
    // prev state on evt.lastState
    // triggering navigation action on evt.action
    setEvents([...events, evt.type]);
    // evt.type is [will/did][Focus/Blur]
  });
  const activeKey = navigation.state.routes[navigation.state.index].key;
  const descriptor = descriptors[activeKey];
  return (
    <div style={{ display: "flex", height: "100%", justifyContent: "stretch" }}>
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
        You have navigated within docs {events.length} times
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
