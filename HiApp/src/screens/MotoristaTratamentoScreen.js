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
} from 'react-native-paper';

import background from '../assets/imgs/background.png'
import maik from '../assets/imgs/vinicius.jpg'
import treinamento from '../assets/imgs/treinamento.jpg'

const MotoristaTratamentoScreen = (props) => {

    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={{ backgroundColor: '#26668B' }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Meus tratamentos" />
            </Appbar.Header>
            <ImageBackground source={background} style={styles.image}>
                <View style={styles.boxButton}>
                    <ScrollView style={{ width: '100%' }}>
                        <Card style={styles.card} onPress={() => navigation.navigate('MotoristaTratamentoDetalhes')}>
                            <Card.Cover source={treinamento} />
                            <Card.Title title="Como se ajustar no volante" subtitle="Super dicas com nosso fisioterapeuta Dr. Maik Vinicius" />
                        </Card>
                        <Card style={styles.card} onPress={() => navigation.navigate('MotoristaTratamentoDetalhes')}>
                            <Card.Cover source={treinamento} />
                            <Card.Title title="Como se ajustar no volante" subtitle="Super dicas com nosso fisioterapeuta Dr. Maik Vinicius" />
                        </Card>
                        <Card style={styles.card} onPress={() => navigation.navigate('MotoristaTratamentoDetalhes')}>
                            <Card.Cover source={treinamento} />
                            <Card.Title title="Como se ajustar no volante" subtitle="Super dicas com nosso fisioterapeuta Dr. Maik Vinicius" />
                        </Card>
                        <Card style={styles.card} onPress={() => navigation.navigate('MotoristaTratamentoDetalhes')}>
                            <Card.Cover source={treinamento} />
                            <Card.Title title="Como se ajustar no volante" subtitle="Super dicas com nosso fisioterapeuta Dr. Maik Vinicius" />
                        </Card>
                        <Card style={styles.card} onPress={() => navigation.navigate('MotoristaTratamentoDetalhes')}>
                            <Card.Cover source={treinamento} />
                            <Card.Title title="Como se ajustar no volante" subtitle="Super dicas com nosso fisioterapeuta Dr. Maik Vinicius" />
                        </Card>
                        <Card style={styles.card} onPress={() => navigation.navigate('MotoristaTratamentoDetalhes')}>
                            <Card.Cover source={treinamento} />
                            <Card.Title title="Como se ajustar no volante" subtitle="Super dicas com nosso fisioterapeuta Dr. Maik Vinicius" />
                        </Card>
                        <Card style={styles.card} onPress={() => navigation.navigate('MotoristaTratamentoDetalhes')}>
                            <Card.Cover source={treinamento} />
                            <Card.Title title="Como se ajustar no volante" subtitle="Super dicas com nosso fisioterapeuta Dr. Maik Vinicius" />
                        </Card>
                        <Card style={styles.card} onPress={() => navigation.navigate('MotoristaTratamentoDetalhes')}>
                            <Card.Cover source={treinamento} />
                            <Card.Title title="Como se ajustar no volante" subtitle="Super dicas com nosso fisioterapeuta Dr. Maik Vinicius" />
                        </Card>
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
        paddingRight: 26,
        paddingTop: 46
    },
    boxAvatar: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    card: {
        marginBottom: 20
    }
});

export default MotoristaTratamentoScreen;