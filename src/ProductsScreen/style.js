import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
// Pegar altura e alrgura da pagina
const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  // Header

  containerHeader: {
    height: height * 0.12,
    width: width,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBlockColor: "#d9d9d9",
    position: "absolute",
  },

  voltar: {
    height: "15%",
    width: "3%",
    marginLeft: "6%",
    marginTop: "8%",
  },

  arrowImg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    transform: [{ rotate: "180deg" }],
  },

  textHeader: {
    marginLeft: "6%",
    marginTop: "8%",
    fontFamily: "Jost-Regular",
    fontSize: 16,
  },

  // Produto

  containerProduct: {
    height: height,
    width: width,
    marginTop: height * 0.12,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  product: {
    borderWidth: 0.2,
    borderColor: "#b2b2b2",
    width: "50%",
    height: "33%",
  },

  bolsaTeste: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  texts: {
    height: "37%",
    padding: 10,
  },
  nomeBolsa: {
    color: "#000000",
    fontSize: 11,
    fontFamily: "Jost-Medium",
    marginBottom: "1%",
  },
  precoBolsa: {
    color: "#000000",
    fontSize: 11,
    fontFamily: "Jost-Regular",
  },
});
