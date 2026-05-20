import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";

import StoreScreen from "../StoreScreen";
import UserScreen from "../UserScreen";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  // -- Adicionar fonte --
  const [fontsLoaded] = useFonts({
    "Jost-Regular": require("../assets/fonts/Jost/Jost-Regular.ttf"),
    "Jost-SemiBold": require("../assets/fonts/Jost/Jost-SemiBold.ttf"),
    "Jost-Medium": require("../assets/fonts/Jost/Jost-Medium.ttf"),
    "Jost-Light": require("../assets/fonts/Jost/Jost-Light.ttf"),
    "Jost-ExtraLight": require("../assets/fonts/Jost/Jost-ExtraLight.ttf"),
    "Jost-Bold": require("../assets/fonts/Jost/Jost-Bold.ttf"),
  });
  // Caso nao carregar
  if (!fontsLoaded)
    return <View style={{ flex: 1, backgroundColor: "white" }} />;

  // ----------------------

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
        animationDuration: 1000,

        // Fundo da bottom tab
        tabBarStyle: {
          backgroundColor: "#0f0f0f",
          borderTopWidth: 0,
          height: 120,
        },

        // Cor do item ativo
        tabBarActiveTintColor: "#fff",

        // Cor do item inativo
        tabBarInactiveTintColor: "#777",

        // Texto
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Jost-Regular",
          marginTop: -10,
        },
      }}
    >
      <Tab.Screen name="Explore" component={StoreScreen} options={{
          tabBarIcon: () => null,
        }}/>
      <Tab.Screen name="MyBB" component={UserScreen} options={{
          tabBarIcon: () => null,
        }}/>
    </Tab.Navigator>
  );
}
