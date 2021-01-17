import React from "react";
import { useFormikContext } from "formik";

import StdPicker from "../StdPicker";

//Form select field
function AppFormPicker({ name, pickerList, ...otherProps }) {
    const { values, setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
            <StdPicker
                onBlur={() => setFieldTouched(name)}
                onChange={handleChange(name)}
                error={errors[name]}
                touched={touched[name]}
                value={values[name]}
                list={pickerList}
                {...otherProps}
            />

    );
}

export default AppFormPicker;
