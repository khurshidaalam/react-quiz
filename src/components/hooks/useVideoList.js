import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

const useVideoList = (page) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState();
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      //database related works
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );
      try {
        setError(false);
        //request firebase database
        const snapshot = await get(videoQuery);
        
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setError("there is an error");
        setLoading(false);
      }
    }

    fetchVideos();
    
    //for load items after 2s
    // setTimeout(()=>{
    //   fetchVideos();
    // },2000)
    
  }, [page]);
  

  return {
    loading,
    error,
    videos,
    hasMore
  };
};
export default useVideoList;
