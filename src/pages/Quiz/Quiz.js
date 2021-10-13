import React, { useState } from "react";
import "./Quiz.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

export default function Quiz() {
  const [quiz, setQuiz] = useState([
    {
      question: "How color sky",
      answers: [
        { text: "Black", id: 1 },
        { text: "Red", id: 2 },
        { text: "White", id: 3 },
        { text: "Blue", id: 4 },
      ],
    },
  ]);

  console.log(quiz);

  return (
    <div className="Quiz">
      <div>
        <ActiveQuiz question={quiz[0].question} answers={quiz[0].answers} />
      </div>
    </div>
  );
}
