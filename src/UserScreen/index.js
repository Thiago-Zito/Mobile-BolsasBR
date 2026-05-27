import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BoxIcon from "../assets/box.png";
import CartIcon from "../assets/cesta-de-compras.png";
import Arrow from "../assets/arrow-right.png";

export default function UserScreen({ navigation }) {
  const [nome, setNome] = useState("");
  // Pegar nome
  useEffect(() => {
    async function carregarNome() {
      const nomeSalvo = await AsyncStorage.getItem("@nome_usuario");
      setNome(nomeSalvo || "");
    }

    carregarNome();
  }, []);
  return (
    <View style={styles.main}>
      {/* Header */}
      <View style={styles.containerHeader}>
        {/* Apresentacao */}
        <Text style={styles.textHeader}>Bem-vindo {nome}</Text>
      </View>

      {/* Opcoes do Usuario */}
      <View style={styles.containerOptions}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.option}
          onPress={() => navigation.navigate("CheckoutScreen")}
        >
          <View style={styles.sideLeft}>
            {/* Icon */}
            <Image source={BoxIcon} style={styles.iconOption}></Image>
            {/* Text */}
            <Text style={styles.textOption}>Meus Pedidos</Text>
          </View>
          <View style={styles.sideRight}>
            <Image source={Arrow} style={styles.arrowImg} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.option}
          onPress={() => navigation.navigate("CartScreen")}
        >
          <View style={styles.sideLeft}>
            {/* Icon */}
            <Image source={CartIcon} style={styles.iconOption}></Image>
            {/* Text */}
            <Text style={styles.textOption}>Meu Carrinho</Text>
          </View>
          <View style={styles.sideRight}>
            <Image source={Arrow} style={styles.arrowImg} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
