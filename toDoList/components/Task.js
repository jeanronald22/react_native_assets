import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Color } from "../local variables/color";

const Task = ({ item }) => {
  return (
    <View style={styles.taskContainer}>
      <View>
        <Text style={styles.title}>{item.tile}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <MaterialIcons
            name="restore-from-trash"
            size={30}
            color={Color.add}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="check-circle" size={30} color={Color.remove} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    // backgroundColor: "red",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Color.outiline,
    alignItems: "center",
    marginVertical: 20,
    padding: 20,
  },
  title: {
    textTransform: "capitalize",
    fontSize: 18,
    color: Color.text,
  },
  iconsContainer: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-around",
  },
});
