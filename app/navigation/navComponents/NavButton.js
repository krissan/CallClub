import React from "react";
import { TouchableOpacity } from "react-native";

import colors from "../../config/colors";
import styles from "./styles";

function NavButton({children, onPress, bgColor=colors.secondary}) {
  return (
    <TouchableOpacity
      style={[styles.navbutton, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
        {children}
    </TouchableOpacity>
  );
}

export default NavButton;