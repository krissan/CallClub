import React, {useState} from 'react';
import { View, ScrollView } from 'react-native';
import * as Yup from 'yup';
import moment from 'moment';

import AppForm from '../../components/Inputs/Form/AppForm';
import AppFormField from '../../components/Inputs/Form/AppFormField';
import AppFormPicker from '../../components/Inputs/Form/AppFormPicker';
import CTAFormSwitch from './CTAFormSwitch';
import SubmitButton from '../../components/Inputs/Form/SubmitButton';
import StdText from '../../components/AppTexts/StdText';
import FooterButton from '../../components/Buttons/FooterButton';
import Body from '../../components/Layout/Body';
import CTASearch from '../../components/CTA/CTASearch';
import HeaderText from '../../components/AppTexts/HeaderText';
import AppFormDatePicker from '../../components/Inputs/Form/AppFormDatePicker';
import AppFormValues from '../../components/Inputs/Form/AppFormValues';

import colors from '../../config/colors';
import useCta from '../../provider/cta';

function CTAModal({closeModal}) {
    const [loading, setLoading] = useState(false);
    const cta = useCta();

    {/*options for call CTA*/}
    const list = ["petition","call","volunteer"]

    {/*Validation schema CTA Creation Form*/}
    const validationSchema = Yup.object().shape({
        name: Yup.string().required().label("Name"),
        type: Yup.string().required().label("Type"),
        deadline: Yup.date().required().label("Dead Line"),
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
    const handleSubmit = async ({ name, type, petition, call, deadline }) => {
        //start loading
        setLoading(true);

        //create cta depending on type
        if(type=="petition"){
            cta.createCta(name, type, petition, deadline)
        }
        else if (type="call"){
            cta.createCta(name, type, call, deadline)
        }

        //end loading
        setLoading(false);
    };

    return (
        <View style={{flexDirection:"column", flex: 1}}>
            <Body style={{flex:1}}>
                {/*Search Form*/}
                <HeaderText style={{paddingBottom:10}} txtColor={colors.secondary}>Search CTA</HeaderText>
                <CTASearch handleSearch={closeModal} />
                
                <ScrollView>
                    {/*Divider*/}
                    <View style={{paddingVertical:10, alignItems:"center"}}>
                        <StdText>OR</StdText>
                    </View>

                    {/*Create CTA Form*/}
                    <AppForm
                        initialValues={{ name:"", type:"", petition:"", call:"Councillor", deadline: moment().format('YYYY-MM-DD') }}
                        onSubmit={(values) => handleSubmit(values)}
                        validationSchema={validationSchema}
                    >
                        <HeaderText style={{paddingBottom:10}} txtColor={colors.secondary}>Create CTA</HeaderText>
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

                        <AppFormDatePicker
                            name="deadline"
                            label="Dead Line Date"
                        />

                        <AppFormValues></AppFormValues>
                        
                        {/*Submit CTA Creation*/}
                        <SubmitButton title="Create Call To Action" loading={loading} />
                    </AppForm>
                </ScrollView>
            </Body>
            {/*Close Modal*/}
            <FooterButton title="Close Modal" onPress={closeModal}></FooterButton>
        </View>
    );
}

export default CTAModal;