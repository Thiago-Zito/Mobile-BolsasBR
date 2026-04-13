import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
// Pegar altura da pagina
const { height } = Dimensions.get("window");


export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#1e1e1e"
  },

  // Banner

  containerBanner: {
    width: "100%",
    height: height * 0.66,
  },

  imgBanner: {
    width: "100%",
    height: "100%",
  },

  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "95%",
  },

  containerDescubra: {
    position: "absolute",
    bottom: 0,
    margin: "6%"
  },

  textDescubra: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "Jost-Regular",
    marginBottom: "3%"
  },

  textColecao: {
    color: "#fff",
    fontSize: 21,
    fontFamily: "Jost-Regular",
  }
});
