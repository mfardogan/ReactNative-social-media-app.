import { MaterialIcons } from "@expo/vector-icons";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
  return (
    <TouchableOpacity>
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
