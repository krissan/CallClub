import React, { useState } from 'react';
import { Text, View } from 'react-native';

import StdText from '../components/AppTexts/StdText';
import StdButton from '../components/Buttons/StdButton';

import useAuth from '../auth/useAuth';
import global from '../config/global';


function RepresentativeScreen({navigation}) {
    const [reps, setReps] = useState([{
        photo:"imgurl",
        name: "John Tory", 
        district:"Toronto", 
        party:"Conservative", 
        gender:"Male",
        number:"555-555-5555", 
        email:"john.tory@toronto.ca", 
        website:"Toronto.ca",
    }]);

    return(
        <View style={{padding:global.screenPad}}>
            <View><StdText>Hello</StdText></View>
            {reps.map((rep, index) => {
                return(
                <View key={index}>
                    <StdText>hello</StdText>
                    <StdText>{rep.photo}</StdText>
                    <StdText>{rep.name}</StdText>
                    <StdText>{rep.district}</StdText>
                    <StdText>{rep.party}</StdText>
                    <StdText>{rep.gender}</StdText>
                    <StdText>{rep.number}</StdText>
                    <StdText>{rep.email}</StdText>
                    <StdText>{rep.website}</StdText>
                </View>);
            })}
        </View>
    );
}

export default RepresentativeScreen;