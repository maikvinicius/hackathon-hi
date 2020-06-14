import React from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    ScrollView
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
import treinamento from '../assets/imgs/treinamento.jpg'

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
                        <Title style={styles.title}>Como se ajustar no volante</Title>
                        <Subheading style={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ligula quis mauris imperdiet condimentum. Ut molestie erat eros, quis volutpat lectus laoreet in. Duis magna metus, porttitor sit amet leo viverra, rutrum suscipit velit. Praesent nec varius orci. Nulla a lorem commodo, venenatis nunc a, hendrerit nisi. Sed lobortis augue blandit risus commodo pretium. Pellentesque eget bibendum lectus, ac varius urna. In varius lorem eu nulla euismod vehicula. Praesent imperdiet turpis in arcu egestas, non aliquam sapien sagittis. Mauris accumsan elementum ipsum vel maximus. Sed non est lectus. In hac habitasse platea dictumst. Donec euismod elit et velit lobortis fringilla. Sed bibendum, lacus nec convallis dignissim, ante lacus faucibus sem, sed mollis leo purus ac nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subheading>
                    </ScrollView>
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