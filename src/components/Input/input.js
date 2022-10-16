import React from "react";
import { TextInput, Text, View } from 'react-native'
import styles from './input.style';


const Input = ({ placeholder, onChangeText, value, isSecure }) => {

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText} value={value} secureTextEntry={isSecure} autoCapitalize='none' />
        </View>
    )
}

export default Input;