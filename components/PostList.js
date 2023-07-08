import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Post } from "./Post";

export const PostList = () => {
  const posts = useSelector((state) => state.app.posts);

  React.useEffect(() => {
    console.log(posts);
  });

  return (
    <FlatList
      style={styles.container}
      data={posts}
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
