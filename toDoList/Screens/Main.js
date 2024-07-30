import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Color } from "../local variables/color";
import { TextStyle } from "../local variables/variables";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Task from "../components/Task";

const Main = () => {
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erreur de recuperation", errorData);
      } else {
        const tasks = await response.json();
        return tasks;
      }
    } catch (error) {
      console.error("ddd", error.message);
    }
  };
  const [task, setTask] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getData();
        setTask(data);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };
    fetch();
    console.log(task);
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Daily Todo's</Text>
      </View>
      <View style={styles.con}>
        <TouchableOpacity style={styles.actions}>
          <MaterialIcons name="add" size={50} color={Color.bg} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={task}
        renderItem={() => {
          <Task item={item} />;
        }}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.bg,
  },
  header: {
    marginTop: 20,
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    color: "#ffffff",
    fontWeight: "bold",
  },
  actions: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Color.add,
    justifyContent: "center",
    alignItems: "center",
  },
  con: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 20,
  },
});
