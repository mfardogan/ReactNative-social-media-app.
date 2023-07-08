import {
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HiglightList } from "../components/HighlightList";
import { Colours } from "../constants/Colours";
import { Avatar } from "../navigators/Navigator";

export const Profile = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [follow, setFollow] = React.useState(false);
  const { content, owner } = route.params;

  React.useEffect(() => {
    const setUp = async () => {
      return navigation.setOptions(options(content.nick, content.avatar));
    };
    setUp();
  }, []);

  const options = (userName, avatar) => {
    return {
      title: userName,
      headerTitleAlign: "center",
      headerTintColor: Colours.links,
      headerTitleStyle: { fontSize: 25, color: Colours.links },
      headerStyle: { height: 120, backgroundColor: Colours.bg },
      headerShadowVisible: false,
      animationEnabled: false,
      headerRight: () => <Avatar avatar={avatar} edit={owner} />,
    };
  };

  return (
    <View style={style.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Octicons name="location" size={25} color={Colours.links} />
        <Text style={{ margin: 5, fontSize: 17, color: "#b3b3b3" }}>
          {content.country}
        </Text>
      </View>
      <Text style={{ margin: 5, fontWeight: "bold", fontSize: 35 }}>
        {content.name} {content.surname}
      </Text>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        {!owner && (
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => setFollow((prev) => !prev)}>
              <View
                style={{
                  flexDirection: "row",
                  margin: 3,
                  backgroundColor: follow ? "#ff4d94" : Colours.app,
                  width: 175,
                  height: 45,
                  paddingLeft: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 30,
                }}
              >
                <AntDesign
                  style={{ marginRight: 5 }}
                  name="plus"
                  size={25}
                  color="white"
                />
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {follow ? "Cancel Request" : "Follow"}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View
                style={[
                  style.segment,
                  {
                    backgroundColor: Colours.appSecondary,
                  },
                ]}
              >
                <MaterialCommunityIcons name="send" size={25} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <HiglightList higlights={content.stories} />

      <View style={{ flexDirection: "row", marginBottom: 10, marginTop: 10 }}>
        <Segment header={content.follewed} value={"Takip"} />
        <Segment header={content.followers} value={"Takipçi"} />
        <Segment border={false} header={content.posts} value={"Gönderi"} />
      </View>

      <FlatList
        data={content.images}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image
            style={{ width: 130, height: 130, margin: 0, borderRadius: 0 }}
            source={{ uri: item.image }}
          />
        )}
      />
    </View>
  );
};

const Segment = ({ header, value }) => {
  return (
    <View style={style.segmentContainer}>
      <Text style={{ fontWeight: "bold", fontSize: 25 }}>{header}</Text>
      <Text style={{ color: "gray", fontSize: 16 }}>{value}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.bg,
    alignItems: "center",
    padding: 5,
  },

  segment: {
    flexDirection: "row",
    margin: 3,
    backgroundColor: "#262626",
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },

  segmentContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    margin: 4,
    borderRadius: 5,
    width: 100,
    height: 55,
  },
});
