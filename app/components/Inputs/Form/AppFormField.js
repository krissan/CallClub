import React from "react";
import { useFormikContext } from "formik";

import StdTextInput from "../StdTextInput";
import colors from "../../../config/colors";

//Form text input field
function AppFormField({ name, ...otherProps }) {
    const { values, setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <>
            <StdTextInput
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

export default AppFormField;
