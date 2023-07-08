import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Highlight } from "./Highlight";

export const HiglightList = ({ higlights }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={higlights}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Highlight content={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
  },
});
