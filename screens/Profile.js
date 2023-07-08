import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StoryList } from "../components/StoryList";
import { Avatar } from "../navigators/Navigator";

export const Profile = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [follow, setFollow] = React.useState(false);
  const { content } = route.params;

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
      headerTitleStyle: { fontSize: 25 },
      headerStyle: { height: 120 },
      headerShadowVisible: false,
      animationEnabled: false,
      headerRight: () => <Avatar avatar={avatar} />,
    };
  };

  return (
    <View style={style.container}>
      <StoryList />
      <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 35 }}>
        {content.name} {content.surname}
      </Text>

      <Text style={{ fontSize: 20, color: "gray" }}>{content.email}</Text>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <TouchableOpacity onPress={() => setFollow((prev) => !prev)}>
          <View
            style={{
              flexDirection: "row",
              margin: 3,
              backgroundColor: follow ? "#ff4d94" : "#3366ff",
              width: 170,
              height: 45,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
          >
            <AntDesign
              style={{ margin: 5 }}
              name="plus"
              size={25}
              color="white"
            />
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {follow ? "Cancel Request" : "Make friend"}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View
            style={[
              style.segment,
              {
                backgroundColor: "#00e6b8",
              },
            ]}
          >
            <FontAwesome name="envelope-open" size={25} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View style={[style.segment, { backgroundColor: "#262626" }]}>
            <FontAwesome name="gear" size={30} color="white" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", marginBottom: 10, marginTop: 10 }}>
        <Segment header={content.follewed} value={"Takip"} />
        <Segment header={content.followers} value={"Takipçi"} />
        <Segment border={false} header={content.posts} value={"Gönderi"} />
      </View>

      <FlatList
        data={content.images}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image
            style={{ width: 190, height: 190, margin: 0, borderRadius: 1 }}
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
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
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
