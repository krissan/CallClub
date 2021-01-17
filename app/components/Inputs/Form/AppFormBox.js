import React from "react";
import { useFormikContext } from "formik";

import BoxTextInput from "../BoxTextInput";

import colors from "../../../config/colors";

//Form multiline input box
function AppFormBox({ name, ...otherProps }) {
    const { values, setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <>
            <BoxTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                inpColor={errors[name] && touched[name] ? colors.negative : colors.text}
                length={values[name].length}
                error={errors[name]}
                touched={touched[name]}
                value={values[name]}
                {...otherProps}
            />
        </>
    );
}

export default AppFormBox;
