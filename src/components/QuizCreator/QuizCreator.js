import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
const QuizCreator = (props) => {
  const [quiz, setQuiz] = useState({
    title: "",
    category: "",
    id: "",
  });

  const addNewQuiz = (e) => {
    e.preventDefault();
    const newQuiz = {
      ...quiz,
      id: Math.floor(Math.random() * 1000000),
    };
    props.create(newQuiz);
    setQuiz({ title: "", category: "", id: "" });
  };

  return (
    <div className="QuizCreator">
      <form>
        <Input
          value={quiz.title}
          onChange={(event) => setQuiz({ ...quiz, title: event.target.value })}
          styleinput="Input-primary"
          type="text"
          placeholder="Название теста"
        />
        <Input
          value={quiz.category}
          onChange={(event) =>
            setQuiz({ ...quiz, category: event.target.value })
          }
          styleinput="Input-primary"
          type="text"
          placeholder="Название категории"
        />
        <Button type="submit" stylebutton="Primary" onClick={addNewQuiz}>
          Добавить тест
        </Button>
      </form>
    </div>
  );
};

export default QuizCreator;
