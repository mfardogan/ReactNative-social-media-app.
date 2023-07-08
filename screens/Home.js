import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PostList } from "../components/PostList";
import { StoryList } from "../components/StoryList";
import { Colours } from "../constants/Colours";

export const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <StoryList />
      <PostList />

      <View
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.action}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="plus" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    backgroundColor: Colours.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  action: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colours.app,
    justifyContent: "center",
    alignItems: "center",
  },
});
