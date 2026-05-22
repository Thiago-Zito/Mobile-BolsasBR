import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  statusBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 25,
  },
  statusTextContainer: {
    marginLeft: 12,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  statusSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
    marginTop: 10,
    letterSpacing: 1,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#000',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  productDetails: {
    flex: 1,
    paddingHorizontal: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  productSubtext: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  productQuantity: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  priceContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  infoCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    marginBottom: 20,
  },
  infoCardTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#666',
    marginBottom: 4,
  },
  infoCardText: {
    fontSize: 14,
    color: '#000',
  },
  summaryCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    marginBottom: 30,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#E9ECEF',
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
});