import React from "react";
import QuizItem from "../../components/QuizItem/QuizItem";
const QuizList = ({ quizes, remove, edit }) => {
  if (!quizes.length) {
    return <h2>Тесты не найдены</h2>;
  }

  return (
    <div>
      {quizes.map((quiz) => {
        return (
          <QuizItem edit={edit} remove={remove} quiz={quiz} key={quiz.id} />
        );
      })}
    </div>
  );
};

export default QuizList;
