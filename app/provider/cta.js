import useAuth from "./auth/useAuth";

export default useCta = () => {
  const auth = useAuth();
  const types = {"petition":"PETITION", "call": "CALL_YOUR_COUNCILLOR"}


  //Returns list of ctas similar to name
  const searchCTA = async(query) => {
    try {
      let idToken = await auth.getAuthToken();
      console.log("search cta");

      let response;
      await fetch(
        'http://10.0.2.2:8081/call-to-action?query='+query,{
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

      return [{id:"43214231", name:"hello"},{id:"432141", name:"hello kitty"}]
    }
    catch (error) 
    {
      console.error(error);
    }
  }

  //Get CTA data based on id
  const grabCTA = async(id) => {
    try {
      let idToken = await auth.getAuthToken();
      console.log("grab cta");

      //Search and return cta tag
      let response;
      await fetch(
        'http://10.0.2.2:8081/call-to-action/'+id,{
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

      return '["ctaC",'+JSON.stringify({"id": "4321","value": "Mayor"})+']';
    }
    catch (error) 
    {
      console.error(error);
    }
  }

  const createCta = async(name, type, content, startDate,endDate) => {
    try {
      let idToken = await auth.getAuthToken();

      //Create and return cta tag on success
      let response;
      await fetch(
        'http://10.0.2.2:8081/call-to-action',{
          method: 'POST',
          dataType: 'json',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+idToken
          },
          body: JSON.stringify({
            callToActionType: types[type],
            startDate: startDate,
            endDate:endDate,
            name:"ctaSample"
          })
        }).then(
          response =>  response.json()
        ).then(data => {
            response = data;
        });

      console.log(response);

      //return [{id:"43214231", name:"hello"}]
    }
    catch (error) 
    {
      console.error(error);
    }
  }

  //update completion status of cta for user
  const statusUpdate = async(id, status) => {
    try {
      console.log("status update");
      let idToken = await auth.getAuthToken();

      let response;
      await fetch(
        `http://10.0.2.2:8081/call-to-action-status`,{
          method: 'POST',
          dataType: 'json',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+idToken
          },
          body: JSON.stringify({
            cta_id: 13, 
            status:"DONE"
          })
        }).then(
          response =>  response.json()
        ).then(data => {
            response = data;
        });

      console.log(response);

      //send cta staus
      console.log("ziggerello"+status);
    }
    catch (error) 
    {
      console.error(error);  
    }
  }

  const getStatus = async(id) => {
    try {
      let idToken = await auth.getAuthToken();
      let cta_id = 13;

      let response;
      await fetch(
        'http://10.0.2.2:8081/call-to-action-status/'+cta_id,{
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

      //getstatus based on id and user
      //if cant find status return "not found"
      return 'not done'
    }
    catch(error)
    {
      console.error(error)
    }
  }

  return { searchCTA, grabCTA, getStatus, statusUpdate, createCta };
};
