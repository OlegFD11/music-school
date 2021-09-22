import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
const QuizEditor = (props) => {
  const [quiz, setQuiz] = useState(props.updateQuiz);

  const addNewQuiz = (e) => {
    e.preventDefault();
    const newQuiz = {
      ...quiz,
    };
    props.create(newQuiz);
    setQuiz({ title: "", category: "" });
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
        <Button type="submit" stylebutton="Primary">
          Добавить тест
        </Button>
      </form>
    </div>
  );
};

export default QuizEditor;
