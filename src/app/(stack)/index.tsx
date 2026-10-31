import { router } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
export default function login() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/indexBKG.png")} style={styles.bkg} />
      <View style={styles.innerView}>
        <Image source={require("../assets/logoBC.png")} style={styles.logo} />
        <View style={styles.viewForm}>
          <Text style={styles.title}>Acesse sua conta.</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Digite seu E-mail Cadastrado"
            placeholderTextColor="#fff"
          />
          <TextInput
            style={styles.inputText}
            placeholder="Digite seu Senha Cadastrada"
            placeholderTextColor="#fff"
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => router.navigate("/(tabs)")}
          >
            <Text style={styles.textBtn}>Entrar na minha Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
