import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        padding: 8,
        margin: 10,
        backgroundColor: '#2286c3',
        borderRadius: 5,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white'
    }
})

export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#2286c3',
            alignItems: 'center'
        },
        title: {
            ...base_style.title,
            color: 'white'
        }
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#2286c3'
        },
        title: {
            ...base_style.title,
            color: '#2286c3'
        }
    })
}
