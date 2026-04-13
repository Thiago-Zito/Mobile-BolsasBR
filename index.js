import { registerRootComponent } from 'expo';

import App from './src/Navigation/stack.routes';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// npm install
// npx expo install expo-linear-gradient
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
// npm install @react-navigation/native-stack