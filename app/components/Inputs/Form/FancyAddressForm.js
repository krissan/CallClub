import React from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';

import SubmitIconButton from '../../Inputs/Form/SubmitIconButton';
import AppForm from './AppForm';
import AppFormField from './AppFormField';

import useAuth from '../../../auth/useAuth';


const validationSchema = Yup.object().shape({
    address: Yup.string().required().label("Address")
});

function FancyAddressForm({ ...otherProps }) {
    const auth = useAuth();

    const submit = ({ address }) => {
        console.log(address);
    };

    return (
        <AppForm
            initialValues={{ address: auth.user.attributes.address }}
            onSubmit={(values) => {  submit(values);}}
            validationSchema={validationSchema}
        >
            <View style={{flexDirection:"row", alignItems:"flex-end"}}>
                {/*Input*/}
                <AppFormField
                    label="Address"
                    maxLength={50}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    style={{flex:1}}
                    name="address"
                >
                </AppFormField>
                {/*Button*/}
                <SubmitIconButton/>
            </View>
        </AppForm>
    );
}

export default FancyAddressForm;