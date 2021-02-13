import React from "react";
import { useFormikContext } from "formik";

import StdDatePicker from "../StdDatePicker";

//Form Date Picker field
function AppFormDatePicker({ name, pickerList, ...otherProps }) {
    const { values, setFieldTouched, setFieldValue, errors, touched } = useFormikContext();

    return (
            <StdDatePicker
                onBlur={() => setFieldTouched(name)}
                onChange={(value)=> setFieldValue(name, value)}
                error={errors[name]}
                touched={touched[name]}
                value={values[name]}
                list={pickerList}
                {...otherProps}
            />

    );
}

export default AppFormDatePicker;
