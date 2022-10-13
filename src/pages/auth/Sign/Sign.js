import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Icon from 'react-native-vector-icons/Feather';
import styles from './Sign.style';

const Sign = ({ navigation }) => {

    function handleLogin() {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header} >
                <Text>Bana ne </Text>
                <Icon name="feather" size={styles.header.fontSize} color="#5DADE2" /> 
            </Text>
            <Input placeholder='e-postanızı giriniz...' />
            <Input placeholder='sifrenizi giriniz...' />
            <Input placeholder='sifrenizi tekrar giriniz...' />
            <Button text='Kayıt Ol' theme='primary' />
            <Button text='Giriş Yap' theme='secondary' onPress={handleLogin} />
        </SafeAreaView>
    )
};

export default Sign;