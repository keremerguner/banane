import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const base_style = StyleSheet.create({
    container: {
        padding: 8,
        margin: 10,
        backgroundColor: colors.lightBlue,
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
            backgroundColor: colors.lightBlue,
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
            borderColor: colors.lightBlue
        },
        title: {
            ...base_style.title,
            color: colors.lightBlue
        }
    })
}
