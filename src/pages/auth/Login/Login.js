import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Input from '../../../components/Input'
import Button from '../../../components/Button'

const Login = (props) => (
    <SafeAreaView>
        {/* <Button title='Press' onPress={() => props.navigation.navigate('SignPage')} */}
        <Input placeholder='e-posta giriniz...' />
        <Input placeholder='sifre giriniz...' />
        <Button text='Giriş Yap' />
        <Button text='Kayıt Ol' />
    </SafeAreaView>
);

export default Login;
