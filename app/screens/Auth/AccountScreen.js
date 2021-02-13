import React, {useState,useEffect} from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';

import FooterButton from '../../components/Buttons/FooterButton';
import LabeledItem from '../../components/Misc/LabeledItem';
import AddressForm from '../../components/Inputs/Form/AddressForm';

import useAuth from '../../provider/auth/useAuth';
import global from '../../config/global';

//Address form validation schema
const validationSchema = Yup.object().shape({
    address: Yup.string().required().label("Address")
  });

function AccountScreen({navigation}) {
    const auth = useAuth();
    const [attributes, setAttributes] = useState({name:"",email:"", address:""});

    //grab and set attribute on app load or change in user object
    useEffect(() => {
        if(auth.user){
            let {name,email,address} = auth.user.attributes;
            setAttributes({name,email,address})
        }
    },[auth.user]);

    //display account information if user exists
    return(auth.user &&
        <View style={{flex:1, flexDirection:"column", justifyContent:"flex-start"}}>
            {/*user details*/}
            <View style={{flex:1,padding: global.screenPad, flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start"}}>
                <LabeledItem label="Name">{attributes.name}</LabeledItem>
                <LabeledItem label="Email">{attributes.email}</LabeledItem>
                {/*address input form*/}
                <AddressForm />
            </View>

            {/*log out button*/}
            <FooterButton onPress={async()=>{auth.logOut();}} title="sign out"></FooterButton>
        </View>
    );
}

export default AccountScreen;