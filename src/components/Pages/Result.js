import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import Analysis from "../Analysis";
import useAnswers from "../hooks/useAnswers";
import Summery from "../Summery";

const Result = () => {
  const { state } = useLocation();
  const qna = state;
  const { id } = useParams();
  console.log(state);

  const { loading, error, answers } = useAnswers(id);

  //score cslculate
  const calculate = () => {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if(option.correct) correctIndexes.push(index2);

        if(qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });
    return score;
  };

  const userScore = calculate();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>there is an error!</div>}
      {!loading && !error && answers.length > 0 && (
        <>
          <Summery score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
};

export default Result;
