import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';

import MotoristaFirstAccess from './src/screens/MotoristaFirstAccess';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen options={{ headerShown: false }} name="MainScreen" component={MainScreen} />
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="MotoristaFirstAccess" component={MotoristaFirstAccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}