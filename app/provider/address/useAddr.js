import { useContext } from "react";
import useAuth from "../auth/useAuth";
import AddrContext from "./context";

//define auth context and functions to access and modify it
export default useAddr = () => {
    //define auth context
    const { addr, setAddr } = useContext(AddrContext);
    const auth = useAuth();

    //Get current authenticated user
    const setAddress = async(address) => {
        try {
            
            if(auth.user)
            {
                auth.updateAddress(addr);
            }
            
            setAddress(address);
            
        } catch (error) {
            console.log('error setting address: ', error);
        }
    };


    return { addr, setAddress };
};
