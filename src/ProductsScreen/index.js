import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import Arrow from "../assets/arrow-right.png";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import api from "../services/api";

export default function ProductsScreen({ navigation }) {
  // Fonte
  const [fontsLoaded] = useFonts({
    "Jost-Regular": require("../assets/fonts/Jost/Jost-Regular.ttf"),
    "Jost-SemiBold": require("../assets/fonts/Jost/Jost-SemiBold.ttf"),
    "Jost-Medium": require("../assets/fonts/Jost/Jost-Medium.ttf"),
    "Jost-Light": require("../assets/fonts/Jost/Jost-Light.ttf"),
    "Jost-ExtraLight": require("../assets/fonts/Jost/Jost-ExtraLight.ttf"),
    "Jost-Bold": require("../assets/fonts/Jost/Jost-Bold.ttf"),
  });

  const [produtos, setProdutos] = useState([]);

  async function chamar() {
    try {
      const resp = await api.get("/api/produtos");
      const data = resp.data;

      const produtos = data.map((item) => ({
        id: item.id,
        nome: item.nome,
        preco: item.preco,
        img: item.imagem,
      }));

      setProdutos(produtos);
    } catch (err) {
      console.log("Erro:", err);
    }
  }

  useEffect(() => {
    chamar();
  }, []);

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: "white" }} />;
  }

  return (
    <ScrollView style={styles.main}>
      {/* Header */}
      <View style={styles.containerHeader}>
        <TouchableOpacity
          style={styles.voltar}
          activeOpacity={1}
          onPress={() => navigation.navigate("StoreScreen")}
        >
          <Image source={Arrow} style={styles.arrowImg} />
        </TouchableOpacity>

        <Text style={styles.textHeader}>Coleções Exclusivas</Text>
      </View>

      {/* Produtos */}
      <View style={styles.containerProduct}>
        {produtos.map((item, index) => (
          
          <TouchableOpacity
            style={styles.product}
            key={index}
            onPress={() => {
              // Ação do clique aqui vai para a tela de detalhes
              navigation.navigate("DetailScreen", { produtoId: item.id });
            }}
          >
            <Image source={{ uri: item.img }} style={styles.bolsaTeste} />
            <View style={styles.texts}>
              <Text style={styles.nomeBolsa}>{item.nome}</Text>
              <Text style={styles.precoBolsa}>{item.preco}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
