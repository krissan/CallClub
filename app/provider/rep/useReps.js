import { useContext } from "react";
import useAddr from "../address/useAddr";
import RepContext from "./context";

//create and define Representative context and functions to access  and modify it
export default useReps = () => {
  //define Rep context
  const { reps, setReps } = useContext(RepContext);

  const loc = useAddr();

  //load representatives based on users address
  const reloadReps = async() => {
    try {
        //Type of Reps you want to grab
        let repTypes = ["Councillor", "Mayor"];

        console.log("grab representatives based on " + loc.addr);
        //if user is logged in use their address to find representative data
          /* // commented client side grabbing representative data
          
          console.log(auth.user.attributes.address);
          const geoLoc = auth.user.attributes.address.split(",",3);

          let response = await fetch(
            'https://represent.opennorth.ca/representatives/?point='+geoLoc[0]+'%2C'+geoLoc[1],
          );
          let responseJson = await response.json();

          let selected = responseJson["objects"].filter((rep)=>{console.log(rep.elected_office); return rep.elected_office in repTypes})
          console.log(selected);

          let data = responseJson["objects"].map((rep)=>{
            //filter for valid offices that can be contacted by constituents
            let offices = rep.offices.filter((office)=>{return office.tel}); 
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

          setReps(data);*/
      } catch (error) {
        console.error(error);
      }
  }

  return { reps, reloadReps };
};
