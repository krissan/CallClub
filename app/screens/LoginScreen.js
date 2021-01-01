import React from 'react';
import { ImageBackground, TextInput, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { Formik } from 'formik'
import * as Yup from 'yup';

import Card from '../components/Misc/Card';
import AppForm from '../components/Inputs/Form/AppForm'
import AppFormField from '../components/Inputs/Form/AppFormField'
import SubmitButton from '../components/Inputs/Form/SubmitButton'
import FormSection from '../components/Misc/FormSection';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(7).label("Password"),
  });

//add style prop to all components so styles are passed down the chain

function LoginScreen({navigation}) {
    var pageTest = [{id:1},{id:2},{id:3}];

    return (
        <Card title="Login">
            <FormSection>
                <AppForm
                    initialValues={{ email: "", password: "" }}
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
                        label="Password"
                        maxLength={50}
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="Login" />
                </AppForm>
            </FormSection>
        </Card>
    );
}

export default LoginScreen;