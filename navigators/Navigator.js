import { createStackNavigator } from "@react-navigation/stack";
import { Image, View } from "react-native";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
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
          },
          headerTitleStyle: {
            fontSize: 25,
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
          width: 75,
          height: 75,
          borderRadius: 40,
          backgroundColor: "transparent",
          borderWidth: 3,
          borderColor: "#6600ff",
        }}
      >
        <Image
          style={{ width: 70, height: 70, borderRadius: 40 }}
          source={{ uri: props.avatar }}
        />
      </View>
    </View>
  );
};
