import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  // ADICIONADO: http:// e a porta :8000 (ajuste para https se já tiver certificado)
  baseURL: 'http://teamcode123.eastus2.cloudapp.azure.com' 
});

// Interceptor para injetar o Token JWT automaticamente, se houver
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@token_app');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;