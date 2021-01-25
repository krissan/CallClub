import React, {useEffect, useRef, useState} from 'react';
import { View, Modal } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TouchableOpacity } from 'react-native-gesture-handler';

import StdText from '../AppTexts/StdText';
import StdTextInput from './StdTextInput';
import FooterButton from '../Buttons/FooterButton';
import NonEditTextInput from './NonEditTextInput';
import AddressInput from './AddressInput';

import colors from '../../config/colors';
import global from '../../config/global';
import styles from './styles';

function AddressInputWrapper({ touched, value, handleBlur, handlePress, label, inpColor=colors.text, error="", ...otherProps}) {
    const inputRef = useRef();
    const [visibility, setVisibility] = useState(false);

    //grab address value and format it so only text remains
    useEffect(() => {
        if(value){
            /*const formatted_address = value.split(",",3)[2]
            formatted_address && inputRef.current?.setAddressText(value);*/
            inputRef.current?.setAddressText(value);
            console.log(inputRef.current);
        }
      }, [value]);
    

    const openModal = () => {
        setVisibility(true);
        console.log('-------------------------------------------------------');
        console.log(value)
        console.log(inputRef)
        //inputRef.current?.setAddressText(value);
        //inputRef.focus();
    }

    return (
        <>
            <NonEditTextInput
                label={label}
                value={value}
                onPress={openModal}
            />
            <Modal visible={visibility}>
                    <AddressInput label={label} value={value} touched={touched} inpColor={inpColor} handleBlur={handleBlur} handlePress={handlePress} wrapperPress={()=>{setVisibility(false)}} modalClose={()=>{setVisibility(false)}} error="" {...otherProps} />
                    <FooterButton title={"Close Modal"} onPress={()=>{setVisibility(false)}}  />
            </Modal>
            {/*Display error if touched */}
            {/*<View style={{alignItems:'flex-end', height:global.inputBottomHeight }}>
                { touched &&
                <StdText txtColor={inpColor} style={[styles.inline]}>
                    {error}
                </StdText>
                }
            </View>*/}
        </>      
    );
}

export default AddressInputWrapper;