import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
// Pegar altura da pagina
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // Header
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width,
    height: 100,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 35,
    position: "absolute",
    top: 0,
    zIndex: 1,
    elevation: 10,
  },

  textHeader: {
    color: "#0f0f0f",
    fontSize: 21,
    fontFamily: "Jost-Regular",
  },

  // Opcoes

  containerOptions: {
    width: "93%",
    height: "100%",
    marginTop: 260,
  },

  option: {
    height: 75,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cfcfcf",
  },

  sideLeft: {
    flexDirection: "row",
    gap: 22,
  },

  iconOption: {
    width: 20,
    height: 20,
    marginLeft: 5
  },

  textOption: {
    fontSize: 14,
    fontFamily: "Jost-Regular",
    color: "#494949"
  },

  arrowImg: {
    width: 15,
    height: 10,
    resizeMode: "contain",
  },
});
