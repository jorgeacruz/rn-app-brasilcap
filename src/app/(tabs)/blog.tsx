import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";
export default function Blog() {
  return (
    <View style={styles.blogContainer}>
      <View style={styles.header}>
        <Image
          source={require("../assets/blog.png")}
          style={{ width: 150, height: 40 }}
        />
      </View>
    </View>
  );
}
