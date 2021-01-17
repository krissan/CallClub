import React from 'react';
import { useFormikContext } from 'formik';

import AppFormField from '../../components/Inputs/Form/AppFormField';
import AppFormPicker from '../../components/Inputs/Form/AppFormPicker';
import AppFormBox from '../../components/Inputs/Form/AppFormBox';

function CTAFormSwitch() {
    {/*CTA From context*/}
    const { values } = useFormikContext();
    {/*options for call type  CTA*/}
    const list = ["Councillor","Mayor","Trustee"]

    const renderSwitch = () => {

        switch(values.type) {
            case "petition":
                return <AppFormBox
                                label="Petition"
                                maxLength={50}
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={{height:100}}
                                name="petition"/>
            case "call":
                return <AppFormPicker
                            pickerList={list}
                            name="call"
                            label="Call to Action Type"
                        />
            default:
                return <AppFormField
                                label=""
                                maxLength={50}
                                autoCapitalize="none"
                                autoCorrect={false}
                                name="petition"/>
        }
    }
    

    
    return (
        <>
        {renderSwitch()}
        </>
    );
}

export default CTAFormSwitch;