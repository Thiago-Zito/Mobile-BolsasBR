import { Text, Image, View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

import Banner from "../assets/banner.png";
import BannerMotherDay from "../assets/banner-motherDay.png";
import Conversation from "../assets/conversation.png";
import Bell from "../assets/bell.png";
import Logo from "../assets/logo.png";

export default function StoreScreen({ navigation }) {
  const [nome, setNome] = useState("");

  // Pegar nome
  useEffect(() => {
    async function carregarNome() {
      const nomeSalvo = await AsyncStorage.getItem("@nome_usuario");
      setNome(nomeSalvo || "");
    }

    carregarNome();
  }, []);

  // Sair da Conta
  async function logout() {
    await AsyncStorage.removeItem("@token_app");
    await AsyncStorage.removeItem("@nome_usuario");

    navigation.replace("WelcomeScreen");
  }

  // -- Adicionar fonte --
  const [fontsLoaded] = useFonts({
    "Jost-Regular": require("../assets/fonts/Jost/Jost-Regular.ttf"),
    "Jost-SemiBold": require("../assets/fonts/Jost/Jost-SemiBold.ttf"),
    "Jost-Medium": require("../assets/fonts/Jost/Jost-Medium.ttf"),
    "Jost-Light": require("../assets/fonts/Jost/Jost-Light.ttf"),
    "Jost-ExtraLight": require("../assets/fonts/Jost/Jost-ExtraLight.ttf"),
    "Jost-Bold": require("../assets/fonts/Jost/Jost-Bold.ttf"),
  });
  // Caso nao carregar
  if (!fontsLoaded)
    return <View style={{ flex: 1, backgroundColor: "white" }} />;

  // ----------------------

  return (
    <View style={styles.main}>
      {/* Header */}
      <View style={styles.containerHeader}>
        {/* Apresentacao */}
        <Text style={styles.textHeader}>Bem-vindo {nome}</Text>
        <View style={styles.buttonsHeader}>
          <TouchableOpacity
            style={styles.iconContact}
            activeOpacity={0.9}
            onPress={logout}
          >
            {/* Image Conversation */}
            <Image source={Conversation} style={styles.imgConversation} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconNotification}
            activeOpacity={0.9}
            onPress={() => navigation.navigate("CartScreen")}
          >
            {/* Image Bell */}
            <Image source={Bell} style={styles.imgBell} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.main}>
        {/* Image Banner */}
        <TouchableOpacity
          style={styles.containerMainBanner}
          activeOpacity={0.9}
        >
          {/* Banner */}
          <Image source={BannerMotherDay} style={styles.imgBanner} />
          {/* Degrade sombra */}
          <LinearGradient
            colors={["transparent", "#000000e3"]} // Cores do degrade
            style={styles.gradient}
          />
          {/* Descubra */}
          <View style={styles.containerPhrases}>
            <Text style={styles.textTitle}>Mother's Day Gifts</Text>

            <Text style={styles.textMainBanner}>
              Dia das Mães com Bolsas Brasil
            </Text>
          </View>
        </TouchableOpacity>

        {/* Selecao da Semana */}
        <View style={styles.lastCollections}>
          <View style={styles.containerTextCollection}>
            {/* Texto Ultima colecao */}
            <Text style={styles.textLastCollection}>Últimas Coleções</Text>
          </View>

          {/* Card Ultima colecao*/}
          <TouchableOpacity
            style={styles.containerBanner}
            activeOpacity={0.9}
            onPress={() => navigation.navigate("ProductsScreen")}
          >
            {/* Banner */}
            <Image source={Banner} style={styles.imgBanner} />
            {/* Degrade sombra */}
            <LinearGradient
              colors={["transparent", "#000000e3"]} // Cores do degrade
              style={styles.gradient}
            />
            {/* Descubra */}
            <View style={styles.containerPhrases}>
              <Text style={styles.textTitle}>Descubra</Text>

              <Text style={styles.textBanner}>Bolsas Femininas</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Footer */}
        <View style={styles.containerFooter}>
          <Image style={styles.logoFooter} source={Logo}></Image>
        </View>
      </ScrollView>
    </View>
  );
}
