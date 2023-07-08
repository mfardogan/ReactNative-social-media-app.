import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { Colours } from "../constants/Colours";
import { setSeen } from "../stores/slices";

export const Story = ({ content }) => {
  const dispatch = useDispatch();
  const navigator = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setSeen(content.id));
        navigator.navigate("viewStory", { content: content });
      }}
    >
      <View style={styles.container}>
        <View
          style={[
            styles.imageContainer,
            content.seen ? styles.seen : styles.notSeen,
          ]}
        >
          <Image style={styles.image} source={{ uri: content.avatar }} />
        </View>

        <Text style={styles.text}>{content.user}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  seen: {
    borderColor: "green",
    borderWidth: 2,
  },
  notSeen: {
    borderStyle: "dashed",
    borderColor: Colours.app,
    borderWidth: 3,
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colours.links,
  },
  imageContainer: {
    width: 90,
    height: 90,
    margin: 2,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
