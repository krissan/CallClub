import React from 'react';
import * as Yup from 'yup';

import Card from '../components/Misc/Card';
import FormSection from '../components/Misc/FormSection';
import AppForm from '../components/Inputs/Form/AppForm'
import AppFormField from '../components/Inputs/Form/AppFormField'
import SubmitButton from '../components/Inputs/Form/SubmitButton'



const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    username: Yup.string().required().label("Username"),
    password: Yup.string().required().min(6).label("Password"),
    confPassword: Yup.string().required().min(6).label("Confirm Password"),
    address: Yup.string().required().label("Address"),
})

function CreateAccount({navigation}) {
    return (
        <Card title="Account Creation">
            <FormSection>
                <AppForm
                    initialValues={{ email: "", username: "", password: "",confPassword: "", address:"" }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        label="Email"
                        maxLength={50}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        name="email"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        label="Username"
                        maxLength={50}
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="username"
                    />
                    <AppFormField
                        label="Password"
                        maxLength={50}
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <AppFormField
                        label="Confirm Password"
                        maxLength={50}
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="confPassword"
                        secureTextEntry
                        textContentType="password"
                    />
                    <AppFormField
                        label="Address"
                        maxLength={50}
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="address"
                    />

                    <SubmitButton title="Create Account" />
                </AppForm>
            </FormSection>
        </Card>
    );
}

export default CreateAccount;