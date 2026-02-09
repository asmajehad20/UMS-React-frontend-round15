import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetch(path) {
    const [data, setData] = useState([]);
    const [isLoader, setIsLoader] = useState(true);
    const [error, setError] = useState(false);

    const getUsers = async ()=>{
    try {
      const response = await axios.get(path);
      
      setData(response.data);
      console.log(response);
    } catch (err) {
      setError(true);
      console.log(error + err);
    } finally {
      setIsLoader(false);
    }
  }

    useEffect(() => {
        getUsers();
    }, []);
    
  return{data, isLoader, error}
}
