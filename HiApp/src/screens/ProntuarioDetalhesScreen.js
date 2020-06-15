import React from 'react';

import {
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import {
  Title,
  TextInput,
  Button,
  Avatar,
  Subheading,
  Appbar,
  DataTable,
  Text
} from 'react-native-paper';

import background from '../assets/imgs/background.png'

const ScreenHeight = Dimensions.get("window").height;

const theme = {
  colors: {
    accent: '#FFF',
    color: '#FFF',
    primary: '#FFF',
    backdrop: '#FFF',
    placeholder: '#FFF',
    disabled: '#FFF',
    text: '#FFF',
    surface: '#FFF',
    background: '#FFF',
  }
}

const MotoristaFirstAccess = (props) => {

  const { navigation, route } = props;

  return (
    <ScrollView style={{ width: '100%' }}>
      <SafeAreaView style={styles.container}>
        <Appbar.Header style={{ backgroundColor: '#26668B' }}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Motorista Vinícius" />
        </Appbar.Header>
        <ImageBackground source={background} style={[{ height: ScreenHeight }, styles.image]}>
          <View style={styles.boxButton}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title theme={theme}>Pergunta</DataTable.Title>
                <DataTable.Title theme={theme}>Resposta</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell theme={theme}>
                  <Text style={styles.text}>Idade</Text>
                </DataTable.Cell>
                <DataTable.Cell theme={theme}>
                  <Text style={styles.text}>30</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell theme={theme}>
                  <Text style={styles.text}>Região incomodada</Text>
                </DataTable.Cell>
                <DataTable.Cell theme={theme}>
                  <Text style={styles.text}>Cabeça</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell theme={theme}>
                  <Text style={styles.text}>O que incomoda</Text>
                </DataTable.Cell>
                <DataTable.Cell theme={theme}>
                  <Text style={styles.text}>Dor</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell theme={theme}>
                  <Text style={styles.text}>Quanto tempo</Text>
                </DataTable.Cell>
                <DataTable.Cell theme={theme}>
                  <Text style={styles.text}>Mais de 6 meses</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell theme={theme}>
                  <Text style={styles.text}>Sintoma 0-10</Text>
                </DataTable.Cell>
                <DataTable.Cell theme={theme}>
                  <Text style={styles.text}>8</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell theme={theme}>
                  <Text style={styles.text}>Diagnóstico</Text>
                </DataTable.Cell>
                <DataTable.Cell theme={theme}>
                  <Text style={styles.text}>Nenhum</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell theme={theme}>
                  <Text style={styles.text}>Mais importante</Text>
                </DataTable.Cell>
                <DataTable.Cell theme={theme}>
                  <Text style={styles.text}>Nenhum</Text>
                </DataTable.Cell>
              </DataTable.Row>

            </DataTable>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFF'
  },
  calendar: {
    width: '100%',
  },
  container: {
    flex: 1,
  },
  title: {
    marginLeft: 20,
    color: '#FFF'
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: "cover",
    alignItems: 'center',
  },
  boxButton: {
    marginTop: 40,
    width: '100%',
  },
  boxAvatar: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default MotoristaFirstAccess;