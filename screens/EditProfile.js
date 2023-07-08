import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { Colours } from "../constants/Colours";
import { editProfile } from "../stores/slices";

export const EditProfile = () => {
  const user = useSelector((state) => {
    return state.app.activeUser;
  });

  const dispact = useDispatch();
  const navigator = useNavigation();

  const [nick, setNick] = useState(user.nick);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [surname, setSurname] = useState(user.surname);
  const [country, setCountry] = useState(user.country);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        onChangeText={(e) => setName(e)}
        value={name}
        style={styles.textbox}
        placeholder="Name"
      />

      <TextInput
        onChangeText={(e) => setSurname(e)}
        value={surname}
        style={styles.textbox}
        placeholder="Surname"
      />

      <TextInput
        autoCapitalize="none"
        onChangeText={(e) => setNick(e)}
        value={nick}
        style={styles.textbox}
        placeholder="Username"
      />

      <TextInput
        autoCapitalize="none"
        onChangeText={(e) => setCountry(e)}
        value={country}
        style={styles.textbox}
        placeholder="Location"
      />

      <TextInput
        autoCapitalize="none"
        onChangeText={(e) => setEmail(e)}
        value={email}
        style={styles.textbox}
        placeholder="Email"
      />

      <View
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          width: 50,
          height: 50,
          backgroundColor: Colours.app,
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            const vals = {
              name,
              surname,
              nick,
              country,
            };

            dispact(editProfile(vals));
            navigator.goBack();
          }}
        >
          <Entypo name="hand" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textbox: {
    margin: 5,
    padding: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 25,
    width: 250,
    height: 45,
  },
});
