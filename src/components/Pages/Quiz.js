import React from "react";
import Answers from "../Answers";
import Miniplayer from "../Miniplayer";
import Progressbar from "../Progressbar";
import VideoImage from "../../assets/images/3.jpg"

const Quiz = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>

      <Answers >
        <input id="option1"/>
      </Answers>
      <Progressbar/>
      <Miniplayer src={VideoImage} text="#23 React Hooks Bangla - React useReducer hook Bangla"/>
    </>
  );
};

export default Quiz;
