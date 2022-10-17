import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightBlue,
        padding: 5,
        marginHorizontal: 5,
        marginVertical: 8,
        borderRadius: 10,
        elevation: 8,
        shadowColor: "black"
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    user: {
        fontSize: 13,
        color: 'white',
    },
    date: {
        fontSize: 14,
        color: 'white',
        fontStyle: 'italic',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 12
    },
});