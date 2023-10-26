import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ArrowBackward,
  Arrow3Trianglepath,
} from "./expo-sf-symbols/sf-symbols";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ArrowBackward width={100} height={100} color="" />
      <Arrow3Trianglepath width={100} height={100} color="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
