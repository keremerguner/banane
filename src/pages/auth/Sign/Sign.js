import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Icon from 'react-native-vector-icons/Feather';
import styles from './Sign.style';
import { Formik } from 'formik';

const Sign = ({ navigation }) => {

    const initialFormValues = {
        usermail: '',
        password: '',
        repassword: '',
    }

    function handleLogin() {
        navigation.goBack()
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
                        <Input onChangeText={handleChange('repassword')} value={values.repassword} placeholder='sifrenizi tekrar giriniz...' />
                        <Button text='Kayıt Ol' theme='primary' onPress={handleSubmit} />
                    </>
                ))
            }
            </Formik>
            <Button text='Giriş Yap' theme='secondary' onPress={handleLogin} />
        </SafeAreaView>
    )
};

export default Sign;