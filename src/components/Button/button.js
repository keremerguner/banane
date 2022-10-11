import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './button.style';


const Button = ({ text, onPress, loading }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} disabled={loading} >
            {loading ? (
                <ActivityIndicator color='white' />
            ) : (
                <Text style={styles.title} >{text} </Text>)
            }
        </TouchableOpacity>
    )
}

export default Button;