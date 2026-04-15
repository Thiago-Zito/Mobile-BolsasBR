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

  // Como o api.js já tem a URL base, só precisamos do caminho das imagens
  const BASE_IMG_URL =
    "https://team-code-7jpa-k4auch2q7-kauarprodrigues-5332s-projects.vercel.app/static/uploads/";

  async function chamar() {
    try {
      const resp = await api.get("/api/produtos");
      const json = resp.data;

      const lista = json.map((item) => {
        const caminhoFinal = `${BASE_IMG_URL}${item.imagem}`;

        return {
          id: item.id,
          nome: item.nome,
          preco: `R$ ${item.preco.toFixed(2)}`,
          img: caminhoFinal,
        };
      });

      setProdutos(lista);
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
        {produtos.length === 0 && <Text>Carregando ou lista vazia...</Text>}

        {produtos.map((item) => {
          console.log("Renderizando imagem:", item.img);
          return (
            <View style={styles.product} key={item.id}>
              <Image source={{ uri: item.img }} style={styles.bolsaTeste} />
              <View style={styles.texts}>
                <Text style={styles.nomeBolsa}>{item.nome}</Text>
                <Text style={styles.precoBolsa}>{item.preco}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
