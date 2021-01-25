import React, {useEffect, useRef, useState} from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import StdText from '../AppTexts/StdText';

import colors from '../../config/colors';
import global from '../../config/global';
import styles from './styles';
import keys from '../../config/keys';

function AddressInput({ touched, value, handleBlur, handlePress, wrapperPress, label, inpColor=colors.text, error="", ...otherProps}) {
    const inputRef = useRef();

    //grab address value and format it so only text remains
    useEffect(() => {
        if(value){
            /*const formatted_address = value.split(",",3)[2]
            formatted_address && inputRef.current?.setAddressText(value);*/
            inputRef.current?.setAddressText(value);
            inputRef.current?.focus();
            console.log(inputRef.current);
        }
      }, [value]);
    

    return (
        <View style={{ padding: global.screenPad, flex:1, flexDirection:"column", justifyContent:"space-between"}}>
            <View>
                {/* Header */}
                <StdText txtColor={inpColor} style={[styles.label,{fontWeight:"bold"}]}>
                    {label}
                </StdText>

                {/* Address Input input */}
                <View style={{flexDirection:"row", width:"100%"}}>
                    <GooglePlacesAutocomplete
                                ref={inputRef}
                                placeholder= {'Search'}
                                onPress={(data, details) => {
                                    //geolocation + address for accuracy
                                    //const geoLoc = details.geometry.location.lat+","+details.geometry.location.lng+","+details.formatted_address;
                                    wrapperPress();
                                    handlePress(details.formatted_address);
                                    !touched && handleBlur(true);
                                }}
                                query={{
                                    key: keys.placesApiKey,
                                    language: 'en',
                                }}
                                fetchDetails={true}
                                styles={{
                                    container: {
                                        flex:1
                                    },
                                    textInputContainer: {
                                        flexDirection: 'row',
                                    },
                                    textInput: [
                                        styles.stdField, {borderBottomColor: inpColor}
                                    ],
                                    poweredContainer: {
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                        borderBottomRightRadius: 5,
                                        borderBottomLeftRadius: 5,
                                        borderColor: '#c8c7cc',
                                        borderTopWidth: 0.5,
                                    },
                                    powered: {},
                                    listView: {},
                                    row: {
                                        backgroundColor: '#FFFFFF',
                                        padding: 13,
                                        height: 44,
                                        flexDirection: 'row',
                                    },
                                    separator: {
                                        height: 0.5,
                                        backgroundColor: '#c8c7cc',
                                    },
                                    description: {},
                                    loader: {
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        height: 20,
                                    },
                                }}

                                {...otherProps}
                                />  
                </View>
            </View>
            {/*Display error if touched */}
            {/*<View style={{alignItems:'flex-end', height:global.inputBottomHeight }}>
                { touched &&
                <StdText txtColor={inpColor} style={[styles.inline]}>
                    {error}
                </StdText>
                }
            </View>*/}
        </View>
    );
}

export default AddressInput;