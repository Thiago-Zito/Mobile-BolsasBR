import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoutes from "./tab.routes";

import WelcomeScreen from '../WelcomeScreen';
import ProductsScreen from '../ProductsScreen';
import DetailScreen from '../DetailScreen';
import CartScreen from '../CartScreen';
import PayScreen from '../PayScreen';
import CheckoutScreen from '../CheckoutScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="StoreScreen" component={TabRoutes} />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="PayScreen" component={PayScreen} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}