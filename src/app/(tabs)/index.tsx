import React from "react";
import { Image, ScrollView, View } from "react-native";
import { colors } from "../../theme/colors";
import Carroussel from "../components/slider";
import { styles } from "./styles";

export default function Some() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.header, { backgroundColor: colors.yellow[100] }]}>
          <Image
            source={require("../assets/logoBC.png")}
            style={{ width: 120, height: 30 }}
          />
        </View>
        <Carroussel />
      </ScrollView>
    </View>
  );
}
