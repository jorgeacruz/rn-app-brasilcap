import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../../../theme/colors";

export default function HeaderBlog() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../app/assets/blog.png")}
        style={{ width: 150, height: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue[300],
    width: "100%",
    height: 120,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
});
