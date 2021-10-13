import React from "react";
import AnswersList from "../AnswersList/AnswersList";
const ActiveQuiz = (props) => {
  return (
    <div className="activeQuiz">
      <p>
        <span>
          <strong>2.</strong>
          {props.question}
        </span>
        <small>4 of 12</small>
      </p>
      <AnswersList answers={props.answers} />
    </div>
  );
};

export default ActiveQuiz;
