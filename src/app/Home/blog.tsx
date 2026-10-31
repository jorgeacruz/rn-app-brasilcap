import React from "react";
import { View } from "react-native";
import HeaderBlog from "../components/headerBlog";
import { styles } from "./styles";
export default function Blog() {
  return (
    <View style={styles.blogContainer}>
      <HeaderBlog />
    </View>
  );
}
