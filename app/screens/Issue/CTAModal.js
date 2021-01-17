import React from 'react';
import { View, ScrollView } from 'react-native';
import * as Yup from 'yup';

import AppForm from '../../components/Inputs/Form/AppForm';
import AppFormField from '../../components/Inputs/Form/AppFormField';
import AppFormPicker from '../../components/Inputs/Form/AppFormPicker';
import CTAFormSwitch from './CTAFormSwitch';
import SubmitButton from '../../components/Inputs/Form/SubmitButton';
import StdText from '../../components/AppTexts/StdText';
import FooterButton from '../../components/Buttons/FooterButton';
import Body from '../../components/Layout/Body';

function CTAModal({closeModal}) {
    {/*options for call CTA*/}
    const list = ["petition","call","volunteer"]

    {/*Validation schema CTA Creation Form*/}
    const validationSchema = Yup.object().shape({
        name: Yup.string().required().label("Name"),
        type: Yup.string().required().label("Type"),
        petition: Yup.string().label("Petition").when("type", {
            is: "petition",
            then: Yup.string().required()
          }),
        call: Yup.string().label("Call").when("type", {
            is: "call",
            then: Yup.string().required()
          })
    });
    
    //CTA Creation Form submit process
    const handleSubmit = async ({ name, type, petition, call }) => {
        //start loading
        console.log(name);
        console.log(type);
        if(type=="petition"){
            console.log(petition);
        }
        else if (type="call"){
            console.log(call);
        }
        //end loading
    };

    {/*Validation schema CTA Search Form*/}
    const validationSchemaSearch = Yup.object().shape({
        query: Yup.string().required().label("query")
    });

    return (
        <View style={{flexDirection:"column", flex: 1}}>
            <Body style={{flex:1}}>
                <ScrollView>
                    {/*Search Form*/}
                    <AppForm
                        initialValues={{ query:"" }}
                        onSubmit={(values) => console.log(values)}
                        validationSchema={validationSchemaSearch}>
                        <AppFormField
                            label="Search CTA"
                            maxLength={50}
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="query"
                            />
                        {/*Submit Search Query*/}
                        <SubmitButton title="Search for CTA"/>
                    </AppForm>

                    {/*Divider*/}
                    <View style={{paddingVertical:20, alignItems:"center"}}>
                        <StdText>OR</StdText>
                    </View>

                    {/*Create CTA Form*/}
                    <AppForm
                        initialValues={{ name:"", type:list[0], petition:"", call:"Councillor" }}
                        onSubmit={(values) => handleSubmit(values)}
                        validationSchema={validationSchema}
                    >
                        <StdText>Create CTA</StdText>
                        {/*CTA Creation Form Fields*/}
                        <AppFormField
                            label="Name"
                            maxLength={50}
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="name"
                            />
                        <AppFormPicker
                            pickerList={list}
                            name="type"
                            label="Call to Action Type"
                        />
                        {/*Content dependent on type of cta being create*/}
                        <CTAFormSwitch></CTAFormSwitch>
                        {/*Submit CTA Creation*/}
                        <SubmitButton title="Create Call To Action"/>
                    </AppForm>
                </ScrollView>
            </Body>
            {/*Close Modal*/}
            <FooterButton title="Close Modal" onPress={closeModal}></FooterButton>
        </View>
    );
}

export default CTAModal;