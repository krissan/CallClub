import React from 'react';
import { Text, View} from 'react-native';

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'

import StdText from '../../components/AppTexts/StdText';
import LinkText from '../../components/AppTexts/LinkText';
import NavButton from './NavButton';
import RndInput from '../../components/Inputs/RndInput';

import colors from '../../config/colors';
import global from '../../config/global';
import styles from './styles';



function Navbar({subNav=false, navigation}) {
    let auth = false
    let title = "welcome"

    return (
        <View>
            {/*Top Nav*/}
            <View style={styles.nav}>
                {/*3-Bar Menu*/}
                <View style={[styles.navStart]}>
                    <NavButton onPress={()=>{navigation.openDrawer() ,console.log(1)}}>
                        <MaterialIcons name="menu" size={32} color={colors.tertiary} style={[styles.navBtn, {fontWeight: "normal"}]} />
                    </NavButton>                    
                </View>

                {/*Screen Title*/}
                <View style={[styles.navMid]}>
                    <StdText  style={[styles.navTitle]}>{title}</StdText>
                </View>

                {/*If auth exists display user menu else login sign up links*/}
                {auth ?
                    <View style={styles.navEnd}>
                        <NavButton onPress={()=>{console.log(1)}}>
                            <FontAwesome5 name="user-circle" size={32} color={colors.tertiary}  style={styles.navBtn} />
                        </NavButton>
                    </View>
                    :   
                    <View style={styles.navEnd,{flexDirection:"row", alignItems: 'center', marginRight: global.screenPad}}>
                        <LinkText style={{ color: colors.tertiary }}>login</LinkText>
                        <Text style={{paddingHorizontal:4, color: colors.tertiary}}>|</Text>
                        <LinkText style={{ color: colors.tertiary }}>signup</LinkText>
                    </View>
                }
            </View>
            {/*Secondary Nav*/}
            {subNav && <View style={[styles.nav, {backgroundColor: colors.primary, alignItems:"center"}]}>
                {/*Page Links*/}
                <View style={[styles.navStart]}>
                    <LinkText style={{color: colors.secondary, paddingLeft:global.screenPad, fontWeight:"bold"}}>Municipal</LinkText>
                </View>
                {/*Address input*/}
                <View style={styles.navEnd}>
                    <View style={{paddingRight: global.screenPad}}>
                        <RndInput onPress={()=>console.log("location input")} icon="location-on" placeholder="Address" />
                    </View>
                </View>
            </View>}
        </View>
    );
}

export default Navbar;