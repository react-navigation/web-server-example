import {
  createNavigator,
  SwitchRouter,
  getActiveChildNavigationOptions
} from "@react-navigation/core";

import About from "./screens/About";
import Home from "./screens/Home";
import DocHome from "./screens/DocHome";
import DocA from "./screens/DocA";
import DocB from "./screens/DocB";
import Contributor from "./screens/Contributor";

import AppView from "./AppView";
import SidebarView from "./SidebarView";

const Docs = createNavigator(
  SidebarView,
  SwitchRouter({
    DocHome,
    DocA,
    DocB
  }),
  {
    navigationOptions: ({ navigation, screenProps }) => {
      const options = getActiveChildNavigationOptions(navigation, screenProps);
      return { title: options.title };
    }
  }
);
Docs.path = "docs";

const AppNavigator = createNavigator(
  AppView,
  SwitchRouter({
    Home,
    About,
    Docs,
    Contributor
  }),
  {}
);

export default AppNavigator;
