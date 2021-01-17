import React, {useEffect} from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';

import Card from '../../components/Misc/Card';
import FormSection from '../../components/Misc/FormSection';
import AppForm from '../../components/Inputs/Form/AppForm'
import AppFormField from '../../components/Inputs/Form/AppFormField'
import SubmitButton from '../../components/Inputs/Form/SubmitButton'
import StdText from '../../components/AppTexts/StdText';
import LinkText from '../../components/AppTexts/LinkText';

import routes from '../../navigation/routes';


//Account Creation form validation schema
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    username: Yup.string().required().label("Username"),
    password: Yup.string().required().min(6).label("Password"),
    confPassword: Yup.string().required().min(6).label("Confirm Password"),
    address: Yup.string().required().label("Address"),
})

function CreateAccountScreen({navigation}) {
    const auth = useAuth();

    //Form submit process
    const handleSubmit = async ({ email, username, password, address }) => {
        await auth.signUp(email, password, username, address);
      };

    //Automatically navigate to issues if already logged in
    useEffect(() => {
        console.log(auth.user)
        auth.user && navigation.navigate(routes.Issues) 
    }, [auth.user])


    return (
        <Card title="Account Creation">
            <FormSection>
                <AppForm
                    initialValues={{ email: "hadim23937@yutongdt.com", username: "fdsafdsa", password: "Hello123",confPassword: "Hello123", address:"fsadf fdfd" }}
                    onSubmit={(values) => {console.log(values);handleSubmit(values);}}
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
                    {/*Form Submit*/}
                    <SubmitButton title="Create Account" />
                </AppForm>
                {/*Navigate to login option*/}
                <View style={{flexDirection:"column", alignItems:"center", padding:5}}>
                    <StdText>Already have an account?  </StdText><LinkText onPress={()=>{navigation.navigate(routes.Login)}}>Login Here</LinkText>
                </View>
            </FormSection>
        </Card>
    );
}

export default CreateAccountScreen;