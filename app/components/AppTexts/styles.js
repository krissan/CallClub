import { StyleSheet } from "react-native";

import colors from "../../config/colors";
import global from "../../config/global";

const styles = StyleSheet.create({
    text: {
      fontSize: 16,
      fontFamily: global.primFont
    },
    linkText: {
      color: colors.primary
    },
    ptText: {
      flexWrap: "wrap",
      flex: 1,
    },
    pt: {
      marginRight:15, 
      marginTop: 5,
      borderRadius: 25,
      borderWidth: 2.5, 
      height:10, 
      width:10, 
    },
    ptComp: {
      paddingTop: 5,
    },
    header: {
      fontSize:20,
      fontWeight: "bold"
    }
  });

export default styles;