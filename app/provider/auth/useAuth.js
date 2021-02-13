import { useContext } from "react";
import { Auth } from "aws-amplify";

import AuthContext from "./context";
import authStorage from "./storage";
import useAddr from "../address/useAddr";

//define auth context and functions to access and modify it
export default useAuth = () => {
  //define auth context
  const { user, setUser } = useContext(AuthContext);
  const loc = useAddr();

  //update user address attribute in aws
  const updateAddress = async(address) => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      let response = await Auth.updateUserAttributes(user, {
        'address': address
      });

      loc.setAddress(address);
      console.log("address updated "+ response);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  //sign up user to aws and store token
  const signUp = async(username, password, name, address) => {
    let authToken="sample" //dummy
    try {
      const resp = await Auth.signUp({
          username,
          password,
          attributes: {
              name,
              address 
          }
      });
    } 
    catch (error) 
    {
      console.log('error signing up:', error);
    }
  }

  //login user with aws, store token and update address
  const logIn = async(email, password) => {
    let authToken="sample"//dummy

    try {
      //get user
      const user = await Auth.signIn(email, password);
      setUser(user);

      //set auth token
      authStorage.storeToken(authToken);

      //keep app address up to date
      loc.setAddress(user.attributes.address)

      return user
    } catch (error) {
        console.log('error signing in', error);
    }
  };

  //logout user from aws and remove token from storage
  const logOut = async() => {
    try {
      await Auth.signOut();
      setUser(null);
      authStorage.removeToken();
      console.log("Logged out");
    } catch (error) {
        console.log('error signing out: ', error);
    }
  };

  //Get current authenticated user
  const checkAuth = async() => {
    try {
      const user = await Auth.currentAuthenticatedUser();

      //keep app address up to date
      loc.setAddress(user.attributes.address)

      setUser(user);
    } catch (error) {
        console.log('error checking auth: ', error);
    }

  };

  const getAuthToken = async() => {
    return Auth.currentSession().then(res=>{
      return res.getIdToken().jwtToken
    })
  }

  return { user, logIn, logOut, signUp, checkAuth, updateAddress, getAuthToken };
};
