import { useContext } from "react";
import { Auth } from "aws-amplify";

import AuthContext from "./context";
import authStorage from "./storage";

//define auth context and functions to access and modify it
export default useAuth = () => {
  //define auth context
  const { user, setUser } = useContext(AuthContext);

  //update user address attribute in aws
  const updateAddress = async(address) => {
    const user = await Auth.currentAuthenticatedUser();
    await Auth.updateUserAttributes(user, {
      'address': address
    });
  }

  //sign up user to aws and store token
  const signUp = async(username, password, name, address) => {
    let authToken="sample" //dummy
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                name,
                address 
            }
        });
        console.log(user);
        setUser(user);
        authStorage.storeToken(authToken);

        
    } catch (error) {
        console.log('error signing up:', error);
    }
  }

  //login user with aws and store token
  const logIn = async(email, password) => {
    let authToken="sample"//dummy

    try {
      const user = await Auth.signIn(email, password);
      setUser(user);
      authStorage.storeToken(authToken);
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
      console.log("check");
      setUser(user);
    } catch (error) {
        console.log('error checking auth: ', error);
    }

  };

  return { user, logIn, logOut, signUp, checkAuth };
};
