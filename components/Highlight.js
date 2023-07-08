import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colours } from "../constants/Colours";

export const Highlight = ({ content }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={[styles.imageContainer, styles.notSeen]}>
          <Image style={styles.image} source={{ uri: content.image }} />
        </View>

        <Text style={styles.text}>{content.title}</Text>
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

  notSeen: {
    borderColor: "green",
    borderWidth: 2,
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
