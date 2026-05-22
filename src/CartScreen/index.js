import { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Image,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import api from "../services/api";
import { styles } from "./style";
import Arrow from "../assets/arrow-right.png";
import Minus from "../assets/minus.png";
import Plus from "../assets/plus.png";

export default function CartScreen({ navigation }) {
  const [carrinho, setCarrinho] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const finalizarPedido = async () => {
    try {
      setLoading(true);

      const resp = await api.get("/api_json/pagamento");

      // Verifica a trava de segurança do back-end
      if (resp.data && resp.data.mensagem) {
          alert(resp.data.mensagem);
          return;
      }

      const [itensCarrinho, totalGeral, dadosUsuario] = resp.data;

      navigation.navigate("PayScreen", {
        carrinho: itensCarrinho,
        total: totalGeral,
        usuario: dadosUsuario
      });

    } catch (error) {
      console.error("Erro ao finalizar pedido:", error);
      Alert.alert("Erro", "Não foi possível processar o carrinho. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const carregarCarrinho = async () => {
    try {
      setLoading(true);
      const resp = await api.get("/api/carrinho");
      // Verifique se a estrutura bate com o return {"carrinho": [...]} do Python
      setCarrinho(resp.data.carrinho || []);
    } catch (error) {
      console.error("Erro ao carregar carrinho:", error);
    } finally {
      setLoading(false);
    }
  };

  // Isso garante que o carrinho atualize toda vez que você entrar na aba
  useFocusEffect(
    useCallback(() => {
      carregarCarrinho();
    }, []),
  );

  // Aumentar Quantidade
  const aumentarQuantidade = async (id) => {
    try {
      await api.put(`/api/carrinho/${id}/aumentar`);

      carregarCarrinho();
    } catch (error) {
      console.error("Erro ao aumentar quantidade:", error);
    }
  };

  // Diminuir Quantidade
  const diminuirQuantidade = async (id) => {
    try {
      await api.put(`/api/carrinho/${id}/diminuir`);

      carregarCarrinho();
    } catch (error) {
      console.error("Erro ao diminuir quantidade:", error);
    }
  };

  // Remover Item
  const removerQuantidade = async (id) => {
    try {
      await api.post(`/api/carrinho/remover/${id}`);

      carregarCarrinho();
    } catch (error) {
      console.error(
        "Erro ao remover produto:",
        error.response?.data || error.message,
      );
    }
  };

  useEffect(() => {
    const somaTotal = carrinho.reduce((acc, item) => {
      return acc + item.preco * item.quantidade;
    }, 0);

    setTotal(somaTotal);
  }, [carrinho]);

  return (
    <View
      style={styles.main}
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={carregarCarrinho} />
      }
    >
      {/* Header */}
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Arrow} style={styles.arrowImg} />
        </TouchableOpacity>

        <Text style={styles.textHeader}>Meu Carrinho</Text>
      </View>

      {carrinho.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Seu carrinho está vazio.
        </Text>
      ) : (
        <ScrollView style={styles.contain} showsVerticalScrollIndicator={false}>
          <View style={styles.carrinhoAmount}>
            <Text style={styles.textProducts}>
              {carrinho.length} {carrinho.length === 1 ? "produto" : "produtos"}
            </Text>
          </View>

          {carrinho.map((item) => (
            <View key={item.id} style={styles.item}>
              <Image source={{ uri: item.imagem }} style={styles.image} />

              <View style={styles.containerItem}>
                <Text style={styles.name}>{item.nome}</Text>

                <View style={styles.line}>
                  <Text style={styles.price}>R$ {item.preco.toFixed(2)}</Text>

                  <View style={styles.containAmount}>
                    <TouchableOpacity
                      style={styles.buttonsAmountMinus}
                      onPress={() => diminuirQuantidade(item.id)}
                    >
                      <Image source={Minus} style={styles.imageAmount} />
                    </TouchableOpacity>

                    <View style={styles.amountContain}>
                      <Text style={styles.amount}>{item.quantidade}</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.buttonsAmountPlus}
                      onPress={() => aumentarQuantidade(item.id)}
                    >
                      <Image source={Plus} style={styles.imageAmount} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.buttonRemove}
                onPress={() => removerQuantidade(item.id)}
              >
                <Image source={Plus} style={styles.imageRemove} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
      <View style={styles.totalPrice}>
        <Text style={styles.textPrice}>R$ {total.toFixed(2)}</Text>

        <TouchableOpacity 
          style={styles.buttonFinalizar} 
          activeOpacity={0.9}
          onPress={finalizarPedido}
          disabled={loading}
        >
          <Text style={styles.buttonFinalizarText}>FINALIZAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
