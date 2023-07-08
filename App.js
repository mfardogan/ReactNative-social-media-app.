import { NavigationContainer } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import React from "react";
import { Provider } from "react-redux";
import { Navigator } from "./navigators/Navigator";
import { store } from "./stores/store";

export default function App() {
  React.useEffect(() => {
    const setUp = async () => {
      await NavigationBar.setBackgroundColorAsync("white");
      await NavigationBar.setButtonStyleAsync("dark");
    };
    setUp();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
