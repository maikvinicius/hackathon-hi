import React from 'react';

import { Calendar } from 'react-native-calendars';

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
  Subheading
} from 'react-native-paper';

import background from '../assets/imgs/background.png'

import maik from '../assets/imgs/avatar.jpg'

const ScreenHeight = Dimensions.get("window").height;

const MotoristaFirstAccess = (props) => {

  const { navigation, route } = props;

  return (
    <ScrollView style={{ width: '100%' }}>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={background} style={[{ height: (route.params && route.params.isSecond) ? ScreenHeight : 'auto' }, styles.image]}>
          <View style={styles.boxButton}>
            <Calendar
              onDayPress={(day) => navigation.navigate('MotoristaAgendaSucessoScreen')}
              onDayChange={(day) => navigation.navigate('MotoristaAgendaSucessoScreen')}
              style={styles.calendar} />
            {route.params && route.params.isSecond ? (
              <TouchableHighlight onPress={() => navigation.navigate('MotoristaAgendaSucessoScreen')}>
                <View style={styles.boxAvatar}>
                  <Avatar.Image size={54} source={maik} />
                  <View>
                    <Title style={styles.title}>Dr. Maik Vinícius</Title>
                    <Subheading style={styles.title}>Especialista em Terapia</Subheading>
                  </View>
                </View>
              </TouchableHighlight>
            ) : (
                <View>
                  <TouchableHighlight onPress={() => navigation.navigate('MotoristaAgendaSucessoScreen')}>
                    <View style={styles.boxAvatar}>
                      <Avatar.Image size={54} source={maik} />
                      <View>
                        <Title style={styles.title}>Dr. Maik Vinícius</Title>
                        <Subheading style={styles.title}>Especialista em Terapia</Subheading>
                      </View>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => navigation.navigate('MotoristaAgendaSucessoScreen')}>
                    <View style={styles.boxAvatar}>
                      <Avatar.Image size={54} source={maik} />
                      <View>
                        <Title style={styles.title}>Dr. Maik Vinícius</Title>
                        <Subheading style={styles.title}>Especialista em Terapia</Subheading>
                      </View>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => navigation.navigate('MotoristaAgendaSucessoScreen')}>
                    <View style={styles.boxAvatar}>
                      <Avatar.Image size={54} source={maik} />
                      <View>
                        <Title style={styles.title}>Dr. Maik Vinícius</Title>
                        <Subheading style={styles.title}>Especialista em Terapia</Subheading>
                      </View>
                    </View>
                  </TouchableHighlight>
                </View>
              )}
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