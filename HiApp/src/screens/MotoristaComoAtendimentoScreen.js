import React from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    Linking
} from 'react-native';
import {
    Title,
    Button,
    Avatar,
    Subheading
} from 'react-native-paper';

import background from '../assets/imgs/background.png'
import maik from '../assets/imgs/vinicius.jpg'

const MotoristaHomeScreen = (props) => {

    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={background} style={styles.image}>
                <View style={styles.boxButton}>
                    <Button
                        icon="whatsapp"
                        mode="outlined"
                        style={styles.button}
                        labelStyle={styles.label}
                        onPress={() => Linking.openURL('https://wa.me/5512988333250?text=Ol%C3%A1%20gostaria%20de%20conversar%20com%20voc%C3%AA!')}>
                        Conversar via chat
                    </Button>
                    <Button
                        icon="contacts"
                        mode="outlined"
                        style={styles.button}
                        labelStyle={styles.label}
                        onPress={() => navigation.navigate('MotoristaFirstAccess', { isSecond: true })}>
                        Agendar Tele Atendimento
                    </Button>
                    <Button
                        icon="arrow-left"
                        mode="outlined"
                        style={styles.button}
                        labelStyle={styles.label}
                        onPress={() => navigation.goBack()}>
                        Voltar
                    </Button>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: '#FFF',
        textAlign: 'center'
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: "cover",
        justifyContent: "center",
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '100%',
        height: 50,
        marginBottom: 20,
        borderColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: '#FFF'
    },
    boxButton: {
        width: '100%',
        paddingLeft: 26,
        paddingRight: 26
    },
    boxAvatar: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default MotoristaHomeScreen;