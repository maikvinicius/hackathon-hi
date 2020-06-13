import React from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    ImageBackground
} from 'react-native';
import {
    Title,
    Button
} from 'react-native-paper';

import background from '../assets/imgs/background.png'

const MainScreen = (props) => {

    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={background} style={styles.image}>
                <View style={styles.boxButton}>
                    <Title style={styles.title}>Como você deseja acessar?</Title>
                    <Button
                        icon="truck"
                        mode="outlined"
                        style={styles.button}
                        labelStyle={styles.label}
                        onPress={() => navigation.navigate('LoginScreen')}>
                        Motorista
                    </Button>
                    <Button
                        icon="clipboard-plus"
                        mode="outlined"
                        style={styles.button}
                        labelStyle={styles.label}
                        onPress={() => navigation.navigate('LoginScreen')}>
                        Fisioterapeuta
                    </Button>
                    <Button
                        icon="charity"
                        mode="outlined"
                        style={styles.button}
                        labelStyle={styles.label}
                        onPress={() => navigation.navigate('LoginScreen')}>
                        CCR
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
    }
});

export default MainScreen;