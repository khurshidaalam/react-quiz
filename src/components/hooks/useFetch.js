import {
    get,
    getDatabase,
    orderByKey,
    query,
    ref
  } from "firebase/database";
  import { useEffect, useState } from "react";
  
  const useFetch = (url, method, headers) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState();
    const [result, setResult] = useState(null);
  
    useEffect(() => { 
      async function fetchPics() {
       
        try {
          setError(false);
          setLoading(false);
          //request firebase database
          const response = await fetch(url, {
            method : method || "GET",
            headers : headers
          });
          const data = await response.json();
          setResult(data);
          
        } catch (err) {
          setError(true);
          setLoading(false);
        }
      }
  
      fetchPics();
      
    }, []);
    
  
    return {
      loading,
      error,
      result
    };
  };
  export default useFetch;
  