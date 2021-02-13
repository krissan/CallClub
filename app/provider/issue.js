import React from 'react';

import HeaderText from "../components/AppTexts/HeaderText";
import PtText from "../components/AppTexts/PtText";
import StdText from "../components/AppTexts/StdText";
import CTA from "../components/CTA/CTA";
import CardSection from "../components/Misc/CardSection";
import FormSection from "../components/Misc/FormSection";

import colors from '../config/colors';
import useAuth from "./auth/useAuth";

export default useIssue = () => {
    const auth = useAuth();

  //Get CTA data based on id
  const getIssue = async(id) => {
    try {
      //Search and return cta tag
      const resp =  await fetch('http://calltoactionrest-env.eba-quxmp538.us-west-2.elasticbeanstalk.com/issue/'+id);

      return resp
    }
    catch (error) 
    {
      console.error(error);
    }
  }

  const createIssue = async(title, content, deadline) => {
      console.log(auth);
    /*try {
      //Create and return cta tag on success
      const resp = await fetch('http://calltoactionrest-env.eba-quxmp538.us-west-2.elasticbeanstalk.com/issue',  {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: ''
        },
        body: JSON.stringify({
          title: title,
          content: content
        })
      });

      return resp
    }
    catch (error) 
    {
      console.error(error);
    }*/
  }

  const parsefun = (obj, index) => {
    //depending on key format associated value differently
    switch (obj[0]) {
        case "c":
            return(<CardSection key={index}>{
                obj[1].map((val, subIndex)=>{
                    return parsefun(val, subIndex)
                })
                }</CardSection>)
        case "f":
            return(<FormSection key={index}>{
                obj[1].map((val, subIndex)=>{
                    return parsefun(val, subIndex)
                })
                }</FormSection>)
        case "h":
            return(<HeaderText key={index} txtColor={colors.text}>{obj[1]}</HeaderText>)
        case "s":
            return(<StdText key={index}>{obj[1]}</StdText>)
        case "p":
            return(<PtText key={index}>{obj[1]}</PtText>)
        case "ctaP":
            return(<CTA key={index} id={obj[1].id} ctaType={"petition"} content={obj[1].value} />)
        case "ctaC":
            return(<CTA key={index} id={obj[1].id} ctaType={"call"} content={obj[1].value}/>)
    }
  }

  return { getIssue, createIssue, parsefun };
};
