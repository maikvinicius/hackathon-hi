import React from 'react';

import { Calendar } from 'react-native-calendars';

import {
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  ScrollView
} from 'react-native';

import {
  Title,
  TextInput,
  Button,
  Avatar,
  Subheading
} from 'react-native-paper';

import background from '../assets/imgs/background.png'

import maik from '../assets/imgs/avatar.jpg'

const MotoristaFirstAccess = (props) => {

  const { navigation } = props;

  return (
    <ScrollView style={{ width: '100%' }}>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={background} style={styles.image}>
          <View style={styles.boxButton}>
            <Calendar style={styles.calendar} />
            <View style={styles.boxAvatar}>
              <Avatar.Image size={54} source={maik} />
              <View>
                <Title style={styles.title}>Dr. Maik Vinícius</Title>
                <Subheading style={styles.title}>Especialista em Terapia</Subheading>
              </View>
            </View>
            <View style={styles.boxAvatar}>
              <Avatar.Image size={54} source={maik} />
              <View>
                <Title style={styles.title}>Dr. Maik Vinícius</Title>
                <Subheading style={styles.title}>Especialista em Terapia</Subheading>
              </View>
            </View>
            <View style={styles.boxAvatar}>
              <Avatar.Image size={54} source={maik} />
              <View>
                <Title style={styles.title}>Dr. Maik Vinícius</Title>
                <Subheading style={styles.title}>Especialista em Terapia</Subheading>
              </View>
            </View>
            <View style={styles.boxAvatar}>
              <Avatar.Image size={54} source={maik} />
              <View>
                <Title style={styles.title}>Dr. Maik Vinícius</Title>
                <Subheading style={styles.title}>Especialista em Terapia</Subheading>
              </View>
            </View>
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