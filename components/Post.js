import { Entypo, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { Colours } from "../constants/Colours";

export const Post = ({ content }) => {
  const [liked, setLiked] = useState(false);
  const navigator = useNavigation();
  const profiles = useSelector((state) => state.app.profiles);

  return (
    <View style={styles.container}>
      <View style={styles.segment}>
        <TouchableOpacity
          style={styles.segment}
          onPress={() => {
            const at = Math.floor(Math.random() * profiles.length);
            navigator.navigate("profile", { content: profiles[at] });
          }}
        >
          <Image style={styles.avatar} source={{ uri: content.avatar }} />
          <View>
            <Text style={styles.name}>
              {content.name} {content.surname}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Octicons
                style={{ marginRight: 5 }}
                name="location"
                size={15}
                color="gray"
              />
              <Text style={styles.loc}>{content.location}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu}>
          <Entypo name="dots-three-horizontal" size={25} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.bg}
          imageStyle={styles.bgImage}
          source={{ uri: content.image }}
        />
      </View>

      <View style={styles.segment}>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setLiked((prev) => !prev)}>
            <Ionicons
              name={liked ? "ios-heart" : "ios-heart-outline"}
              size={30}
              color={liked ? "red" : Colours.links}
            />
          </TouchableOpacity>

          <Text style={{ marginLeft: 5, color: "gray" }}>
            <Text style={{ fontWeight: "bold", color: Colours.links }}>
              {content.likeCount}
            </Text>{" "}
            likes.
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            alignItems: "center",
          }}
        >
          <Feather name="message-circle" size={30} color={Colours.links} />
          <Text style={{ marginLeft: 5, color: "gray" }}>
            <Text style={{ fontWeight: "bold", color: Colours.links }}>
              {content.commentCount}
            </Text>{" "}
            comments.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 570,
  },

  segment: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  name: {
    fontWeight: "bold",
    fontSize: 17,
    color: Colours.links,
  },
  loc: { fontSize: 15, color: "gray", marginLeft: 2 },

  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderWidth: 2,
    borderColor: Colours.app,
    borderRadius: 25,
  },

  menu: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 5,
  },

  imageContainer: {
    flex: 9,
    width: "100%",
    height: 500,
    borderRadius: 5,
  },
  bg: {
    width: "100%",
    height: "100%",
  },
  bgImage: {
    borderRadius: 5,
  },
});
