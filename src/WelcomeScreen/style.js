import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const largura = Dimensions.get("window").width;
const altura = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  imageBackground: {
    flex: 1, // Preenche todo o espaco disponivel
  },

  sombra: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: 0.6, // Opacidade
    zIndex: 0, // Deixa na Camada 0
    position: "absolute", // Deixa os elementos nele mesmo
  },

  logo: {
    width: 55,
    height: 55,
    resizeMode: "contain", // Mantem a proporcao original
    position: "absolute",
    top: "35%", // Posicionar altura
    left: "43%", // Posicionar esquerda
  },

  // Carrosel

  carrosel: {
    flex: 1,
    position: "absolute",
    top: "47%",
  },

  introText: {
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontFamily: "Jost-Regular",
    fontSize: 13,
    letterSpacing: -0.7, // Deixa as letras mais juntas
    lineHeight: 30, // Estica as letra verticalmente
    marginBottom: 4,
  },

  subtitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Jost-Regular",
    letterSpacing: -0.7,
    lineHeight: 30,
    textAlign: "center", // Deixa o elemento no centro
    width: 300,
  },

  // Dot

  containerDot: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    position: "absolute",
    top: "64.5%",
    left: "41%",
  },

  dot: {
    width: 7,
    height: 7,
    resizeMode: "contain",
    opacity: 0.5,
  },

  // Login

  login: {
    backgroundColor: "#fff",
    width: "87%",
    height: "5.5%",
    position: "absolute",
    top: "70%",
    left: "7%",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  textLogin: {
    fontFamily: "Jost-Medium",
    fontSize: 14,
  },

  // Cadastro

  cadastro: {
    backgroundColor: "#00000000",
    borderWidth: 1,
    borderColor: "#ffffff87",
    width: "87%",
    height: "5.5%",
    position: "absolute",
    top: "76.5%",
    left: "7%",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  textCadastro: {
    fontFamily: "Jost-Medium",
    fontSize: 14,
    color: "#fff",
  },

  // Visitante

  visitante: {
    position: "absolute",
    top: "88%",
    left: "33%",
  },

  visitanteText: {
    fontFamily: "Jost-Medium",
    fontSize: 13,
    color: "#fff",
    textDecorationLine: "underline", // Colocar linha em baixo
  },

  // Areas

  areaLogin: {
    transform: [{ translateX: largura }],
  },

  areaLoginActive: {
    transform: [{ translateX: 0 }],
  },

  containerLogin: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },

  containerVoltar: {
    width: "95%",
    height: "3%",
    alignItems: "flex-start",
    position: "absolute",
    top: 55,
  },

  voltar: {
    height: "100%",
    width: "3%",
    marginLeft: "6%",
  },

  arrowImg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    transform: [{ rotate: "180deg" }],
  },

  title: {
    margin: 3,
  },

  subTitle: {
    marginBottom: 21,
    alignItems: "center"
  },

  textTitle: {
    color: "#fff",
    fontFamily: "Jost-Regular",
    fontSize: 19,
  },

  textSubTitle: {
    color: "#ffffff4f",
    fontFamily: "Jost-Regular",
    fontSize: 12,
  },

  containerTextInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ffffff4f",
    width: "100%",
    height: "100%",
    fontFamily: "Jost-Regular",
    paddingLeft: 15,
    color: "#fff"
  },

  containerInput: {
    width: "90%",
    height: "6%",
    marginTop: 17,
  },

  passwordLogin: {
    width: "85%",
    marginTop: 30,
    alignItems: "flex-end",
  },

  passwordText: {
    fontFamily: "Jost-Medium",
    fontSize: 12,
    color: "#fff",
    textDecorationLine: "underline", // Colocar linha em baixo
  },

  touchableLogin: {
    backgroundColor: "#3a3838",
    width: "87%",
    height: "5.5%",
    position: "absolute",
    left: "7%",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    bottom: "10%",
  },

  touchableLoginText: {
    fontFamily: "Jost-Medium",
    fontSize: 14,
  },

  // Cadastro

  areaCadastro: {
    transform: [{ translateX: largura }],
    alignItems: "center"
  },

  areaCadastroActive: {
    transform: [{ translateX: 0 }],
    position: "absolute",
    height: "100%",
    width: "100%",
    alignItems: "center"
  },

  containerCadastro: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },

  containerHeader: {
    height: "5%",
    width: "95%",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },

  closeImg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  close: {
    height: "100%",
    width: "4%",
    marginRight: "3%",
  },

  containerStep:  {
    width: "85%",
    height: "45%",
    alignItems: "center",
    justifyContent: "center"
  },

  step: {
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    height: "100%",
    width: "12.5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },

  textStep: {
    color: "#ffffffc7",
    fontFamily: "Jost-Regular",
    fontSize: 13,
    letterSpacing: -0.6, 
  },

  containerLine: {
    width: "70%",
    height: 5,
    marginTop: "3%",
    marginBottom: "5%",
  },

  lineImg: {
    width: "100%",
    height: "100%",
  },

  camposCadastro: {
    alignItems: "center",
    width: "100%"
  },

  infoCadastro: {
    marginTop: "8%",
    width: "90%"
  },

  infoCadastroText: {
    color: "#ffffff4f",
    fontFamily: "Jost-Regular",
    fontSize: 10.5,
  }
  
});
