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
            <View style={[styles.box,{backgroundColor: colors.secondary, flex: 3}]}>
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
                Inform user of elected officials legislative response,  increasing transparency                </PtText>
            </View>
            {/* Create Account */}
            <View style={[styles.centerBox,{backgroundColor: colors.tertiary, flex: 2}]}>
                <StdText style={[styles.subTitle, {color: colors.secondary}]}>
                    GET STARTED!
                </StdText>
                <StdButton title="Create Account" onPress={()=>{console.log("Create Account")}}/>
                <StdText style={{color: colors.secondary}}>
                    or
                </StdText>
            </View>
            {/* Enter Address */}
            <View style={[styles.box, {backgroundColor: colors.secondary, flex: 1}]}>
                <View style={{flex:1, flexDirection: 'row', maxHeight:60, alignItems:"center"}}>
                    {/*Input*/}
                    <View style={{flex:0.8}}>
                        <FancyInput label="Help us find your riding?" onPress={()=>{console.log("hello")}}  icon="location-on" placeholder="Address..." >
                        </FancyInput>
                    </View>
                    {/*Button*/}
                    <View style={{flex: 0.1, height: "100%", flexDirection:"column", justifyContent:"flex-end"}}>
                        <IconButton onPress={()=>{console.log("go")}}>
                            <MaterialIcons name={"arrow-forward"} size={24} color={colors.tertiary} />
                        </IconButton>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default WelcomeScreen;