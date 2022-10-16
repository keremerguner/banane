import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Icon from 'react-native-vector-icons/Feather';
import styles from './Login.style';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../../../utils/authErrorMessageParser'

const initialFormValues = {
    usermail: '',
    password: '',
}

const Login = ({ navigation }) => {

    const [loading, setLoading] = useState(false)

    function handleSingUp() {
        navigation.navigate('SignPage')
    }

    async function handleFormSubmit(formValues) {

        try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(
                formValues.usermail,
                formValues.password
            );
            showMessage({
                message: 'Giriş Yapıldı',
                icon: 'success',
                type: "success",
            });
            setLoading(false)
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "danger",
                icon:'danger'
            });
            console.log(error)
            console.log(formValues)
            setLoading(false)
        }
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
                        <Button text='Giriş Yap' theme='primary' onPress={handleSubmit} loading={loading} />
                    </>
                ))
            }
            </Formik>
            <Button text='Kayıt Ol' theme='secondary' onPress={handleSingUp} />
        </SafeAreaView>
    )

}

export default Login;