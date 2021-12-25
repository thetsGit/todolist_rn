import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoitem";
import TodoForm from "./components/todoform";
import * as Font from "expo-font";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create todo app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const [text, setText] = useState("");
  const [fontsLoaded, setfontsLoaded] = useState(false);
  // functions
  const pressHandler = (key) =>
    setTodos((items) => items.filter((item) => item.key != key));

  const changehandler = (val) => {
    return setText(val);
  };

  const pressHandler1 = () => {
    if (text.length > 3) {
      setTodos((pretodos) => [
        { text: text, key: Math.random().toString() },
        ...pretodos,
      ]);
      setText("");
    } else {
      Alert.alert("Warning!!!", "Your input must be at least 4 chars long.", [
        {
          text: "I do understand.",
          onPress: () => {
            console.log("Alert occurred.");
          },
        },
      ]);
    }
  };

  async function getFonts() {
    await Font.loadAsync({
      orbitron: require("./assets/fonts/Orbitron-VariableFont_wght.ttf"),
      inconsolata: require("./assets/fonts/inconsolata.ttf"),
    });
    setfontsLoaded(true);
  }

  // rendering
  setInterval(() => {
    getFonts();
  }, 3000);
  if (fontsLoaded) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <TodoForm
              pressHandler1={pressHandler1}
              changehandler={changehandler}
              text={text}
            />
            <View style={styles.separator}></View>
            <View style={styles.listitems}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem
                    item={item}
                    pressHandler={pressHandler}
                    text={text}
                  />
                )}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <View style={styles.loadingcontainer}>
        <Image
          style={{ width: "80%" }}
          source={require("./assets/loading.gif")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE1CE",
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  listitems: {
    flex: 1,
  },
  loadingcontainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
