import React from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    ImageBackground
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

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={background} style={styles.image}>
                <View style={styles.boxAvatar}>
                    <View style={{ marginLeft: 20 }}>
                        <Title style={styles.title}>Seja bem-vinda CCR</Title>
                    </View>
                </View>
                <View style={styles.boxButton}>
                    <Button
                        theme={{ colors: { primary: '#FFF' } }}
                        icon="chart-pie"
                        mode="outlined"
                        style={styles.button}
                        labelStyle={styles.label}
                        onPress={() => navigation.navigate('MetricasScreen')}>
                        Métricas
                    </Button>
                    <Button
                        theme={{ colors: { primary: '#FFF' } }}
                        icon="arrow-left"
                        mode="outlined"
                        style={styles.button}
                        labelStyle={styles.label}
                        onPress={() => navigation.navigate('MainScreen')}>
                        Sair
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