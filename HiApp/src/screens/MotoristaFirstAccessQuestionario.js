import React from 'react';

import { Calendar } from 'react-native-calendars';

import {
    View,
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Dimensions
} from 'react-native';

import {
    Title,
    TextInput,
    Button,
    Avatar,
    Subheading
} from 'react-native-paper';

import { WebView } from 'react-native-webview';

import background from '../assets/imgs/background.png'
import maik from '../assets/imgs/avatar.jpg'

const ScreenHeight = Dimensions.get("window").height / 2;

const MotoristaFirstAccessQuestionario = (props) => {

    const { navigation } = props;

    return (
        <ScrollView style={{ width: '100%' }}>
            <SafeAreaView style={styles.container}>
                <WebView
                    source={{ uri: 'https://combinativa.typeform.com/to/nMhBwy' }}
                    style={styles.webview} />
                <ImageBackground source={background} style={styles.image}>
                    <Button
                        mode="outlined"
                        style={styles.button}
                        labelStyle={styles.label}
                        onPress={() => navigation.navigate('MotoristaFirstAccess')}>
                        Completei cadastro
                    </Button>
                </ImageBackground>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    webview: {
        width: '100%',
        height: ScreenHeight + 200
    },
    container: {
        flex: 1,
    },
    title: {
        marginLeft: 20,
        color: '#FFF'
    },
    image: {
        paddingTop: 20,
        flex: 1,
        width: '100%',
        height: ScreenHeight,
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
    },
    button: {
        backgroundColor: 'green'
    },
    label: {
        color: '#FFF'
    }
});

export default MotoristaFirstAccessQuestionario;