import React, {useState,useEffect} from 'react';
import * as Yup from 'yup';

import useAddr from '../../../provider/address/useAddr';
import useAuth from '../../../provider/auth/useAuth';
import useReps from '../../../provider/rep/useReps';
import AddressFormField from './AddressFormField';
import AppForm from './AppForm';
import SubmitButton from './SubmitButton';


//Address form validation schema
const validationSchema = Yup.object().shape({
    address: Yup.string().required().label("Address")
  });

function AddressForm() {
    const auth = useAuth();
    const loc = useAddr();
    const gov = useReps();
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);

    //Form submit process
    const handleSubmit = async ({ address }) => {
        setLoading(true);

        if (auth.user)
        {
            await auth.updateAddress(address);
            alert("Address Updated");
            auth.checkAuth();
        }
        else
        {
            await loc.setAddress(address);
            alert("Address Updated");
        }

        setLoading(false);

        await gov.reloadReps();
    };

    useEffect(()=>{
        if(auth.user){
            setAddress(auth.user.attributes.address);
        }else if (loc.addr){
            setAddress(loc.addr);
        }
    },[])

    //display account information if user exists
    return(
        <>
        <AppForm enableReinitialize
            initialValues={{ address: address}}
            onSubmit={(values) => {handleSubmit(values);}}
            validationSchema={validationSchema}
            >
            {/*Address Input*/}
            <AddressFormField name="address" label="Address"></AddressFormField>
            {/*Form Submit*/}
            <SubmitButton title="Update Address" loading={loading} />
        </AppForm>
        </>
    );
}

export default AddressForm;