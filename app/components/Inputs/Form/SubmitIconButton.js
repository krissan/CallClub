import React from "react";
import { useFormikContext } from "formik";
import { MaterialIcons } from '@expo/vector-icons'

import IconButton from "../../Buttons/IconButton";
import LoadIcon from "../../Misc/LoadIcon";

import global from '../../../config/global';
import colors from '../../../config/colors';

//Form submit icon button
function SubmitIconButton({loading=false}) {
  const { handleSubmit } = useFormikContext();

  return  <IconButton style={{marginBottom: global.inputBottomHeight+global.inputBottomPad, marginLeft:10}} onPress={handleSubmit}>
            {loading ? <MaterialIcons name={"arrow-forward"} size={24} color={colors.tertiary} /> : <LoadIcon/>}
          </IconButton>
}

export default SubmitIconButton;
