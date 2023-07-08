import { useNavigation } from "@react-navigation/native";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

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
  const navigator = useNavigation();
  const user = useSelector((state) => state.app.activeUser);

  return (
    <TouchableOpacity
      onPress={() => {
        navigator.navigate("profile", { content: user, owner: true });
      }}
    >
      <View
        style={{
          margin: 5,
          flexDirection: "row",
          width: 48,
          height: 48,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 45, height: 45, borderRadius: 30 }}
          source={{ uri: user.avatar }}
        />
      </View>
    </TouchableOpacity>
  );
};
