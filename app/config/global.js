import { Platform, StatusBar, Dimensions } from 'react-native';


export default {
    navPad: 10,
    navHeight: 50,
    tabHeight: 12,
    statusBarHeight: StatusBar.currentHeight,
    screenHeight: Dimensions.get('window').height,
    screenPad: 30,
    bodyHeight: Dimensions.get('window').height - StatusBar.currentHeight,
    inputBottomHeight:20,
    inputBottomPad:5,
    primFont: Platform.OS === "android" ? "Roboto" : "Avenir"
}