import React, {useState,useEffect} from 'react';
import { View } from 'react-native';

import StdText from '../../components/AppTexts/StdText';
import FooterButton from '../../components/Buttons/FooterButton';
import FancyAddressForm from '../../components/Inputs/Form/FancyAddressForm';

import useAuth from '../../provider/auth/useAuth';
import global from '../../config/global';


function AccountScreen({navigation}) {
    const [attributes, setAttributes] = useState({name:"",email:"", address:""});

    const auth = useAuth();

    //grab and set attribute on app load or change in user object
    useEffect(() => {
        console.log(auth.user);
        if(auth.user){
            const {name,email} = auth.user.attributes;
            setAttributes({name,email})
        }
    },[auth.user]);

    //display account information if user exists
    return(auth.user &&
        <View style={{flex:1, flexDirection:"column"}}>
            {/*user details*/}
            <View style={{flex:1,padding: global.screenPad, flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start"}}>
                <StdText>{attributes.name}</StdText>
                <StdText>{attributes.email}</StdText>
                {/*address input*/}
                <FancyAddressForm></FancyAddressForm>
            </View>

            {/*log out button*/}
            <FooterButton onPress={async()=>{auth.logOut();}} title="sign out"></FooterButton>
        </View>
    );
}

export default AccountScreen;