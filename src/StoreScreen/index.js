import { Text, Image, View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import Banner from "../assets/banner.png";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";


export default function StoreScreen({ navigation }) {
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
    // View principal
    <ScrollView style={styles.main}>
      {/* Image Banner */}
      <TouchableOpacity style={styles.containerBanner} activeOpacity={0.9} onPress={() => navigation.navigate('ProductsScreen')}>
        {/* Banner */}
        <Image source={Banner} style={styles.imgBanner} />
        {/* Degrade sombra */}
        <LinearGradient
          colors={["transparent", "#000000e3"]} // Cores do degrade
          style={styles.gradient}
        />
        {/* Descubra */}
        <View style={styles.containerDescubra}>
          <Text style={styles.textDescubra}>Descubra</Text>

          <Text style={styles.textColecao}>Coleção Feminina Exclusiva</Text>
        </View>
      </TouchableOpacity>

      {/* Selecao da Semana */}
    </ScrollView>
  );
}
