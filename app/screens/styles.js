import { StyleSheet } from "react-native";
import global from '../config/global';

const styles = StyleSheet.create({
    box: {
      paddingHorizontal: global.screenPad,
      justifyContent: "center"
    },
    subTitle: {
      fontWeight:"bold"
    },
    centerBox: {
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: global.screenPad
    }
  });

export default styles;