import React from 'react';
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
} from 'react-native-paper';

import background from '../assets/imgs/background.png'

const theme = {
    colors: {
        text: "#FFF",
        background: '#FFF',
        primary: '#FFF',
        placeholder: '#FFF',
    }
}

const LoginScreen = (props) => {

    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={background} style={styles.image}>
                <View style={styles.boxButton}>
                    <ScrollView>
                        <TextInput
                            label='CPF'
                            value="123.123.123-12"
                            mode="flat"
                            style={styles.input}
                            theme={theme}
                        />
                        <TextInput
                            label='Senha'
                            value="123456"
                            mode="flat"
                            style={styles.input}
                            theme={theme}
                            secureTextEntry={true}
                        />
                        <Button
                            theme={{ colors: { primary: '#FFF' } }}
                            mode="outlined"
                            style={styles.button}
                            labelStyle={styles.label}
                            onPress={() => navigation.navigate('CCRHomeScreen')}>
                            Acessar
                        </Button>

                        <Button
                            theme={{ colors: { primary: '#FFF' } }}
                            icon="arrow-left"
                            mode="text"
                            style={[{ marginTop: 20 }, styles.button]}
                            labelStyle={styles.label}
                            onPress={() => navigation.goBack()}>
                            Voltar aos acessos
                        </Button>
                    </ScrollView>
                </View>
            </ImageBackground>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: '#FFF',
        marginBottom: 20,
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
    boxButton: {
        width: '100%',
        paddingLeft: 26,
        paddingRight: 26
    },
    input: {
        backgroundColor: 'transparent',
        borderColor: '#FFF'
    },
    button: {
        color: '#FFF',
        backgroundColor: 'transparent',
        borderColor: '#FFF'
    },
    label: {
        color: '#FFF'
    }
});

export default LoginScreen;