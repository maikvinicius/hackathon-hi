import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import MotoristaFirstAccess from './src/screens/MotoristaFirstAccess';
import MotoristaTeleAtendimentoScreen from './src/screens/MotoristaTeleAtendimentoScreen';
import MotoristaHomeScreen from './src/screens/MotoristaHomeScreen';
import MotoristaTratamentoScreen from './src/screens/MotoristaTratamentoScreen';
import MotoristaComoAtendimentoScreen from './src/screens/MotoristaComoAtendimentoScreen';
import MotoristaAgendaSucessoScreen from './src/screens/MotoristaAgendaSucessoScreen';
import MotoristaTratamentoDetalhes from './src/screens/MotoristaTratamentoDetalhes';
import MotoristaFirstAccessQuestionario from './src/screens/MotoristaFirstAccessQuestionario';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen options={{ headerShown: false }} name="MainScreen" component={MainScreen} />
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="MotoristaFirstAccess" component={MotoristaFirstAccess} />
        <Stack.Screen options={{ headerShown: false }} name="MotoristaTeleAtendimentoScreen" component={MotoristaTeleAtendimentoScreen} />
        <Stack.Screen options={{ headerShown: false }} name="MotoristaHomeScreen" component={MotoristaHomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="MotoristaTratamentoScreen" component={MotoristaTratamentoScreen} />
        <Stack.Screen options={{ headerShown: false }} name="MotoristaComoAtendimentoScreen" component={MotoristaComoAtendimentoScreen} />
        <Stack.Screen options={{ headerShown: false }} name="MotoristaAgendaSucessoScreen" component={MotoristaAgendaSucessoScreen} />
        <Stack.Screen options={{ headerShown: false }} name="MotoristaTratamentoDetalhes" component={MotoristaTratamentoDetalhes} />
        <Stack.Screen options={{ headerShown: false }} name="MotoristaFirstAccessQuestionario" component={MotoristaFirstAccessQuestionario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}