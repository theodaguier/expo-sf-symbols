import React from "react";
import { StyleSheet, View } from "react-native";

import SFSymbols from "expo-sf-symbols";

export default function App() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
