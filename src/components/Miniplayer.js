import React,{useState,useRef} from 'react';
import classes from "../styles/Miniplayer.module.css";
import ReactPlayer from 'react-player'

const Miniplayer = ({title,id, ...src}) => {
  const buttonRef = useRef();
  const [showState, setShowstate] = useState(false);
  const vdoUrl = `https://www.youtube.com/watch?v=${id}`

  const miniplayerToggle = () => {
    if(!showState){
      buttonRef.current.classList.remove(classes.floatingBtn);
      setShowstate(true);
    }else{
      buttonRef.current.classList.add(classes.floatingBtn);
      setShowstate(false);
    }
  }

  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`} ref={buttonRef} onClick={miniplayerToggle}>
          <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
          <span className={`material-icons-outlined ${classes.close}`} onClick={miniplayerToggle}> close </span>
          {/* <img {...src} alt="" /> */}
          <ReactPlayer  url={vdoUrl} playing={showState} controls height={`168px`} width={`300px`} />
          <p>{title}</p>
        </div>
  )
}

export default Miniplayer;