import React, { useEffect, useState } from "react";
import { View } from "react-native";

import StdText from "../AppTexts/StdText";
import CTACall from "./CTACall";
import StdCheckBox from "../Inputs/StdCheckBox";
import CTAPetition from "./CTAPetition";
import LoadIcon from "../Misc/LoadIcon";

import colors from "../../config/colors";
import useCta from '../../provider/cta';
import styles from "./styles";

function CTA({id,ctaType="call",content}) {
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const cta = useCta();

  //get status on load
  useEffect(()=>{
    const getStatus = async() => {
      //start loading
      setLoading(true);

      //update status
      const retStatus = await cta.getStatus(id)
      
      setStatus(retStatus);

      if(retStatus=="done") { setCheck(true); } else { setCheck(false)}
      
      //end loading
      setLoading(false);
    }

    getStatus();
  },[])

  //update status
  const updateStatus = async(newStatus) => {
    //start loading
    setLoading(true);

    //update status
    const retStatus = await cta.statusUpdate(id, newStatus)
    setStatus(newStatus);

    //end loading
    setLoading(false);
  }

  //toggle done check box, then update status
  const toggleCheck = async() => {
    if(check == true)
    {
      updateStatus("not done");
    }
    else
    {
      updateStatus("done");
    }
    setCheck(!check);
  } 

  //plug correct cta in component based on type
  const parseType = () => {
    //depending on key format associated value differently
    switch (ctaType) {
        case "petition":
            return(<CTAPetition handleStatus={updateStatus} id={id}>{content}</CTAPetition>)
        case "call":
            return(<CTACall handleStatus={updateStatus} id={id} level={content}/>)
    }
  }

  return (
    <>
      {/*While status is being grabbed*/}
      {!loading ?
        /*If status is not done display cta otherwise display already completed view*/
        <View style={{paddingVertical:10}}>
          {status !== "done" ?
            <>{parseType()}</>
            :
            <View style={[styles.placeHolder, {backgroundColor: colors.secondary}]}>
                <StdText txtColor={colors.tertiary}>You Already Completed This Action</StdText>
            </View>
          }
          <View style={[{flexDirection:"row", justifyContent:"flex-end", marginTop: 10}]}>
            <StdCheckBox check={check} onPress={toggleCheck}>
              Done
            </StdCheckBox>
          </View>
        </View>
      :
      <View style={[styles.placeHolder, {backgroundColor: colors.secondary}]}>
        <StdText txtColor={colors.tertiary} style={{paddingBottom:10}}>Loading Action</StdText>
        <LoadIcon/>
      </View>  
      }
    </>
  );
}

export default CTA;