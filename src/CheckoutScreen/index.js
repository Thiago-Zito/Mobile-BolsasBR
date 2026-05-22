import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, ActivityIndicator, Alert } from 'react-native';
import { ArrowLeft, CheckCircle2 } from 'lucide-react-native';
import { useFocusEffect } from '@react-navigation/native';
import api from '../services/api';

export default function CheckoutScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [ultimoPedido, setUltimoPedido] = useState(null);
  const [dadosUsuario, setDadosUsuario] = useState(null);

  // Função que busca o histórico no backend
  const carregarDadosRecibo = async () => {
    try {
      setLoading(true);
      const resp = await api.get("/api_json/meus-pedidos");

      // Desestrutura o retorno da sua rota Python: [pedidos, total_geral, usuario]
      const [pedidos, totalGeral, usuario] = resp.data;

      setDadosUsuario(usuario);

      if (pedidos && pedidos.length > 0) {
        // Pega o ÚLTIMO pedido da lista (o que acabou de ser criado no checkout)
        const maisRecente = pedidos[pedidos.length - 1];
        setUltimoPedido(maisRecente);
      }
    } catch (error) {
      console.error("Erro ao carregar recibo:", error);
      Alert.alert("Erro", "Não foi possível carregar os detalhes do pedido.");
    } finally {
      setLoading(false);
    }
  };

  // Carrega sempre que a tela ganhar o foco
  useFocusEffect(
    useCallback(() => {
      carregarDadosRecibo();
    }, [])
  );

  // Tela de carregamento enquanto a API responde
  if (loading) {
    return (
      <SafeAreaView style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#000" />
        <Text style={{ marginTop: 10, color: '#666' }}>Gerando seu recibo...</Text>
      </SafeAreaView>
    );
  }

  // Se por acaso não achar nenhum pedido no banco
  if (!ultimoPedido) {
    return (
      <SafeAreaView style={[styles.container, styles.center]}>
        <Text style={{ fontSize: 16, color: '#333', marginBottom: 20 }}>Nenhum pedido encontrado.</Text>
        <TouchableOpacity style={styles.storeButton} onPress={() => navigation.navigate("StoreScreen")}>
          <Text style={styles.storeButtonText}>VOLTAR PARA A LOJA</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("StoreScreen")}>
          <ArrowLeft color="#000" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Recibo do Pedido</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Banner de Confirmado */}
        <View style={styles.statusBanner}>
          <CheckCircle2 color="#000" size={28} fill="#000" stroke="#fff" />
          <View style={styles.statusTextContainer}>
            <Text style={styles.statusTitle}>Compra Concluída!</Text>
            <Text style={styles.statusSubtitle}>Obrigado, {dadosUsuario?.nome || 'Cliente'}!</Text>
          </View>
        </View>

        {/* Informações do Pedido vindas direto do Banco de Dados */}
        <Text style={styles.sectionTitle}>DETALHES DAENTREGA</Text>
        <View style={styles.infoCard}>
          <Text style={styles.infoCardText}>
            <Text style={{fontWeight: '700'}}>Código do Pedido:</Text> #{ultimoPedido.id}
          </Text>
          <Text style={styles.infoCardText}>
            <Text style={{fontWeight: '700'}}>Prazo de Entrega:</Text> {ultimoPedido.prazo_entrega} dias úteis
          </Text>
          <Text style={styles.infoCardText}>
            <Text style={{fontWeight: '700'}}>Endereço:</Text> 928 Lehner Junction Apt. 047
          </Text>
        </View>

        {/* Resumo Financeiro Oficial do Banco */}
        <Text style={styles.sectionTitle}>RESUMO DO PAGAMENTO</Text>
        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Pago no Cartão/Pix</Text>
            <Text style={styles.totalValue}>R$ {ultimoPedido.total.toFixed(2)}</Text>
          </View>
        </View>

        {/* Botão de Saída */}
        <TouchableOpacity 
          style={styles.storeButton} 
          onPress={() => navigation.navigate("StoreScreen")}
        >
          <Text style={styles.storeButtonText}>VOLTAR PARA A VITRINE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  center: { justifyContent: 'center', alignItems: 'center', padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContext: 'space-between', paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#FFF', borderBottomWidth: 1, borderBottomColor: '#E9ECEF' },
  backButton: { padding: 4 },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#000' },
  scrollContainer: { flex: 1 },
  scrollContent: { padding: 20 },
  statusBanner: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 16, borderRadius: 8, borderWidth: 1.5, borderColor: '#000', marginBottom: 20 },
  statusTextContainer: { marginLeft: 12 },
  statusTitle: { fontSize: 16, fontWeight: '700', color: '#000' },
  statusSubtitle: { fontSize: 12, color: '#666', marginTop: 2 },
  sectionTitle: { fontSize: 11, fontWeight: '700', color: '#000', marginBottom: 10, marginTop: 15, letterSpacing: 1 },
  infoCard: { backgroundColor: '#FFF', borderRadius: 8, padding: 14, borderWidth: 1, borderColor: '#E9ECEF', marginBottom: 10 },
  infoCardText: { fontSize: 13, color: '#333', marginBottom: 6 },
  summaryCard: { backgroundColor: '#FFF', borderRadius: 8, padding: 16, borderWidth: 1, borderColor: '#E9ECEF', marginBottom: 25 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  summaryLabel: { fontSize: 14, color: '#000', fontWeight: '600' },
  totalValue: { fontSize: 18, fontWeight: '700', color: '#000' },
  storeButton: { backgroundColor: '#000', borderRadius: 8, paddingVertical: 16, alignItems: 'center', justifyContent: 'center', width: '100%' },
  storeButtonText: { color: '#FFF', fontSize: 14, fontWeight: '700', letterSpacing: 0.5 },
});