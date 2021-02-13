import React, {useState, useEffect} from "react";
import { View, Linking, Alert } from "react-native";

import StdText from "../AppTexts/StdText";
import CallButton from "./CallButton";
import CBButton from "./CBButton";

import styles from "./styles";

function CTACall({id, level, handlesStatus=()=>{}}) {
    const [tel, setTel] = useState();
    const gov= useReps();
    const cta = useCta();

    //check if cta has been completed then grab reps contact
    useEffect(() => {
        //check users status on cta
        //setStatus("done")
        
        //refresh representative data on load
        //gov.reloadReps(); 
    }, []);

    useEffect(() => {
        //check users status on cta
        //setStatus("done")
        if(gov.reps)
        {
            const repToCall = gov.reps.filter((rep)=>{return rep.elected_office == level})
            try {
                setTel(repToCall[0].number.replace(/[ -]/g,''));
            }
            catch(e)
            {
                alert(e);
            }
        }
    }, [gov.reps]); 

    const handlePress = () => {
        if(tel)
        {
            //initiate call
            Linking.openURL(`tel:${tel}`)

            //send CTA was executed to server (user, id, maybe)  
            handlesStatus("maybe")
        }
        else
        {
            Alert.alert("Error","Sorry could not call number");
        }
    }

    return (
            <View style={{height:100, flexDirection: "row",}}>
                {/*Call Button*/}
                <CallButton onPress={handlePress}/>
                {/*Clipboard Button*/}
                <CBButton cNumber={tel} />
            </View>
    );
}

export default CTACall;