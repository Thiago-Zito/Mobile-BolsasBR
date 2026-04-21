import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 100, // Espaço para o botão flutuante não sobrepor o conteúdo
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  productCode: {
    fontFamily: "Jost-Regular",
    fontSize: 14,
    color: "#333333",
    letterSpacing: 1.5,
  },
  infoContainer: {
    marginBottom: 40,
  },
  title: {
    fontFamily: "Jost-Regular",
    fontSize: 28,
    color: "#000000",
    marginBottom: 10,
  },
  price: {
    fontFamily: "Jost-Regular",
    fontSize: 18,
    color: "#000000",
  },
  colorsSection: {
    marginBottom: 40,
  },
  colorsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    color: "#000000",
  },
  selectedColorText: {
    fontFamily: "Jost-Regular",
    fontSize: 16,
    color: "#333333",
  },
  thumbnailsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  thumbnailWrapper: {
    width: 80,
    height: 80,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5", // Borda padrão cinza clarinho
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#F9F9F9",
  },
  thumbnailSelected: {
    borderColor: "#000000", // Borda preta quando selecionado
    borderWidth: 1.5,
  },
  thumbnailImage: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  linhaSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    paddingVertical: 25,
  },
  linhaRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  linhaValue: {
    fontFamily: "Jost-Regular",
    fontSize: 16,
    color: "#000000",
    marginRight: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D9D9D9",
    marginRight: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: "#ffffff",
  },
  buyButton: {
    backgroundColor: "#000000",
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  buyButtonText: {
    fontFamily: "Jost-Medium",
    color: "#ffffff",
    fontSize: 16,
  },
  image: {
    width: "50%",
    height: 400,
    resizeMode: "cover",
  },
});
