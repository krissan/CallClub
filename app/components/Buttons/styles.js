import { StyleSheet } from "react-native";

import colors from '../../config/colors';
import global from '../../config/global';

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    marginVertical: 10,
    paddingHorizontal: 10,
    fontWeight: "bold",
    width:"100%",
    height:60
  },
  footerButton: {
    width:"100%", 
    height:40, 
    borderRadius:0, 
    marginVertical:0,
    paddingVertical:0
  },
  text: {
    fontSize: 17,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  navbutton: {
    height: '100%',
    paddingHorizontal: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.negative
  },
  iconButton: {
    height:40,
    width:40,
    justifyContent:"center",
    alignItems: "center",
  },
  /*Trapezoid button*/
  pageTab: {
    height: global.tabHeight,
    flex: 1
  },
  triangleCornerRight: {
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderRightWidth: 5,
      borderTopWidth: global.tabHeight,
      borderRightColor: "transparent"
  },
  triangleCornerLeft: {
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderLeftWidth: 5,
      borderBottomWidth: global.tabHeight,
      borderLeftColor: "transparent"
  }
});

export default styles;