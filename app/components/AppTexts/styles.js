import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    text: {
      fontSize: 16,
      fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    linkText: {
      fontSize: 16,
      fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    ptText: {
      fontSize: 16,
      flexWrap: "wrap",
      flex: 1,
      fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
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