import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
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

export const Post = ({ content }) => {
  const [liked, setLiked] = useState(false);
  const navigator = useNavigation();
  const profiles = useSelector((state) => state.app.profiles);

  React.useEffect(() => {
    console.log(profiles);
  });

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
          <Text style={styles.name}>
            {content.name} {content.surname}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu}>
          <Entypo name="dots-three-horizontal" size={20} color="black" />
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
            <AntDesign
              name={liked ? "heart" : "hearto"}
              size={30}
              color={liked ? "red" : "black"}
            />
          </TouchableOpacity>

          <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
            {content.likeCount} likes.
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            alignItems: "center",
          }}
        >
          <FontAwesome name="comment-o" size={30} color="black" />
          <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
            {content.commentCount} comments.
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            alignItems: "center",
            position: "absolute",
            right: 5,
          }}
        >
          <Entypo name="layers" size={30} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 650,
  },

  segment: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  name: {
    fontWeight: "bold",
    fontSize: 17,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderWidth: 3,
    borderColor: "#d9d9d9",
    borderRadius: 25,
  },

  menu: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#e6e6e6",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 5,
  },

  imageContainer: {
    flex: 6,
    width: "100%",
    height: 500,
    borderRadius: 1,
  },
  bg: {
    width: "100%",
    height: "100%",
  },
  bgImage: {
    borderRadius: 1,
  },
});
