import React from "react";
import { useFormikContext } from "formik";

import StdDatePicker from "../StdDatePicker";

//Form select field
function AppFormDatePicker({ name, pickerList, ...otherProps }) {
    const { values, setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
            <StdDatePicker
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

export default AppFormDatePicker;
