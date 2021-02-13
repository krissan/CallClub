import { useContext } from "react";
import AddrContext from "./context";

//define auth context and functions to access and modify it
export default useAddr = () => {
    //define auth context
    const { addr, setAddr } = useContext(AddrContext);

    //Get current authenticated user
    const setAddress = async(address) => {
        try {
            console.log(address);
            setAddr(address);
        } catch (error) {
            console.log('error setting address: ', error);
        }
    };


    return { addr, setAddress };
};
