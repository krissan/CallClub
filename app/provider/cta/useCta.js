import useAuth from "../auth/useAuth";
import { useContext } from "react";

import CtaContext from "./context";

export default useCta = () => {
  const { cta, setCta } = useContext(CtaContext);
  const auth = useAuth();

  //Returns list of ctas similar to name
  const searchCTA = async(query) => {
    try {
      return [{id:"43214231", name:"hello"}]
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
      return '["ctaC",'+JSON.stringify({"id": "4321","level": "Mayor"})+']';
    }
    catch (error) 
    {
      console.error(error);
    }
  }

  const createCta = async(name, type, petition, call, deadline) => {
    try {
      //Create and return cta tag on success

      return [{id:"43214231", name:"hello"}]
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
    }
    catch (error) 
    {
      console.error(error);
    }
  }

  return { cta, searchCTA, grabCTA, statusUpdate, createCta };
};
