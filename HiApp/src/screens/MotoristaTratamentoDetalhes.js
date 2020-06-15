import React from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Image
} from 'react-native';
import {
    Appbar,
    Card,
    Title,
    Subheading
} from 'react-native-paper';

import { WebView } from 'react-native-webview';

import background from '../assets/imgs/background.png'
import maik from '../assets/imgs/vinicius.jpg'
import exercicio_1 from '../assets/imgs/exercicio_1.png'
import exercicio_2 from '../assets/imgs/exercicio_2.png'
import exercicio_3 from '../assets/imgs/exercicio_3.png'
import exercicio_4 from '../assets/imgs/exercicio_4.png'
import exercicio_5 from '../assets/imgs/exercicio_5.png'
import exercicio_6 from '../assets/imgs/exercicio_6.png'
import exercicio_7 from '../assets/imgs/exercicio_7.png'
import exercicio_8 from '../assets/imgs/exercicio_8.png'
import exercicio_9 from '../assets/imgs/exercicio_9.png'

const MotoristaTratamentoScreen = (props) => {

    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={{ backgroundColor: '#26668B' }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Como se ajustar no volante" />
            </Appbar.Header>
            <ImageBackground source={background} style={styles.image}>
                <View style={styles.boxButton}>
                    <ScrollView style={{ width: '100%' }}>
                        <WebView
                            style={{ width: '100%', height: 200 }}
                            javaScriptEnabled={true}
                            source={{ uri: 'https://www.youtube.com/embed/WOxicVnr8Bk?rel=0&autoplay=0&showinfo=0&controls=0' }}
                        />
                        <Title style={[{ marginTop: 20 }, styles.title]}>Exercícios:</Title>
                        <Image style={styles.treinamento} source={exercicio_1} />
                        <Image style={styles.treinamento} source={exercicio_2} />
                        <Image style={styles.treinamento} source={exercicio_3} />
                        <Image style={styles.treinamento} source={exercicio_4} />
                        <Image style={styles.treinamento} source={exercicio_5} />
                        <Image style={styles.treinamento} source={exercicio_6} />
                        <Image style={styles.treinamento} source={exercicio_7} />
                        <Image style={styles.treinamento} source={exercicio_8} />
                        <Image style={styles.treinamento} source={exercicio_9} />
                    </ScrollView>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    treinamento: {
        width: '100%',
        height: 200,
        marginBottom: 20
    },
    container: {
        flex: 1,
    },
    title: {
        width: '100%',
        color: '#FFF',
        textAlign: 'justify'
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: "cover",
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
        paddingRight: 26,
        paddingTop: 26
    },
    boxAvatar: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    card: {
        marginBottom: 20
    },
});

export default MotoristaTratamentoScreen;