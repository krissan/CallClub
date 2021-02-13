import React from "react";
import { useFormikContext } from "formik";

import StdButton from "../../Buttons/StdButton";

import colors from "../../../config/colors";

//Form Submit Button
function SubmitButton({ style,title, loading }) {
  const { handleSubmit } = useFormikContext();

  return <StdButton style={style} title={title} onPress={handleSubmit} bgColor={colors.action} loading={loading}/>;
}

export default SubmitButton;