import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { PostList } from "../components/PostList";
import { StoryList } from "../components/StoryList";

export const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <StoryList />
      <PostList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
