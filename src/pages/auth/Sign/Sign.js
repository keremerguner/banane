import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Icon from 'react-native-vector-icons/Feather';
import styles from './Sign.style';
import { Formik } from 'formik';
import { showMessage } from "react-native-flash-message";
import auth from '@react-native-firebase/auth';
import authErrorMessageParser from '../../../utils/authErrorMessageParser'

const Sign = ({ navigation }) => {

    const [loading, setLoading] = useState(false)

    const initialFormValues = {
        usermail: '',
        password: '',
        repassword: '',
    }

    function handleLogin() {
        navigation.goBack()
    }

    async function handleFormSubmit(formValues) {

        if (formValues.password !== formValues.repassword) {
            showMessage({
                message: 'Şifreler uyuşmuyor',
                type: "danger",
            });
            return;
        }

        try {
           await auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.password
            )
            setLoading(false)

            showMessage({
                message: 'Kullanıcı oluşturuldu',
                type: "success",
            });
            navigation.navigate('LoginPage')

        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "danger",
            });
            setLoading(false)
        }
        console.log(formValues)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header} >
                <Text>Bana ne </Text>
                <Icon name="feather" size={styles.header.fontSize} color="#5DADE2" />
            </Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>{
                (({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input onChangeText={handleChange('usermail')} value={values.usermail} placeholder='e-postanızı giriniz...' />
                        <Input onChangeText={handleChange('password')} value={values.password} placeholder='sifrenizi giriniz...' isSecure />
                        <Input onChangeText={handleChange('repassword')} value={values.repassword} placeholder='sifrenizi tekrar giriniz...' isSecure />
                        <Button text='Kayıt Ol' theme='primary' onPress={handleSubmit} loading={loading} />
                    </>
                ))
            }
            </Formik>
            <Button text='Giriş Yap' theme='secondary' onPress={handleLogin} />
        </SafeAreaView>
    )
};

export default Sign;