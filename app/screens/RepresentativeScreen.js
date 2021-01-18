import React, { useState,useEffect } from 'react';
import { View,Image,ScrollView } from 'react-native';

import StdText from '../components/AppTexts/StdText';

import global from '../config/global';
import useAuth from '../provider/auth/useAuth';
import useReps from '../provider/rep/useReps';

function RepresentativeScreen({navigation}) {
    const auth = useAuth();
    const gov= useReps();

    //refresh representative data on load
    useEffect(() => {
        gov.reloadReps();
    }, [auth.user.address]);

    return(
        <ScrollView style={{padding:global.screenPad}}>
            {/*Page Header*/}
            <View><StdText>Representatives</StdText></View>
            {gov.reps && gov.reps.map((rep, index) => {
                return(
                //Representative data
                <View key={index} style={{borderBottomWidth:5, paddingVertical:20}}>
                    {/*If rep image exists then display it other wise display default image*/}
                    <Image
                        style={{height:60,width:60}}
                        source={(rep.photo != "") ? {uri: rep.photo} : require('../../assets/default_rep.png')} style = {{height: 200, width: 250, resizeMode : 'stretch'}}
                    />
                    <StdText>{rep.name}</StdText>
                    <StdText>{rep.district}</StdText>
                    <StdText>{rep.party}</StdText>
                    <StdText>{rep.gender}</StdText>
                    <StdText>{rep.number}</StdText>
                    <StdText>{rep.email}</StdText>
                    <StdText>{rep.website}</StdText>
                </View>);
            })}
        </ScrollView>
    );
}

export default RepresentativeScreen;