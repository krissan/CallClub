import { Platform, StatusBar, Dimensions } from 'react-native';


export default {
    navPad: 10,
    screenPad: 30,
    statusBarHeight: StatusBar.currentHeight,
    screenHeight: Dimensions.get('window').height,
    bodyHeight: Dimensions.get('window').height - StatusBar.currentHeight - 60,
    navHeight: 60,
    tabHeight: 12
}