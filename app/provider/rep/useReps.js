import { useContext } from "react";
import useAddr from "../address/useAddr";
import RepContext from "./context";
import useAuth from "../auth/useAuth";
import { Alert } from "react-native";

//create and define Representative context and functions to access  and modify it
export default useReps = () => {
  //define Rep context
  const { reps, setReps } = useContext(RepContext);
  const auth = useAuth();
  const loc = useAddr();

  //load representatives based on users address
  const reloadReps = async() => {
    try {
        let idToken = await auth.getAuthToken();
        //Type of Reps you want to grab
        let repTypes = ["Councillor", "Mayor"];

        console.log('reerere');
        console.log(idToken);

        let response;
        await fetch(
          `http://10.0.2.2:8081/representative?address='`+loc.addr+`'`,{
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
        let data = response.map((rep)=>{
          
          return {
            photo: rep.photo_url,
            name:rep.name,
            district:rep.district_name,
            party:  rep.party_name,
            number: rep.tel,
            gender: rep.gender,
            email: rep.email,
            website:rep.url,
            elected_office: rep.elected_office
          }
        });
     
        await setReps(data);

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
        Alert(error);
      }
  }

  return { reps, reloadReps };
};
