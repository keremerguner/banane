import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Icon from 'react-native-vector-icons/Feather';
import styles from './Login.style';
import { Formik } from 'formik';

const Login = ({ navigation }) => {

    const initialFormValues = {
        usermail: '',
        password: '',
    }

    function handleSingUp() {
        navigation.navigate('SignPage')
    }

    function handleFormSubmit(formValues) {
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
                        <Input onChangeText={handleChange('password')} value={values.password} placeholder='sifrenizi giriniz...' />
                        <Button text='Giriş Yap' theme='primary' onPress={handleSubmit} />
                    </>
                ))
            }
            </Formik>
            <Button text='Kayıt Ol' theme='secondary' onPress={handleSingUp} />
        </SafeAreaView>
    )

}

export default Login;