import React from "react";
import { StyleSheet, View } from "react-native";

import SFSymbols from "expo-sf-symbols";

export default function App() {
  return (
    <View style={styles.container}>
      <SFSymbols name="ChevronLeft" width={100} height={100} opacity={1} />
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
