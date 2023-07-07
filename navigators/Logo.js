import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Image, View } from "react-native";

export const Logo = () => {
  return (
    <View style={{ margin: 5 }}>
      <Image
        style={{ width: 65, height: 65 }}
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

export const Links = () => {
  return (
    <View
      style={{
        margin: 5,
        flexDirection: "row",
        width: 75,
        height: 50,
        alignItems: "center",
      }}
    >
      <Ionicons
        style={{ margin: 5 }}
        name="notifications"
        size={27}
        color="black"
      />
      <FontAwesome
        style={{ margin: 5 }}
        name="envelope"
        size={27}
        color="black"
      />
    </View>
  );
};
