import { FlatList, StyleSheet, View } from "react-native";
import { Fakes } from "../stores/Fakes";
import { Story } from "./Story";

export const StoryList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={Fakes.stories}
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
