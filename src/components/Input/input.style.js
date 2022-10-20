import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 5,
        paddingHorizontal: 8,
        margin: 10,
        backgroundColor: '#D5D8DC',
        borderRadius: 5,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        padding: Platform.OS === 'android' ? 0 : 6,
    },
    icon: {
        justifyContent: 'center',
        alignSelf: 'center'
    }
})