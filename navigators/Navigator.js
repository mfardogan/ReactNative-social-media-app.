import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colours } from "../constants/Colours";
import { EditProfile } from "../screens/EditProfile";
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

      <Stack.Screen
        name="editProfile"
        component={EditProfile}
        options={{
          title: "Edit profile.",
          headerShadowVisible: false,
          animationEnabled: false,
        }}
      />
      <Stack.Screen name="viewStory" component={ViewStory} />
    </Stack.Navigator>
  );
};

export const Avatar = (props) => {
  const navigator = useNavigation();

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
      {props.edit && (
        <View
          style={{
            position: "absolute",
            width: 25,
            height: 25,
            borderRadius: 15,
            backgroundColor: Colours.app,
            bottom: -1,
            left: -2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigator.navigate("editProfile");
            }}
          >
            <Entypo name="pencil" size={15} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
