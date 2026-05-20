import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./style";
import api from "../services/api";
import Arrow from "../assets/arrow-right.png";
import Heart from "../assets/heart.png";
import Download from "../assets/download.png";
import Check from "../assets/check.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DetailScreen({ route, navigation }) {
  const { produtoId } = route.params;
  const [showModal, setShowModal] = useState(false);
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    "Jost-Regular": require("../assets/fonts/Jost/Jost-Regular.ttf"),
    "Jost-Medium": require("../assets/fonts/Jost/Jost-Medium.ttf"),
    "Jost-Bold": require("../assets/fonts/Jost/Jost-Bold.ttf"),
  });

  async function carregarDetalhes() {
    try {
      const resp = await api.get(`/api/produtos/${produtoId}`);
      setProduto(resp.data);
    } catch (error) {
      console.log("Erro:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarDetalhes();
  }, []);

  if (!fontsLoaded || loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (!produto) {
    return (
      <View style={styles.center}>
        <Text>Produto não encontrado</Text>
      </View>
    );
  }

  async function adicionarCarrinho() {
    try {
      // Note o '?quantidade=1' ao final da URL
      await api.post(`/api/adicionar/carrinho/${produto.id}?quantidade=1`);

      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    } catch (error) {
      console.log("Erro ao adicionar:", error.response?.data || error.message);
      alert("Erro ao adicionar ao carrinho");
    }
  }

  return (
    <ScrollView style={styles.main}>
      {/* Header */}
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Arrow} style={styles.arrowImg} />
        </TouchableOpacity>

        <View style={styles.buttons}>
          <TouchableOpacity>
            <Image source={Download} style={styles.buttonsImg} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={Heart} style={styles.buttonsImg} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Info */}
      <Text style={styles.title}>{produto.nome}</Text>
      <Text style={styles.codProduct}>M2752_{produto.id}</Text>

      {/* Imagens */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <Image source={{ uri: produto.detalhe1 }} style={styles.image} />
        <Image source={{ uri: produto.detalhe2 }} style={styles.image} />
        <Image source={{ uri: produto.detalhe3 }} style={styles.image} />
      </ScrollView>

      {/* Preço + descrição */}
      <View style={styles.infoContainer}>
        <Text style={styles.preco}>R$ {produto.preco}</Text>

        <Text style={styles.descricao}>
          {produto.descricao || "Produto exclusivo de alta qualidade."}
        </Text>
      </View>

      {/* Botão */}
      <TouchableOpacity style={styles.botao} onPress={adicionarCarrinho}>
        <Text style={styles.botaoTexto}>Adicionar à sacola</Text>
      </TouchableOpacity>

      {showModal && (
        <View style={styles.modalCart}>
          <Image source={Check} style={styles.imageCheck} />

          <View style={styles.modalContainerText}>
            <Text style={styles.modalText}>
              O produto foi adicionado no carrinho.
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
              <Text style={styles.modalLink}>Ver carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
