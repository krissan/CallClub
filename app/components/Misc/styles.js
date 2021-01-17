
import { StyleSheet } from "react-native";
import colors from '../../config/colors';
import global from '../../config/global';

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.tertiary, 
        /*borderRadius: 20,*/
        paddingHorizontal: global.screenPad,
    }
})

export default styles;