import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFF",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#333",
    marginBottom: 10,
    marginTop: 15,
    letterSpacing: 0.5,
  },
  addressCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    borderWidth: 1.5,
    borderColor: "#000", // Borda preta para o item selecionado fixo
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  addressInfo: {
    flex: 1,
  },
  addressLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#000",
    marginBottom: 4,
  },
  addressText: {
    fontSize: 14,
    color: "#444",
  },
  methodCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F1F3F5",
    borderWidth: 1.5,
    borderColor: "transparent",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  selectedCard: {
    backgroundColor: "#FFF",
    borderColor: "#000", // Destaque em preto quando selecionado
  },
  methodLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  cardIconDummy: {
    width: 45,
    height: 28,
    backgroundColor: "#000",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  cardIconText: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "bold",
  },
  methodText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  paymentButton: {
    backgroundColor: "#000", // Botão principal todo preto
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  paymentButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  biometricsContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    flex: 1,
    marginBottom: 20,
  },
  biometricsButton: {
    marginBottom: 10,
    padding: 10,
  },
  biometricsText: {
    fontSize: 14,
    color: "#666",
  },
});
