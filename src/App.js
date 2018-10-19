import React, { Component } from "react";
import {
  createNavigator,
  SwitchRouter,
  SceneView,
  withNavigation,
  NavigationActions
} from "@react-navigation/core";

const queryString = require("query-string");

const getTopNavigation = navigation => {
  const parent = navigation.dangerouslyGetParent();
  if (parent) {
    return getTopNavigation(parent);
  }
  return navigation;
};

class LinkWithNavigation extends Component {
  render() {
    const { children, params, to, navigation } = this.props;
    const topNavigation = getTopNavigation(navigation);
    const topRouter = topNavigation.router;
    const navActionResponse = topRouter.getStateForAction(
      NavigationActions.navigate({
        routeName: to,
        params
      }),
      topNavigation.state
    );
    const nextState =
      navActionResponse === null ? topNavigation.state : navActionResponse;
    const pathAndParams = topRouter.getPathAndParamsForState(nextState);
    const href = `/${pathAndParams.path}?${queryString.stringify(
      pathAndParams.params
    )}`;
    return (
      <a
        href={href}
        onClick={e => {
          navigation.navigate(to, params);
          e.preventDefault();
        }}
      >
        {children}
      </a>
    );
  }
}
const Link = withNavigation(LinkWithNavigation);

const Home = () => (
  <div>
    <h2>Home Screen</h2>
    <Link to="Profile" params={{ name: "Brent" }}>
      Go to Profile
    </Link>
  </div>
);
Home.path = "";
Home.navigationOptions = {
  title: "Home",
  linkName: "Home Page"
};

const Profile = ({ navigation }) => (
  <div>
    <h2>
      {navigation.getParam("name")}
      's Profile
    </h2>
    <Link to="Home">Go Home</Link>
  </div>
);
Profile.path = "person";
Profile.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("name"),
  linkName: "Profile Page"
});

class SidebarView extends React.Component {
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
          <h1>Hello, Navigation</h1>
          {Object.keys(descriptors).map(d => (
            <div>
              <Link
                to={descriptors[d].navigation.state.routeName}
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

const AppNavigator = createNavigator(
  SidebarView,
  SwitchRouter({
    Home,
    Profile
  }),
  {}
);

export default AppNavigator;
