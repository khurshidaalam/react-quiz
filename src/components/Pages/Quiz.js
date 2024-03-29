import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VideoImage from "../../assets/images/3.jpg";
import Answers from "../Answers";
import { useAuth } from "../contexts/AuthContext";
import useQuesList from "../hooks/useQuesList";
import Miniplayer from "../Miniplayer";
import Progressbar from "../Progressbar";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  // eslint-disable-next-line
  const [currentQues, setCurrentQues] = useState(0);
  const { loading, error, questions } = useQuesList(id);

  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const {videoTitle} = navigate;

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: "answer",
      questionID: currentQues,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  const nextQuestion = () => {
    if (currentQues + 1 < questions.length) {
      setCurrentQues((prevques) => prevques + 1);
    }
    console.log("clicked");
  };
  const prevQuestion = () => {
    if (currentQues >= 1 && currentQues <= questions.length) {
      setCurrentQues((prevques) => prevques - 1);
    }
  };

  const submitQues = async () => {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, { state: qna });
  };

  //calculate percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQues + 1) / questions.length) * 100 : 0;

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>there is an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQues].title}</h1>
          <h4>Question can have multiple answers</h4>

          <Answers
            input
            options={qna[currentQues].options}
            handleChange={handleAnswerChange}
          />
          <Progressbar
            next={nextQuestion}
            prev={prevQuestion}
            progress={percentage}
            submit={submitQues}
          />

          <Miniplayer src={VideoImage} id={id} title={videoTitle} />
        </>
      )}
    </>
  );
};

export default Quiz;
