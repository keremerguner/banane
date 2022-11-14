import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent:'center'
    },
    header:{
        color: colors.lightBlue,
        padding:8,
        fontSize:80
    }
})