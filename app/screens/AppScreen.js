import React from 'react';
import { View } from 'react-native';

import colors from '../config/colors';
import WelcomeScreen from './WelcomeScreen';
import Navbar from '../navigation/navComponents/Navbar';

function AppScreen() {
    return (
        <>
            <Navbar subNav={true}></Navbar>

            {/*Body of app is scrollable*/}
            <ScrollView contentContainerStyle={{flex: 1, minHeight: global.bodyHeight, backgroundColor:colors.mainBackground}}>
            {/*<CreateAccount></CreateAccount>*/}
            {/*<LoginScreen></LoginScreen>*/}
            {/*<IssueScreen></IssueScreen>*/}
            {/*<Test></Test>*/}
            {/* Pad screen */}
            <View style={[false && {marginTop: 15},{flex:1, paddingHorizontal: global.screenPad}]}>
                <WelcomeScreen></WelcomeScreen>
            </View>
            </ScrollView>
        </>
    );
}

export default AppScreen;