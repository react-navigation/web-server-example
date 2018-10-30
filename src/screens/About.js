import React, { Component, useState } from "react";
import {
  useNavigation,
  useNavigationKey,
  useFocusState
} from "react-navigation-hooks";

function MyThing() {
  const [isToggled, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!isToggled);
  }
  return <button onClick={handleToggle}>{isToggled ? "Yes" : "No"}</button>;
}

function MyLinkButton() {
  const { navigate } = useNavigation();
  return (
    <button
      onClick={() => {
        navigate("Home");
      }}
    >
      Go Home
    </button>
  );
}

function MyFocusTag() {
  return <p>{useFocusState().isFocused ? "Focused" : "Not Focused"}</p>;
}

function HasTheRouteKey() {
  return <p>Route Key: {useNavigationKey()}</p>;
}

export default class About extends Component {
  static path = "about";

  static navigationOptions = {
    title: "About"
  };
  render() {
    return (
      <div>
        <h2>You want hooks?! You got em</h2>
        <MyThing />
        <MyLinkButton />
        <MyFocusTag />
        <HasTheRouteKey />
      </div>
    );
  }
}
