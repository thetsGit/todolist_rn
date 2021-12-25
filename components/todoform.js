import React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TodoForm({ changehandler, pressHandler1, text }) {
  return (
    <View style={styles.formwrap}>
      <TextInput
        placeholder="new todo...."
        onChangeText={changehandler}
        style={styles.input}
        value={text}
      />
      <TouchableOpacity onPress={pressHandler1}>
        <AntDesign name="plussquare" size={50} style={styles.button} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginVertical: 8,
    color: "black",
    fontFamily: "inconsolata",
  },
  formwrap: {
    marginVertical: 10,
  },
  button: {
    color: "grey",
    alignSelf: "center",
  },
});
