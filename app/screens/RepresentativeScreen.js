import React, { useState,useEffect } from 'react';
import { View,Image,ScrollView } from 'react-native';

import HeaderText from '../components/AppTexts/HeaderText';
import AddressForm from '../components/Inputs/Form/AddressForm';
import Body from '../components/Layout/Body';
import HeaderDivider from '../components/Misc/HeaderDivider';
import LabeledItem from '../components/Misc/LabeledItem';
import LoadPage from '../components/Misc/LoadPage';

import colors from '../config/colors';
import global from '../config/global';
import useAddr from '../provider/address/useAddr';
import useReps from '../provider/rep/useReps';

function RepresentativeScreen({navigation}) {
    const loc = useAddr();
    const gov= useReps();
    const [loading, setLoading] = useState(false);

    //refresh representative data on load
    useEffect(() => {
        setLoading(true);
        gov.reloadReps();
        setLoading(false);
    }, [loc.addr]);

    return(
        <Body>
            <AddressForm />
            {!loading ?
                <>
                    {gov.reps == [] ?
                        <ScrollView style={{padding:global.screenPad}}>
                                {/*Page Header*/}
                                <HeaderText txtColor={colors.secondary}>Representatives</HeaderText>
                                {gov.reps && gov.reps.map((rep, index) => {
                                    return(
                                    //Representative data
                                    <View key={index} style={{flexDirection:"column"}}>
                                        {/*Header Divider*/}
                                        <HeaderDivider>{rep.elected_office + " " + rep.name}</HeaderDivider>
                                        {/*General Information*/}
                                        <View style={{flexDirection:"row"}}>
                                            {/*If rep image exists then display it other wise display default image*/}
                                            <Image
                                                source={(rep.photo != "") ? {uri: rep.photo} : require('../../assets/default_rep.png')} style = {{flex:1, height: 200, marginBottom:10, marginRight:10, resizeMode: 'cover'}}
                                            />
                                            <View style={{flex:1, flexDirection:"column"}}>
                                                <LabeledItem label="District:">{rep.district}</LabeledItem>
                                                <LabeledItem label="Party:">{rep.party}</LabeledItem>
                                                <LabeledItem label="Gender:">{rep.gender}</LabeledItem>
                                            </View>
                                        </View>
                                        {/*Extra Informaiton*/}
                                        <LabeledItem label="Contact Number:">{rep.number}</LabeledItem>
                                        <LabeledItem label="Email:">{rep.email}</LabeledItem>
                                        <LabeledItem label="Website:">{rep.website}</LabeledItem>
                                    </View>);
                                })}
                        </ScrollView>
                    :
                        <View style={{paddingTop: global.inputBottomPad,justifyContent:"center", alignItems:"center"}}>
                            <HeaderText style={{textAlign:"center"}}>Could not load any representatives for this location at this time</HeaderText>
                        </View>
                    }
                </>
                :
                <LoadPage/>
            }
        </Body>
    );
}

export default RepresentativeScreen;