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
    const [questions, setQuestions] = useState([]);
  
    useEffect(() => {
      async function fetchQuestions() {
        //database related works
        const db = getDatabase();
        const quizRef = ref(db, "quiz/"+ videoID+"/questions");
        const quizQuery = query(
            quizRef,
          orderByKey()
        );
        try {
          setError(false);
          setLoading(true);
          //request firebase database
          const snapshot = await get(quizQuery);
          if (snapshot.exists()) {
            setQuestions((prevQ) => {
              return [...prevQ, ...Object.values(snapshot.val())];
            });
          } 
        } catch (err) {
          console.log(err);
          setError("there is an error");
          setLoading(false);
        }
      }
  
      fetchQuestions();
      
      //for load items after 2s
      // setTimeout(()=>{
      //   fetchVideos();
      // },2000)
      
    }, [videoID]);
    
  
    return {
      loading,
      error,
      questions
    };
  };
  export default useQuesList;
  