import { FlatList, StyleSheet } from "react-native";
import { Fakes } from "../stores/Fakes";
import { Post } from "./Post";

export const PostList = () => {
  return (
    <FlatList
      style={styles.container}
      data={Fakes.posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Post content={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
  },
});
