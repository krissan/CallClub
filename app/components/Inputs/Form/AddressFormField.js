import React, { useEffect } from "react";
import { useFormikContext } from "formik";

import AddressInput from "../AddressInput";

import colors from "../../../config/colors";
import AddressInputWrapper from "../AddressInputWrapper";

//Form address field
function AddressFormField({ name, label }) {
    const { touched, values, setFieldTouched, setFieldValue, errors} = useFormikContext();

    return (
        <>
            <AddressInputWrapper
                handleBlur={(tVal) => setFieldTouched(name, tVal)}
                handlePress={(val) => setFieldValue(name, val)}
                inpColor={errors[name] ? colors.negative : colors.secondary}
                error={errors[name]}
                touched={touched[name]}
                value={values[name]}
                label={label}
                enablePoweredByContainer={false}
            />
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

export default AddressFormField;