import React from "react";
import { MaterialIcons } from '@expo/vector-icons'

import IconButton from "./IconButton";

import colors from "../../config/colors";

function DeleteButton({style, onPress, bgColor=colors.primary, txtColor=colors.tertiary}) {
  return (
      <IconButton style={style} bgColor={bgColor} onPress={onPress}>
          <MaterialIcons name={"delete-outline"} size={24} color={txtColor} />
      </IconButton>
  );
}

export default DeleteButton;