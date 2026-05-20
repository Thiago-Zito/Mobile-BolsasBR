import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },

  content: {
    alignItems: "center",
  },

  // Header

  containerHeader: {
    width: width,
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

  // Itens

  contain: {
    width: "92%",
    flex: 1,
    marginBottom: 130,
    marginLeft: 16
  },

  item: {
    height: 136,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 15,
    backgroundColor: "#ffffff",
    gap: 15,
    borderRadius: 5,
  },

  image: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  name: {
    color: "#000000",
    fontSize: 11,
    fontFamily: "Jost-Regular",
    marginBottom: "3%",
  },

  price: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "Jost-Regular",
    marginBottom: "3%",
  },

  containerItem: {
    gap: 5,
  },

  carrinhoAmount: {
    width: "93%",
    marginTop: 15,
    marginBottom: 16,
  },

  textProducts: {
    color: "#949494",
    fontSize: 11,
    fontFamily: "Jost-Regular",
  },

  line: {
    width: 125,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },

  // Quantidade

  containAmount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 35,
  },

  amountContain: {
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#eeeeee",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },

  amount: {
    fontSize: 8,
  },

  imageAmount: {
    width: 8,
    height: 8,
  },

  buttonsAmountPlus: {
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    borderTopEndRadius: 2,
    borderBottomEndRadius: 2,
    borderColor: "#eeeeee",
    borderWidth: 1,
    backgroundColor: "#eeeeee",
  },

  buttonsAmountMinus: {
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 2,
    borderBottomStartRadius: 2,
    borderColor: "#eeeeee",
    borderWidth: 1,
    backgroundColor: "#eeeeee",
  },

  // Remover

  imageRemove: {
    width: 20,
    height: 20,
    transform: [{ rotate: "45deg" }],
  },

  buttonRemove: {
    margin: 10,
    position: "absolute",
    left: 338,
    top: 5
  },

  // Preco total

  totalPrice: {
    width: "100%",
    height: 140,
    justifyContent: "space-between",
    paddingBottom: 60,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },

  textPrice: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "Jost-Regular",
    marginLeft: 20
  },

  buttonFinalizar: {
    backgroundColor: "#000000",
    width: 250,
    height: 50,
    marginRight: 15,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonFinalizarText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "Jost-Regular",
  }

});
