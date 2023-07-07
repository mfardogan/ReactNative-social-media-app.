import { NavigationContainer } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import React from "react";
import { Navigator } from "./navigators/Navigator";

export default function App() {
  React.useEffect(async () => {
    await NavigationBar.setBackgroundColorAsync("white");
    await NavigationBar.setButtonStyleAsync("dark");
  }, []);

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
