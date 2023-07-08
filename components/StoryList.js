import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { Story } from "./Story";

export const StoryList = () => {
  const stories = useSelector((state) => state.app.stories);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={stories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Story content={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    borderBottomWidth: 1,
    borderColor: "#e6e6e6",
  },
});
