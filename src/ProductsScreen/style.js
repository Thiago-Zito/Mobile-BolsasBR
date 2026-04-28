import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
// Pegar altura e alrgura da pagina
const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Header - Removido absolute para não flutuar sobre a lista
  containerHeader: {
    height: height * 0.12,
    width: width,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#d9d9d9", // Corrigido de borderBlockColor
    paddingTop: height * 0.04, // Ajuste para a barra de status do celular
  },

  voltar: {
    paddingHorizontal: "6%", // Melhor usar padding para área de clique
  },

  arrowImg: {
    width: 20, // Melhor usar tamanhos fixos para ícones pequenos
    height: 20,
    resizeMode: "contain",
    transform: [{ rotate: "180deg" }],
  },

  textHeader: {
    fontFamily: "Jost-Regular",
    fontSize: 16,
  },

  // Produto
  containerProduct: {
    // REMOVIDO: height: height (Isso impedia o scroll)
    width: width,
    flexDirection: "row",
    flexWrap: "wrap",
    // Removido marginTop se você remover o absolute do header
  },

  product: {
    borderWidth: 0.2,
    borderColor: "#b2b2b2",
    width: "50%",
    height: 280, // Use um valor fixo ou calculado, evitar % muito alta aqui
    paddingBottom: 10,
  },

  bolsaTeste: {
    width: "100%",
    height: "75%",
    resizeMode: "cover", // 'cover' costuma preencher melhor o card do produto
  },

  texts: {
    padding: 10,
  },

  nomeBolsa: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "Jost-Medium",
    marginBottom: 2,
  },

  precoBolsa: {
    color: "#000000",
    fontSize: 13,
    fontFamily: "Jost-Bold", // Destaque no preço
  },
});
