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
    footer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center"
    },
    dislike_container:{
        flexDirection:'row',
        backgroundColor:"white",
        padding:5,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center"
      },
    dislike_count_container:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.lightBlue,
        borderRadius:25,
        padding:3,
    },
    dislike_count_text:{
        color:"white",
        fontWeight:"bold",
    },
    dislike_text:{
        color:colors.lightBlue,
        fontWeight:"bold"
    },
});