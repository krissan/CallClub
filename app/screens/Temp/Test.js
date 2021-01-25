import React from 'react';
import { Text, View } from 'react-native';

import Card from '../../components/Misc/Card';
import HeaderText from '../../components/AppTexts/HeaderText';
import CallButton from '../../components/CTA/CallButton';
import CBButton from '../../components/CTA/CBButton';
import PtText from '../../components/AppTexts/PtText';
import CardSection from '../../components/Misc/CardSection';
import { ScrollView } from 'react-native-gesture-handler';

import colors from '../../config/colors';



function Issues({cNumber, navigation}) {
    var pageTest = [{id:1},{id:2},{id:3},{id:4},{id:5}];

    return (
        <Card title="Vacant Homes Tax" pages={pageTest} currPage={4}>
            <View style={{flex:1}}>
                {/*Script*/}
                <CardSection style={{flex:1}}>
                    <HeaderText txtColor={colors.text} style={{paddingBottom:10}}>Script(feel free to improvise!):</HeaderText>
                    <ScrollView style={{flex:1}}>
                        <PtText>
                            Hi Councillor Michael Thompson my name is John Doe and I am a constituent in your riding. I'm calling to ask you to vote yes on the implementation of a vacant homes tax similar to Vancouver and use the funds raised towards affordable housing initiatives. <Text style={{fontWeight:'bold'}}>[Suggestion  Speak about your personal experience on how the housing crisis is affecting you]</Text> We will be following this issue closely. You can reach me at. [your number here]
                        </PtText>
                    </ScrollView>
                </CardSection>
                {/* Call Rep Section */}
                <CardSection style={{flex:1}}>
                    <HeaderText txtColor={colors.text} style={{ paddingBottom:5}}>Call Your Councillor</HeaderText>
                    <View style={{height:100, flexDirection: "row"}}>
                        {/*Call Button*/}
                        <CallButton style={{flex:1}} cNumber="416-261-7628"></CallButton>
                        {/*Clipboard Button*/}
                        <CBButton style={{flex:1}} cNumber="416-261-7628"></CBButton>
                    </View>
                </CardSection>
            </View>
        </Card>
    );
}

export default Issues;