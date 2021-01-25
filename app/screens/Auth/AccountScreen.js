import React, {useState,useEffect} from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';

import FooterButton from '../../components/Buttons/FooterButton';
import LabeledItem from '../../components/Misc/LabeledItem';
import AppForm from '../../components/Inputs/Form/AppForm';
import AddressFormField from '../../components/Inputs/Form/AddressFormField';

import useAuth from '../../provider/auth/useAuth';
import global from '../../config/global';
import SubmitButton from '../../components/Inputs/Form/SubmitButton';
import useReps from '../../provider/rep/useReps';
import useAddr from '../../provider/address/useAddr';

//Address form validation schema
const validationSchema = Yup.object().shape({
    address: Yup.string().required().label("Address")
  });

function AccountScreen({navigation}) {
    const auth = useAuth();
    const loc = useAddr();
    const gov = useReps();
    const [attributes, setAttributes] = useState({name:"",email:"", address:""});
    const [loading, setLoading] = useState(false);

    //Form submit process
    const handleSubmit = async ({ address }) => {
        setLoading(true);

        await loc.setAddress(address);
        alert("Address Updated");
        auth.checkAuth();
        gov.reloadReps();
        
        setLoading(false);
      };

    //grab and set attribute on app load or change in user object
    useEffect(() => {
        console.log('-----------------------------account----------------------------------')
        console.log(auth.user);
        if(auth.user){
            let {name,email,address} = auth.user.attributes;
            setAttributes({name,email,address})
        }
    },[auth.user]);

    //display account information if user exists
    return(auth.user &&
        <View style={{flex:1, flexDirection:"column"}}>
            {/*user details*/}
            <View style={{flex:1,padding: global.screenPad, flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start"}}>
                <LabeledItem label="Name">{attributes.name}</LabeledItem>
                <LabeledItem label="Email">{attributes.email}</LabeledItem>
                {/*address input form*/}
                <AppForm enableReinitialize
                    initialValues={{ address: attributes.address }}
                    onSubmit={(values) => {handleSubmit(values);}}
                    validationSchema={validationSchema}
                    >
                    {/*Address Input*/}
                    <AddressFormField name="address" label="Address"></AddressFormField>
                    {/*Form Submit*/}
                    <SubmitButton title="Update Address" loading={loading} />
                </AppForm>
            </View>

            {/*log out button*/}
            <FooterButton onPress={async()=>{auth.logOut();}} title="sign out"></FooterButton>
        </View>
    );
}

export default AccountScreen;