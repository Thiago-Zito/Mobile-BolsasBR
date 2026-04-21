import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator 
} from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./style";
import api from "../services/api"; 

export default function DetailScreen({ route, navigation }) {
  
  const { produtoId } = route.params;

  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  // Carregar as fontes
  const [fontsLoaded] = useFonts({
    "Jost-Regular": require("../assets/fonts/Jost/Jost-Regular.ttf"),
    "Jost-Medium": require("../assets/fonts/Jost/Jost-Medium.ttf"),
    "Jost-Bold": require("../assets/fonts/Jost/Jost-Bold.ttf"),
  });

  // Buscar os detalhes do produto específico
  async function carregarDetalhes() {
    try {
      const resp = await api.get(`/api/produtos/${produtoId}`);
      setProduto(resp.data);
    } catch (error) {
      console.log("Erro ao carregar detalhes:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarDetalhes();
  }, [produtoId]); 

  // Se as fontes não carregarem ou estiver buscando os dados, mostra um carregando
  if (!fontsLoaded || loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  // Caso não encontre o produto
  if (!produto) {
    return (
      <View style={styles.center}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Imagem do Produto */}
        <Image source={{ uri: produto.imagem }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.title}>{produto.nome}</Text>
          <Text style={styles.price}>{produto.preco}</Text>

          <Text style={styles.descriptionTitle}>Descrição</Text>
          <Text style={styles.description}>
            {produto.descricao ||
              "Nenhuma descrição disponível para este produto exclusivo."}
          </Text>
        </View>
      </ScrollView>

      {/* Botão de Voltar ou Comprar */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}