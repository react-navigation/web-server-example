import AppNavigator from "./App";
import { hydrate } from "react-dom";
import React from "react";
import { createBrowserApp } from "@react-navigation/web";

const App = createBrowserApp(AppNavigator);

hydrate(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
