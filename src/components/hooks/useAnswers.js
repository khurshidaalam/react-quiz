import {
    get,
    getDatabase,
    orderByKey,
    query,
    ref
  } from "firebase/database";
  import { useEffect, useState } from "react";
  
  const useQuesList = (videoID) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState();
    const [answers, setAnswers] = useState([]);
  
    useEffect(() => {
      async function fetchAnswers() {
        //database related works
        const db = getDatabase();
        const ansRef = ref(db, `answers/${videoID}/questions`);
        const ansQuery = query(
            ansRef,
          orderByKey()
        );
        try {
          setError(false);
          setLoading(false);
          //request firebase database
          const snapshot = await get(ansQuery);
          if (snapshot.exists()) {
            setAnswers((prevAns) => {
              return [...prevAns, ...Object.values(snapshot.val())];
            });
          } 
        } catch (err) {
          console.log(err);
          setError("there is an error");
          setLoading(false);
        }
      }
  
      fetchAnswers();
      
      //for load items after 2s
      // setTimeout(()=>{
      //   fetchVideos();
      // },2000)
      
    }, [videoID]);
    
  
    return {
      loading,
      error,
      answers
    };
  };
  export default useQuesList;
  