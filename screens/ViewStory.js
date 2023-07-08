import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Progress } from "../components/Progress";
import { Avatar } from "../navigators/Navigator";

export const ViewStory = ({ route, navigation }) => {
  const { content } = route.params;

  React.useEffect(() => {
    const setUp = async () => {
      navigation.setOptions({
        title: content.user,
        headerTitleAlign: "center",
        headerStyle: {
          height: 120,
          backgroundColor: "#242424",
        },
        headerTintColor: "white",
        headerShadowVisible: false,
        animationEnabled: false,
        headerRight: () => <Avatar avatar={content.avatar} />,
      });
    };
    setUp();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#242424",
        alignItems: "center",
        padding: 5,
      }}
    >
      <Progress width={"80%"} val={50} max={100} />

      <Image
        style={{
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 10,
          width: "95%",
          height: 650,
        }}
        source={{ uri: content.image }}
      />

      <View
        style={{
          padding: 5,
          flexDirection: "row",
          width: "95%",
          height: 60,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Send a message"
          placeholderTextColor={"gray"}
          style={{
            paddingLeft: 10,
            borderRadius: 25,
            width: 300,
            height: 45,
            borderWidth: 1,
            color: "white",
            borderColor: "gray",
          }}
        />

        <View
          style={{
            marginLeft: 10,
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: "#f7f7f7",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name="send" size={30} color="black" />
        </View>
      </View>
    </View>
  );
};
