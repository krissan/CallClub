import { StyleSheet } from "react-native";

import colors from '../../config/colors';

const styles = StyleSheet.create({
    label: {
        color: colors.text,
        fontSize: 16,
        paddingLeft:5
    },
    inline:{
        fontSize:14
    },
    stdField: {
        height:30, 
        borderBottomWidth: 1,
        paddingLeft:5
    },
    stdBox: {
        height:30, 
        borderWidth: 1,
        paddingLeft:5
    },
    picker: {
        marginBottom:global.inputBottomPad,
        height:40, 
        justifyContent:"center", 
        alignItems:"center",
        borderTopWidth:2, borderBottomWidth:2, borderLeftWidth:1, borderRightWidth:1
    }
})

export default styles;