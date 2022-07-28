import React, { useMemo } from 'react';
import classes from "../styles/Summery.module.css";
import useFetch from "./hooks/useFetch";
const succesimage = "../assets/images/Success.png";

const Summery = ({ score, noq }) => {

  const getKeyword = useMemo(() => {
    console.log("Summery")
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    }else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    }else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  },[score,noq]);

  const { loading, error, result } = useFetch(`https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`, "GET", {
    Authorization: process.env.REACT_APP_PEXELS_API_KEY
  });

  const Image = result ? result.photos[0].src.medium : succesimage;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        {/* <!-- progress bar will be placed here --> */}
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>
      {loading && <div className={classes.badge}>Loading your badge</div>}
      {error && <div className={classes.badge}>an error accured</div>}
      {!loading && !error && 
      (<div className={classes.badge}>
          <img src={Image} alt="Success" />
        </div>
        )
        }
      </div>
  )
}

      export default Summery