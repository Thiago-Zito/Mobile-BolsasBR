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
      <ScrollView style={styles.containerEl}>
        {/* Imagem do Produto */}
        <View style={styles.content}>
          <Text style={styles.codProduct}>M2752_{produto.id}</Text>
          <Text style={styles.title}>{produto.nome}</Text>
          <Text style={styles.price}>R$ {produto.preco}</Text>
        </View>

        <View style={styles.contentCenter}>
          <View style={styles.titleDetails}>
            <Text style={styles.nome}>Categoria</Text>
            <Text style={styles.category}>Bleu {produto.categoria}</Text>
          </View>

          <View style={styles.imageContent}>
            <Image source={{ uri: produto.detalhe1 }} style={styles.image}/>
            <Image source={{ uri: produto.detalhe2 }} style={styles.image}/>
            <Image source={{ uri: produto.detalhe3 }} style={styles.image}/>
          </View>

          <View style={{ height: 1, backgroundColor: 'gray', marginVertical: 10, marginTop: 20, opacity: 0.7 }} />

          <View style={styles.titleDetails}>
            <Text style={styles.nome}>Linha</Text>
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
            >
              <Text style={styles.category}>◄ Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonComprar}>
          <Text style={styles.textComprar}>Entre em contato para comprar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}