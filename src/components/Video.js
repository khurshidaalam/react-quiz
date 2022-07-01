// import image from "../assets/images/3.jpg";
import classes from "../styles/Video.module.css";

const Video = ({id, title, noq}) => {
  return (
      <div className={classes.video}>
        <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="" />
        <p> {title}</p>
        <div className={classes.qmeta}>
          <p>{noq} Questions</p>
          <p>Total points : {noq * 5}</p>
        </div>
      </div>
  );
};

export default Video;
