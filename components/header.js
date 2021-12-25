import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Header() {
  return (
    <View>
      <Text style={styles.header}>Todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 30,
    textAlign: "center",
    fontFamily: "orbitron",
    color: "black",
    fontSize: 35,
  },
});
