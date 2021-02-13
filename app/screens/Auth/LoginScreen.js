import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';

import Card from '../../components/Misc/Card';
import AppForm from '../../components/Inputs/Form/AppForm'
import AppFormField from '../../components/Inputs/Form/AppFormField'
import SubmitButton from '../../components/Inputs/Form/SubmitButton'
import FormSection from '../../components/Misc/FormSection';
import StdText from '../../components/AppTexts/StdText';
import LinkText from '../../components/AppTexts/LinkText';

import useAuth from '../../provider/auth/useAuth';
import routes from '../../navigation/routes';
import useAddr from '../../provider/address/useAddr';

//Login form validation schema
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(7).label("Password"),
});

function LoginScreen({navigation}) {
    const auth = useAuth();
    const loc = useAddr();

    const [loading, setLoading] = useState(false);

    //Form submit process
    const handleSubmit = async ({ email, password }) => {
        setLoading(true);
        await auth.logIn(email, password);
        await loc.setAddress(auth.user.attributes.address);
        setLoading(false);
    };

     //Automatically navigate to issues if already logged in
    useEffect(() => {
        auth.user && navigation.navigate(routes.Issues) 
    }, [auth.user])

    return (
        <Card title="Login">
            <FormSection>
                <AppForm
                    initialValues={{ email: "hadim23937@yutongdt.com", password: "Hello123" }}
                    onSubmit={(values) => handleSubmit(values)}
                    validationSchema={validationSchema}
                >
                    {/*Form Fields*/}
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

                    {/*Form Submit*/}
                    <SubmitButton title="Login" loading={loading} />
                </AppForm>
                <View style={{flexDirection:"column", alignItems:"center", padding:5}}>
                    <StdText>Dont have an account? </StdText><LinkText onPress={()=>{navigation.navigate(routes.Register)}}>Create Account Here</LinkText>
                </View>
            </FormSection>
        </Card>
    );
}

export default LoginScreen;