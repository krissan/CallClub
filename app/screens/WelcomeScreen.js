import React from 'react';
import { ImageBackground, TextInput, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import StdText from '../components/AppTexts/StdText';
import StdButton from '../components/Buttons/StdButton';
import PtText from '../components/AppTexts/PtText';
import FancyInput from '../components/Inputs/FancyInput';
import IconButton from '../components/Buttons/IconButton';

import colors from '../config/colors';
import styles from './styles';
import LinkText from '../components/AppTexts/LinkText';
import FancyAddressForm from '../components/Inputs/Form/FancyAddressForm';
import routes from '../navigation/routes';

function WelcomeScreen({navigation}) {
    return (
        <View style={[{flex:1}]}>
            {/* What */}
            <View style={[styles.box,{backgroundColor: colors.tertiary, flex: 1}]}>
                <StdText style={[styles.subTitle, {color: colors.secondary}]}>
                    Stay informed on legislation affecting your community and act to keep your government accountable.
                </StdText>
            </View>
            {/* How */}
            <View style={[styles.box,{backgroundColor: colors.secondary, flex: 2}]}>
                <StdText style={[styles.subTitle, {color: colors.tertiary}]}>
                    How?
                </StdText>
                <PtText txtColor={colors.tertiary} ptColor={colors.tertiary}>
                    Key details of this civic issue are packaged in bite sized summaries to inform users
                </PtText>
                <PtText txtColor={colors.tertiary} ptColor={colors.tertiary}>
                    Actions are facilitated conveniently through application to make users voice heard
                </PtText>
                <PtText txtColor={colors.tertiary} ptColor={colors.tertiary}>
                    Inform user of elected officials legislative response,  increasing transparency
                </PtText>
            </View>
            {/* Create Account or login */}
            <View style={[styles.centerBox,{backgroundColor: colors.tertiary, flex: 2}]}>
                <StdText style={[styles.subTitle, {color: colors.secondary}]}>
                    GET STARTED!
                </StdText>
                <StdButton title="Create Account" onPress={()=>{navigation.navigate(routes.Register)}}/>
                <View style={{flexDirection:"column", alignItems:"center", padding:5}}><StdText>Already have an account? </StdText><LinkText onPress={()=>{navigation.navigate(routes.Login)}}>Login Here</LinkText></View>
                <StdText style={{color: colors.secondary}}>
                    or
                </StdText>
            </View>
            {/* Enter Address */}
            <FancyAddressForm onSubmit={({address})=>{console.log(Address);navigation.navigate(routes.Issues)}}></FancyAddressForm>
        </View>
    );
}

export default WelcomeScreen;