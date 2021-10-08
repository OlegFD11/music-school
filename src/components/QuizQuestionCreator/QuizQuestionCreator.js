import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
const QuizQuestionCreator = (props) => {
  const [question, setQuestion] = useState({
    title: "",
    rightAnswer: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  const addQuestions = (e) => {
    e.preventDefault();
    const newQuestion = {
      ...question,
      id: Math.floor(Math.random() * 1000 * 100),
    };
    setQuestion({
      title: "",
      rightAnswer: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    });
    props.createQuestion(newQuestion);
  };

  return (
    <div className="QuizQuestionCreator">
      <form>
        <Input
          value={question.title}
          onChange={(event) =>
            setQuestion({ ...question, title: event.target.value })
          }
          styleinput="Input-primary"
          type="text"
          placeholder="Вопрос"
        />
        <Input
          value={question.option1}
          onChange={(event) =>
            setQuestion({ ...question, option1: event.target.value })
          }
          styleinput="Input-primary"
          type="text"
          placeholder="Вариант 1"
        />
        <Input
          value={question.option2}
          onChange={(event) =>
            setQuestion({ ...question, option2: event.target.value })
          }
          styleinput="Input-primary"
          type="text"
          placeholder="Вариант 2"
        />
        <Input
          value={question.option3}
          onChange={(event) =>
            setQuestion({ ...question, option3: event.target.value })
          }
          styleinput="Input-primary"
          type="text"
          placeholder="Вариант 3"
        />
        <Input
          value={question.option4}
          onChange={(event) =>
            setQuestion({ ...question, option4: event.target.value })
          }
          styleinput="Input-primary"
          type="text"
          placeholder="Вариант 4"
        />
        <Input
          value={question.rightAnswer}
          onChange={(event) =>
            setQuestion({ ...question, rightAnswer: event.target.value })
          }
          styleinput="Input-primary"
          type="text"
          placeholder="Правильный ответ"
        />

        <Button type="submit" stylebutton="Primary" onClick={addQuestions}>
          Добавить вопрос
        </Button>
      </form>
    </div>
  );
};

export default QuizQuestionCreator;
