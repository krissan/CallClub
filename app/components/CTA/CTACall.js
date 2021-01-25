import React, {useState, useEffect} from "react";
import { View, Linking } from "react-native";

import StdText from "../AppTexts/StdText";
import CallButton from "./CallButton";
import CBButton from "./CBButton";

import styles from "./styles";

function CTACall({id, level}) {
    const [tel, setTel] = useState();
    const [status, setStatus] = useState();
    const gov= useReps();
    const cta = useCta();

    //check if cta has been completed then grab reps contact
    useEffect(() => {
        //check users status on cta
        //setStatus("done")
        
        //refresh representative data on load
        gov.reloadReps(); 
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
        //initiate call
        Linking.openURL(`tel:${tel}`)

        //send CTA was executed to server (user, id, maybe)  
        cta.statusUpdate(id, "maybe");
    }

    return (<View>
            {/*If status is not completed display cta otherwise display already completed view*/}
            {!status ?
            <View style={{height:100, flexDirection: "row",}}>
                {/*Call Button*/}
                <CallButton onPress={handlePress}/>
                {/*Clipboard Button*/}
                <CBButton cNumber={tel} />
            </View>
            :
            <View style={[styles.actionButton, {heigh:100}]}>
                <StdText>Already Completed</StdText>
            </View>
            }
        </View>
    );
}

export default CTACall;