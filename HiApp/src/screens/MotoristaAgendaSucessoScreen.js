import React from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    TouchableHighlight
} from 'react-native';
import {
    Title,
    Button,
    Avatar,
    Subheading
} from 'react-native-paper';

import background from '../assets/imgs/background.png'
import maik from '../assets/imgs/avatar.jpg'

const MotoristaHomeScreen = (props) => {

    const { navigation } = props;

    const today = new Date();

    function makeTwoDigits(time) {
        const timeString = `${time}`;
        if (timeString.length === 2) return time
        return `0${time}`
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={background} style={styles.image}>
                <TouchableHighlight onPress={() => navigation.navigate('MotoristaAgendaSucessoScreen')}>
                    <View style={styles.boxAvatar}>
                        <Avatar.Image size={54} source={maik} />
                        <View>
                            <Title style={styles.title}>Dr. Maik Vinícius</Title>
                            <Subheading style={styles.title}>Especialista em Terapia</Subheading>
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={styles.boxButton}>
                    <Title style={styles.title}>Parabéns!</Title>
                    <Subheading style={styles.title}>Agendado com sucesso!</Subheading>
                    <Subheading style={[{ marginBottom: 20 }, styles.title]}>{`${makeTwoDigits(today.getDate())}/${makeTwoDigits(parseInt(today.getMonth() + 1))}/${today.getFullYear()} ${makeTwoDigits(today.getHours())}:${makeTwoDigits(today.getMinutes())}`}</Subheading>
                    <Button
                        icon="contacts"
                        mode="outlined"
                        style={styles.button}
                        labelStyle={styles.label}
                        onPress={() => navigation.navigate('MotoristaTeleAtendimentoScreen')}>
                        Falar com Fisioterapeuta
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