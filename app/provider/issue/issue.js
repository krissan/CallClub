import React, { useContext } from 'react';
import IssueContext from "./context";

import HeaderText from "../../components/AppTexts/HeaderText";
import PtText from "../../components/AppTexts/PtText";
import StdText from "../../components/AppTexts/StdText";
import CTA from "../../components/CTA/CTA";
import CardSection from "../../components/Misc/CardSection";
import FormSection from "../../components/Misc/FormSection";

import colors from '../../config/colors';
import useAuth from "../auth/useAuth";

export default useIssue = () => {
    const auth = useAuth();
    const { issue, setIssue } = useContext(IssueContext);

  //Get CTA data based on id
  const getIssue = async(id) => {
    try {
      /*let idToken = await auth.getAuthToken();

      console.log('get issue');

      let response;
      await fetch(
        'http://10.0.2.2:8081/issue/'+id,{
          method: 'GET',
          dataType: 'json',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+idToken
          }
        }).then(
          response =>  response.json()
        ).then(data => {
            response = data;
        });

      console.log(response);

      let ctas;
      await fetch(
        'http://10.0.2.2:8081/issue/'+response.id+'/ctas',{
          method: 'GET',
          dataType: 'json',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+idToken
          }
        }).then(
          response =>  response.json()
        ).then(data => {
            ctas = data;
        });

        console.log(ctas);*/
console.log("312321321");
        setIssue({
          creatorId: "dc6258b0-7e20-474a-82ff-982a17443964",
          endDate: "2020-01-01",
          id: 20,
          pdfLink: "http://www.africau.edu/images/default/sample.pdf",
          startDate: "2020-01-01",
          title: "Vacant Homes Tax",
          ctas: [{
            callToActionType: "PETITION",
            creatorId: "dc6258b0-7e20-474a-82ff-982a17443964",
            endDate: "20210-12-30",
            id: 14,
            name: "ctaName",
            startDate: "20210-12-30",
          }]
        });
        console.log("4321421432");

      /*return {"creatorId": response.creatorId,
      "endDate": response.endDate,
      "id": response.id,
      "pdfLink": response.pdfLink,
      "startDate": response.startDate,
      "title": response.title};*/
    }
    catch (error) 
    {
      console.error(error);
    }
  }

  const setIssueCTA = async(issueId, ctaId) => {
    try {
      let idToken = await auth.getAuthToken();

      console.log('set issue cta');

      let response;
      await fetch(
        'http://10.0.2.2:8081/issueCta',{
          method: 'POST',
          dataType: 'json',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+idToken
          },
          body: JSON.stringify({
            issueId: issueId,
            ctaId: ctaId
          })
        }).then(
          response =>  response.json()
        ).then(data => {
            response = data;
        });

      console.log(response);
    }
    catch (error) 
    {
      console.error(error);
    }
  }

  const createIssue = async(title, content, startDate, endDate) => {
    try {
      let idToken = await auth.getAuthToken();
      console.log('createissue');

      let response;
      
      await fetch(
        'http://10.0.2.2:8081/issue',  {
          method: 'POST',
          dataType: 'json',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+idToken
          },
          body: JSON.stringify({
            title:"Vacant Homes Tax1",
            pdfLink: 'http://www.africau.edu/images/default/sample.pdf',
            startDate: startDate,
            endDate:endDate,
          })
        }).then(
          response =>  response.json()
        ).then(data => {
            response = data;
        });

      console.log(response);

      //Create and return cta tag on success
     /* const response = await fetch('http://10.0.2.2:8081/issue',  {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Bearer "+idToken
        },
        body: JSON.stringify({
          title:"Vacant Homes Tax",
          pdfLink: 'http://www.africau.edu/images/default/sample.pdf',
          startDate: startDate,
          endDate:endDate,
        })
      }).then(
        response => {console.log('ssssssssssssssssssssssssssssssss');console.log(response); return response}
      ).then(data => {
        console.log('333333333333333333333333333333333333');
          console.log(data);
          return data;
      })

      console.log("fffffffffffffff");

      if(response !== undefined)
      {
        console.log(response.json());
      }*/
      //return [{id:"43214231", name:"hello"}]
    }
    catch (error) 
    {
      console.error(error);
    }

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

  return { getIssue, createIssue, setIssueCTA, issue, parsefun };
};
