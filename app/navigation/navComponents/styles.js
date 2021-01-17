import { StyleSheet } from "react-native";

import colors from '../../config/colors';
import global from '../../config/global';

const styles = StyleSheet.create({
    nav: {
        backgroundColor: colors.secondary,
        color: colors.tertiary,
        height: global.navHeight,
        justifyContent:"space-between",
        flexDirection:"row",
    },
    section:{
        flex: 1, 
    },
    navStart: {
        alignItems:"flex-start",
    },
    navMid: {
        alignItems:"center",
        justifyContent:"center",
        flex: 1
    },
    navEnd: {
        alignItems:"flex-end"
    },
    navTitle: {
        color: colors.tertiary, 
        fontWeight: "normal"
    },
    navBtn: {
        paddingHorizontal: 10
    }
})

export default styles;