import React, { useContext } from "react";
import useAuth from "../auth/useAuth";
import RepContext from "./context";

//create and define Representative context and functions to access  and modify it
export default useReps = () => {
  //define Rep context
  const { reps, setReps } = useContext(RepContext);

  const auth = useAuth();

  //load representatives based on users address
  const reloadReps = async() => {
    //let addr = auth.user.address;

    try {
        //if user is logged in use their address to find representative data
        if(auth.user) {
          let response = await fetch(
            'https://represent.opennorth.ca/representatives/?point=45.524%2C-73.596',
          );
          let responseJson = await response.json();
          let data = responseJson["objects"].map((rep)=>{
            //filter for valid offices that can be contacted by constituents
            let offices = rep.offices.filter((office)=>{return office/*.type == "constituency" || office.type == "constituency"*/}); 
            let officeNumber = ""

            //if valid offices exist grab first number
            if (offices && offices.length != 0)
            {
              officeNumber=offices[0].tel;
            }


            return {
              photo: rep.photo_url,
              name:rep.name,
              district:rep.district_name,
              party:  rep.party_name,
              number: officeNumber,
              gender: rep.gender,
              email: rep.email,
              website:rep.url,
              elected_office: rep.elected_office
            }
          })

          setReps(data);
        }
      } catch (error) {
        console.error(error);
      }
  }



  return { reps, reloadReps };
};
