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
  Appbar
} from 'react-native-paper';

import background from '../assets/imgs/background.png'

import maik from '../assets/imgs/vinicius.jpg'

const ScreenHeight = Dimensions.get("window").height;

const MotoristaFirstAccess = (props) => {

  const { navigation, route } = props;

  return (
    <ScrollView style={{ width: '100%' }}>
      <SafeAreaView style={styles.container}>
        <Appbar.Header style={{ backgroundColor: '#26668B' }}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Exibir Prontuário" />
        </Appbar.Header>
        <ImageBackground source={background} style={[{ height: ScreenHeight }, styles.image]}>
          <View style={styles.boxButton}>
            <TouchableHighlight onPress={() => navigation.navigate('ProntuarioDetalhesScreen')}>
              <View style={styles.boxAvatar}>
                <Avatar.Image size={54} source={maik} />
                <View>
                  <Title style={styles.title}>Motorista Vinícius</Title>
                  <Subheading style={styles.title}>15/06/2020 20:00</Subheading>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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