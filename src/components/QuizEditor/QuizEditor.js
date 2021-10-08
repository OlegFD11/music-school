import React, { useState, useEffect } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
const QuizEditor = (props) => {
  const [quiz, setQuiz] = useState(props.updateQuiz);

  useEffect(() => {
    setQuiz(props.updateQuiz);
  }, [props]);

  const serverQuiz = (e) => {
    e.preventDefault();
    props.changeQuiz(quiz);
  };

  return (
    <div className="QuizCreator">
      <form>
        <Input
          value={quiz.title || ""}
          onChange={(event) => setQuiz({ ...quiz, title: event.target.value })}
          styleinput="Input-primary"
          type="text"
          placeholder="Название теста"
        />
        <Input
          value={quiz.category || ""}
          onChange={(event) =>
            setQuiz({ ...quiz, category: event.target.value })
          }
          styleinput="Input-primary"
          type="text"
          placeholder="Название категории"
        />
        <Button type="submit" stylebutton="Primary" onClick={serverQuiz}>
          Обновить тест
        </Button>
      </form>
    </div>
  );
};

export default QuizEditor;
