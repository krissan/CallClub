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
    }
})

export default styles;