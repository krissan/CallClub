import useAuth from "./auth/useAuth";

export default useCta = () => {
  const auth = useAuth();
  const types = {"petition":"PETITION", "call": "CALL_YOUR_COUNCILLOR"}


  //Returns list of ctas similar to name
  const searchCTA = async(query) => {
    //console.log(auth);
    try {
      //const resp = await fetch('http://calltoactionrest-env.eba-quxmp538.us-west-2.elasticbeanstalk.com/call-to-action?query='+query);
      //console.log(resp);
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
      //Search and return cta tag
      const rep =  await fetch('http://calltoactionrest-env.eba-quxmp538.us-west-2.elasticbeanstalk.com/call-to-action/'+id);

      return '["ctaC",'+JSON.stringify({"id": "4321","value": "Mayor"})+']';
    }
    catch (error) 
    {
      console.error(error);
    }
  }

  const createCta = async(name, type, content, deadline) => {
    console.log(JSON.stringify({
      callToActionType: types[type],
      deadlineDate: deadline
    }));
    let idToken = await auth.getAuthToken();
    console.log(idToken)

    try {
      //Create and return cta tag on success
      fetch('http://calltoactionrest-env.eba-quxmp538.us-west-2.elasticbeanstalk.com/call-to-action',  {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Bearer "+idToken
        },
        body: JSON.stringify({
          creatorId:"1234",
          callToActionType: types[type],
          deadlineDate: deadline
        })
      }).then(
        response => response.json()
      ).then(data => {
          console.log(data);
      })
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
