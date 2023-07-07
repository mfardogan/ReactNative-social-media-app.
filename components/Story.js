import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Story = ({ content }) => {
  return (
    <TouchableOpacity onPress={() => alert("Pressed...")}>
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
    borderColor: "#39964d",
    borderWidth: 2,
  },
  notSeen: {
    borderStyle: "dashed",
    borderColor: "#ba5b88",
    borderWidth: 3,
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
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
