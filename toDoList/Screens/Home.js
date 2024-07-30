import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Color } from "../local variables/color";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const Navigation = () => {
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/image/splashing.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          lorem ipsum dolor sit amet, consectetur lorem ipsum dolor
        </Text>
      </View>
      <View style={styles.Btn}>
        <TouchableOpacity style={styles.btnContainer} onPress={Navigation}>
          <Text style={styles.btnText}>Commencons</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.bg,
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    width: "100%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    height: "10%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: Color.text,
  },
  Btn: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    backgroundColor: Color.remove,
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 10,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
  },
});
export default Home;
