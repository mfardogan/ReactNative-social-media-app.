import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { Colours } from "../constants/Colours";

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
          width: 45,
          height: 45,
          alignItems: "center",
        }}
      >
        <MaterialIcons name="person" size={35} color={Colours.links} />
      </View>
    </TouchableOpacity>
  );
};
