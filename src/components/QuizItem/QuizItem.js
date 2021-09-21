import React from "react";
import "./QuizItem.scss";
import Button from "../UI/Button/Button";

const QuizItem = (props) => {
  return (
    <div className="QuizItem" id={props.quiz.id}>
      <div className="QuizItem-titles">
        <span>{props.quiz.title}</span>
        <span>{props.quiz.category}</span>
      </div>
      <div className="QuizItem-controls">
        <Button
          stylebutton="Primary"
          onClick={() => {
            props.edit(props.quiz);
          }}
        >
          Редактировать
        </Button>
        <Button stylebutton="Primary" onClick={() => props.remove(props.quiz)}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default QuizItem;
