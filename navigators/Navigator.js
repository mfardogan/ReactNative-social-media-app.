import { createStackNavigator } from "@react-navigation/stack";
import { Image, View } from "react-native";
import { Colours } from "../constants/Colours";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { ViewStory } from "../screens/ViewStory";
import { Links, Logo } from "./Logo";

export const Navigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "Gonna app.",
          headerStyle: {
            height: 100,
            backgroundColor: Colours.bg,
          },
          headerTitleStyle: {
            fontSize: 25,
            color: Colours.links,
          },
          headerShadowVisible: false,
          animationEnabled: false,
          headerLeft: () => <Logo />,
          headerRight: () => <Links />,
        }}
      />

      <Stack.Screen
        name="profile"
        component={Profile}
        options={({ route }) => ({
          title: "Test",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 25 },

          headerStyle: {
            height: 100,
          },
          headerShadowVisible: false,
          animationEnabled: false,
          headerRight: () => (
            <Avatar avatar={route.params.avatar} name={route.params.name} />
          ),
        })}
      />

      <Stack.Screen name="viewStory" component={ViewStory} options={{}} />
    </Stack.Navigator>
  );
};

export const Avatar = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          margin: 5,
          width: 60,
          height: 60,
          borderRadius: 40,
          backgroundColor: "transparent",
          borderColor: Colours.links,
        }}
      >
        <Image
          style={{ width: 60, height: 60, borderRadius: 40 }}
          source={{ uri: props.avatar }}
        />
      </View>
    </View>
  );
};
