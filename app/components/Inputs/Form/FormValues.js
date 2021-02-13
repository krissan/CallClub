import React, { useEffect } from "react";
import { useFormikContext } from "formik";
import { Text } from 'react-native';

import AddressInput from "../AddressInput";

import colors from "../../../config/colors";
import AddressInputWrapper from "../AddressInputWrapper";

//Form multiline input box
function FormValues() {
    const { values, errors} = useFormikContext();

    return (
        <>
            <Text>
                {JSON.stringify(values)}
            </Text>
            <Text>
                {JSON.stringify(errors)}
            </Text>
        </>
    );
}

export default FormValues