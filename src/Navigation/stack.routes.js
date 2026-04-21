import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../WelcomeScreen';
import StoreScreen from '../StoreScreen';
import ProductsScreen from '../ProductsScreen'
import DetailScreen from '../DetailScreen'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="StoreScreen" component={StoreScreen} />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}