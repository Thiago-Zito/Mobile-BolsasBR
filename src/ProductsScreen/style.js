import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Header
  containerHeader: {
    height: height * 0.12,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: height * 0.04,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d9d9d9",
  },

  arrowImg: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    transform: [{ rotate: "180deg" }],
  },

  textHeader: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "Jost-Regular",
  },

  // Lista
  containerProduct: {
    paddingBottom: 20,
  },

  // Produto (2 colunas)
  product: {
    borderWidth: 0.3,
    borderColor: "#e0e0e0",
  },

  bolsaTeste: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },

  texts: {
    padding: 10,
  },

  nomeBolsa: {
    fontSize: 12,
    fontFamily: "Jost-Medium",
    marginBottom: 4,
  },

  precoBolsa: {
    fontSize: 13,
    fontFamily: "Jost-Bold",
  },
});