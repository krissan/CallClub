import React from "react";
import { TouchableOpacity } from "react-native";

import colors from "../../config/colors";
import styles from "./styles";

function IconButton({children, onPress, style, bgColor=colors.primary}) {
  return (
    <TouchableOpacity
      style={[styles.iconButton, style, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
        {children}
    </TouchableOpacity>
  );
}

export default IconButton;