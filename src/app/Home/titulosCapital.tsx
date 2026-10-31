import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Titulos() {
  return (
    <View style={styles.container}>
      <Text>ComponentName</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
