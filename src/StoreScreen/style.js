import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
// Pegar altura da pagina
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#1e1e1e",
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

  buttonsHeader: {
    flexDirection: "row",
    gap: 35
  },

  imgConversation: {
    width: 23,
    height: 23,
  },
  imgBell: {
    width: 23,
    height: 23,
  },
  textHeader: {
    color: "#fff",
    fontSize: 21,
    fontFamily: "Jost-Regular",
  },

  // Banner

  containerMainBanner: {
    width: "100%",
    height: height * 0.74,
    marginBottom: 36
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

  containerPhrases: {
    position: "absolute",
    bottom: 0,
    margin: "6%",
  },

  textTitle: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "Jost-Regular",
    marginBottom: "3%",
  },

  textMainBanner: {
    color: "#fff",
    fontSize: 21,
    fontFamily: "Jost-Regular",
  },

  containerTextCollection: {
    width: "90%",
    margin: 10,
  },

  textLastCollection: {
    color: "#fff",
    fontSize: 23,
    fontFamily: "Jost-Regular",
  },

  lastCollections: {
    alignItems: "center"
  },

  containerBanner: {
    width: "90%",
    height: height * 0.60,
    borderRadius: 10,
    overflow: "hidden",
  },

  textBanner: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "Jost-Regular",
  },

  // Footer

  containerFooter: {
    margin: 50,
    alignItems: "center",
    justifyContent: "center"
  },

  logoFooter: {
    width: 34,
    height: 34,
    resizeMode: "contain"
  }
});
