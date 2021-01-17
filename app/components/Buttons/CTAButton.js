import React from "react";
import { MaterialIcons } from '@expo/vector-icons'

import IconButton from "./IconButton";


function DeleteButton({style, onPress}) {
  return (
      <IconButton style={style} bgColor={bgColor} onPress={onPress}>
          <MaterialIcons name={"delete-outline"} size={24} color={txtColor} />
      </IconButton>
  );
}

export default DeleteButton;