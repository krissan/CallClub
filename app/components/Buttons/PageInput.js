import React, { Children } from "react";
import { View } from "react-native";

import DeleteButton from "./DeleteButton";

import colors from "../../config/colors";

function PageInput({style, delAction, children}) {
  return (
    <View style={[style,{flexDirection:"row", flex:1}]}>
      <View style={{flex:1, paddingRight: 10}}>
        {children}
      </View>
      {delAction &&
        <View style={{justifyContent:"flex-end", paddingBottom:15}}>
            <DeleteButton bgColor={colors.negative} onPress={delAction}/>
        </View>
      }
    </View>
  );
}

export default PageInput;