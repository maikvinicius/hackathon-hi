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
import TerapeutaHomeScreen from './src/screens/TerapeutaHomeScreen';
import TerapeutaLoginScreen from './src/screens/TerapeutaLoginScreen';
import TerapeutaTeleAtendimentoScreen from './src/screens/TerapeutaTeleAtendimentoScreen';
import TerapeutaAgendaScreen from './src/screens/TerapeutaAgendaScreen';
import ProntuarioScreen from './src/screens/ProntuarioScreen';
import ProntuarioDetalhesScreen from './src/screens/ProntuarioDetalhesScreen';
import CCRLoginScreen from './src/screens/CCRLoginScreen';
import CCRHomeScreen from './src/screens/CCRHomeScreen';
import MetricasScreen from './src/screens/MetricasScreen';

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
        <Stack.Screen options={{ headerShown: false }} name="TerapeutaHomeScreen" component={TerapeutaHomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="TerapeutaLoginScreen" component={TerapeutaLoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="TerapeutaTeleAtendimentoScreen" component={TerapeutaTeleAtendimentoScreen} />
        <Stack.Screen options={{ headerShown: false }} name="TerapeutaAgendaScreen" component={TerapeutaAgendaScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ProntuarioScreen" component={ProntuarioScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ProntuarioDetalhesScreen" component={ProntuarioDetalhesScreen} />
        <Stack.Screen options={{ headerShown: false }} name="CCRLoginScreen" component={CCRLoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="CCRHomeScreen" component={CCRHomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="MetricasScreen" component={MetricasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}