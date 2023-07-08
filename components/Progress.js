import { View } from "react-native";

export const Progress = (props) => {
  const { width, val = 0, max = 100 } = props;

  return (
    <View
      style={{
        width: width,
        height: 5,
        backgroundColor: "gray",
        justifyContent: "center",
        borderRadius: 5 / 2,
      }}
    >
      <View
        style={{
          width: val + "%",
          height: 3,
          backgroundColor: "white",
          borderRadius: 3 / 2,
        }}
      ></View>
    </View>
  );
};
