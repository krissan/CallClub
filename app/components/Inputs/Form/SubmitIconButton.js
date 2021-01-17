import React from "react";
import { useFormikContext } from "formik";
import { MaterialIcons } from '@expo/vector-icons'

import IconButton from "../../Buttons/IconButton";

import global from '../../../config/global';
import colors from '../../../config/colors';

function SubmitIconButton() {
  const { handleSubmit } = useFormikContext();

  return  <IconButton style={{marginBottom: global.inputBottomHeight+global.inputBottomPad, marginLeft:10}} onPress={handleSubmit}>
            <MaterialIcons name={"arrow-forward"} size={24} color={colors.tertiary} />
          </IconButton>
}

export default SubmitIconButton;
