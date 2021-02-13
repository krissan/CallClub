import React from "react";
import { useFormikContext } from "formik";

import StdText from "../../AppTexts/StdText";


//Form values field
function AppFormValues({ name, pickerList, ...otherProps }) {
    const { values } = useFormikContext();

    return (
            <StdText>
                {JSON.stringify(values)}
            </StdText>
    );
}

export default AppFormValues;
