import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar, Alert, ActivityIndicator } from 'react-native';
import { ArrowLeft, CheckCircle2, Fingerprint } from 'lucide-react-native';
import api from '../services/api';

export default function PayScreen({ route, navigation }) {
  // 1. CAPTURA DOS PARÂMETROS COM SUPER PROTEÇÃO
  const params = route?.params || {};
  
  // Exibe no console exatamente o que chegou do Carrinho para ajudar a debugar
  console.log("=== PARÂMETROS RECEBIDOS NA PAYSCREEN ===", params);

  const carrinho = params.carrinho || [];
  const usuario = params.usuario || {};
  
  // Garante que o total seja um número válido para o .toFixed não quebrar a tela
  const totalRaw = params.total;
  const total = typeof totalRaw === 'number' ? totalRaw : (Number(totalRaw) || 0);

  const [selectedPayment, setSelectedPayment] = useState('paypal');
  const [loading, setLoading] = useState(false);

  const handleConfirmPayment = async () => {
    try {
      setLoading(true);
      const resp = await api.post("/api_json/checkout");

      if (resp.data && resp.data.Erro) {
        Alert.alert("Erro", resp.data.Erro);
        return;
      }

      navigation.navigate("CheckoutScreen");

    } catch (error) {
      console.error("Erro ao registrar pedido:", error);
      Alert.alert("Erro", "Houve um problema ao finalizar sua compra.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ArrowLeft color="#000" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        {/* Endereço de entrega */}
        <Text style={styles.sectionTitle}>DELIVERY ADDRESS</Text>
        <View style={styles.addressCard}>
          <View style={styles.addressInfo}>
            <Text style={styles.addressLabel}>DELIVERY FOR: {usuario?.nome || "CLIENTE"}</Text>
            <Text style={styles.addressText}>928 Lehner Junction Apt. 047</Text>
          </View>
          <CheckCircle2 color="#000" size={22} fill="#000" stroke="#fff" />
        </View>

        {/* Métodos de Pagamento */}
        <Text style={styles.sectionTitle}>PAYMENT METHOD</Text>

        {/* Opção Visa */}
        <TouchableOpacity 
          style={[styles.methodCard, selectedPayment === 'visa' && styles.selectedCard]} 
          onPress={() => setSelectedPayment('visa')}
        >
          <View style={styles.methodLeft}>
            <View style={styles.cardIconDummy}><Text style={styles.cardIconText}>VISA</Text></View>
            <Text style={styles.methodText}>•••• •••• •••• 5967</Text>
          </View>
          {selectedPayment === 'visa' && <CheckCircle2 color="#000" size={22} fill="#000" stroke="#fff" />}
        </TouchableOpacity>

        {/* Opção PayPal */}
        <TouchableOpacity 
          style={[styles.methodCard, selectedPayment === 'paypal' && styles.selectedCard]} 
          onPress={() => setSelectedPayment('paypal')}
        >
          <View style={styles.methodLeft}>
            <View style={styles.cardIconDummy}><Text style={styles.cardIconText}>PP</Text></View>
            <Text style={styles.methodText}>{usuario?.email || "usuario@email.com"}</Text>
          </View>
          {selectedPayment === 'paypal' && <CheckCircle2 color="#000" size={22} fill="#000" stroke="#fff" />}
        </TouchableOpacity>

        {/* Opção Mastercard */}
        <TouchableOpacity 
          style={[styles.methodCard, selectedPayment === 'master' && styles.selectedCard]} 
          onPress={() => setSelectedPayment('master')}
        >
          <View style={styles.methodLeft}>
            <View style={styles.cardIconDummy}><Text style={styles.cardIconText}>MC</Text></View>
            <Text style={styles.methodText}>•••• •••• •••• 3461</Text>
          </View>
          {selectedPayment === 'master' && <CheckCircle2 color="#000" size={22} fill="#000" stroke="#fff" />}
        </TouchableOpacity>

        {/* Botão de pagamento */}
        <TouchableOpacity 
          style={[styles.paymentButton, loading && { opacity: 0.7 }]} 
          onPress={handleConfirmPayment}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.paymentButtonText}>Pagar R$ {total.toFixed(2)}</Text>
          )}
        </TouchableOpacity>

        {/* Biometria fictícia */}
        <View style={styles.biometricsContainer}>
          <TouchableOpacity style={styles.biometricsButton} onPress={handleConfirmPayment} disabled={loading}>
            <Fingerprint color="#A0A0A0" size={48} strokeWidth={1.5} />
          </TouchableOpacity>
          <Text style={styles.biometricsText}>Pagar com Touch ID</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#FFF', borderBottomWidth: 1, borderBottomColor: '#E9ECEF' },
  backButton: { padding: 4 },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#000' },
  content: { flex: 1, padding: 20 },
  sectionTitle: { fontSize: 12, fontWeight: '700', color: '#333', marginBottom: 10, marginTop: 15, letterSpacing: 0.5 },
  addressCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFF', borderWidth: 1.5, borderColor: '#000', borderRadius: 8, padding: 16, marginBottom: 20 },
  addressInfo: { flex: 1 },
  addressLabel: { fontSize: 12, fontWeight: '700', color: '#000', marginBottom: 4 },
  addressText: { fontSize: 14, color: '#444' },
  methodCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F1F3F5', borderWidth: 1.5, borderColor: 'transparent', borderRadius: 8, padding: 16, marginBottom: 12 },
  selectedCard: { backgroundColor: '#FFF', borderColor: '#000' },
  methodLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  cardIconDummy: { width: 45, height: 28, backgroundColor: '#000', borderRadius: 4, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  cardIconText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
  methodText: { fontSize: 14, color: '#000', fontWeight: '500' },
  paymentButton: { backgroundColor: '#000', borderRadius: 8, paddingVertical: 16, alignItems: 'center', justifyContent: 'center', marginTop: 25 },
  paymentButtonText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
  biometricsContainer: { alignItems: 'center', justifyContent: 'center', marginTop: 40, flex: 1, justifyContent: 'flex-end', marginBottom: 20 },
  biometricsButton: { marginBottom: 10, padding: 10 },
  biometricsText: { fontSize: 14, color: '#666' },
});