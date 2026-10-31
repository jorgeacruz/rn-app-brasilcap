import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

export default function Carroussel() {
  return (
    <View style={styles.container}>
      <Swiper autoplay autoplayTimeout={6.5}>
        <View style={{ height: 300 }}>
          <Image source={require("../../assets/b1.png")} style={styles.Image} />
          <Text style={styles.title}>Cada título é uma chance de</Text>
          <Text style={styles.surtitle}>Realizar seus sonhos</Text>
        </View>
        <View style={{ height: 300 }}>
          <Image source={require("../../assets/b2.png")} style={styles.Image} />
          <Text style={styles.title}>Cada título é uma chance de</Text>
          <Text style={styles.surtitle}>Realizar seus sonhos</Text>
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    width: "100%",
    height: 300,
  },
  Image: {
    position: "absolute",
    opacity: 0.6,
    width: "100%",
    height: 300,
  },
  title: {
    position: "absolute",
    bottom: 43,
    right: 20,
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  surtitle: {
    position: "absolute",
    bottom: 10,
    right: 20,
    color: "#fff100",
    fontSize: 30,
    fontWeight: "700",
  },
});
