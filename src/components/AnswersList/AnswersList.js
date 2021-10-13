import React from "react";
import AnswersItem from "../AnswersItem/AnswersItem";

const AnswersList = (props) => {
  console.log(props.answers);
  return (
    <ul className="AnswersList">
      {props.answers.map((answer, index) => {
        return <AnswersItem key={index} answer={answer} />;
      })}
    </ul>
  );
};

export default AnswersList;
