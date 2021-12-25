import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.todoitem}>
        <MaterialCommunityIcons
          name="delete-alert"
          size={13}
          style={styles.bin}
        />
        <Text style={styles.itemtext}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  todoitem: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 5,
    borderColor: "grey",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 8,
    fontSize: 18,
    flex: 1,
    flexDirection: "row",
  },
  itemtext: {
    fontFamily: "inconsolata",
    fontSize: 20,
    marginLeft: 17,
  },
  bin: {
    top: 3,
    fontSize: 20,
    color: "tomato",
  },
});
