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
          <Appbar.Content title="Métricas" />
        </Appbar.Header>
        <ImageBackground source={background} style={[{ height: ScreenHeight }, styles.image]}>
          <View style={styles.boxButton}>
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