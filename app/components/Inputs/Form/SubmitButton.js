import React from "react";
import { useFormikContext } from "formik";

import StdButton from "../../Buttons/StdButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <StdButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;