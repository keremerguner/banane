import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Icon from 'react-native-vector-icons/Feather';
import styles from './Login.style';

const Login = ({ navigation }) => {


    function handleSubmit() {
        navigation.navigate('SignPage')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header} >
                <Text>Bana ne </Text>
                <Icon name="feather" size={styles.header.fontSize} color="#5DADE2" />
            </Text>
            <Input placeholder='e-postanızı giriniz...' />
            <Input placeholder='sifrenizi giriniz...' />
            <Button text='Giriş Yap' theme='primary' />
            <Button text='Kayıt Ol' theme='secondary' onPress={handleSubmit} />
        </SafeAreaView>
    )

}

export default Login;