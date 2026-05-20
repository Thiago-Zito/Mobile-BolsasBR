import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  containerHeader: {
    width: "100%",
    paddingTop: "14%",
    paddingHorizontal: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  arrowImg: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    transform: [{ rotate: "180deg" }],
  },

  buttons: {
    flexDirection: "row",
    gap: 10,
  },

  buttonsImg: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  title: {
    marginHorizontal: "5%",
    fontSize: 21,
    fontFamily: "Jost-Regular",
    marginTop: 10,
  },

  codProduct: {
    marginHorizontal: "5%",
    color: "#838181",
    fontSize: 13,
    fontFamily: "Jost-Regular",
    marginBottom: 10,
  },

  imageContent: {
    width: "100%",
  },

  image: {
    width: width,
    height: 300,
    resizeMode: "cover",
  },

  infoContainer: {
    padding: "5%",
  },

  preco: {
    fontSize: 20,
    fontFamily: "Jost-Bold",
    marginBottom: 10,
  },

  descricao: {
    fontSize: 14,
    color: "#555",
    fontFamily: "Jost-Regular",
  },

  botao: {
    margin: "5%",
    backgroundColor: "#000",
    padding: 15,
    alignItems: "center",
  },

  botaoTexto: {
    color: "#fff",
    fontFamily: "Jost-Medium",
  },

  // Modal

  modalCart: {
    position: "absolute",
    top: "120%",
    width: "85%",
    height: 65,
    backgroundColor: "#ffffff",
    marginLeft: 32,
    borderRadius: 2,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    borderWidth: 0.5,
    borderColor: "#bbbbbb",

    shadowColor: "#797979",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,

    elevation: 5,
  },

  modalText: {
    fontSize: 12,
    color: "#6a6a6a",
    fontFamily: "Jost-Regular",
  },

  modalLink: {
    fontSize: 12,
    color: "#000000",
    fontFamily: "Jost-Regular",
    borderBottomWidth: 1,
    width: 65,
  },

  imageCheck: {
    width: 20,
    height: 20,
  },

  modalContainerText: {
    flexDirection: "column",
    marginBottom: 3,
  },
});
