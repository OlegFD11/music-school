import React, { useState, useMemo, useEffect } from "react";
import "./Dashboard.scss";
import QuizList from "../../components/QuizList/QuizList";
import Button from "../../components/UI/Button/Button";
import QuizCreator from "../../components/QuizCreator/QuizCreator";
// import QuizQuestionCreator from "../../components/QuizQuestionCreator/QuizQuestionCreator";
import QuizFilter from "../../components/QuizFilter/QuizFilter";
import Popup from "../../components/Popup/Popup";
import axios from "../../axios/axios-quiz";
import firebase from "firebase";

const Dashboard = () => {
  const [quizes, setQuizes] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [active, setActive] = useState(false);

  // const createQuestion = () => {};

  // const addQuestion = (quiz) => {
  //   console.log("test");

  //   let searchTerm = quiz.id;
  //   setQuestions;

  //   // let currentTerm = quizes.find((quiz) => quiz.id === searchTerm);
  //   // console.log(currentTerm);
  //   // setCurentQuiz(...currentQuiz, { currentQuiz: currentTerm.id });

  //   // const newQuiz = quizes.map((quizItem) => {
  //   //   if (quizItem === quiz.id) {
  //   //     quizItem.questions.push({ test: "test" });
  //   //   }
  //   // });
  // };

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("/quizes.json")
      .then((response) => {
        const { data } = response;
        let quizes = [];
        Object.entries(data).forEach(([key, value]) => {
          quizes.push({ id: key, ...value });
        });
        setQuizes(quizes);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const sortedQuizes = useMemo(() => {
    if (filter.sort) {
      return [...quizes].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return quizes;
  }, [filter.sort, quizes]);

  const sortedAndSearchedQuizes = useMemo(() => {
    return sortedQuizes.filter((quiz) =>
      quiz.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedQuizes]);

  const createQuiz = async (newQuiz) => {
    setQuizes([...quizes, newQuiz]);
    setActive(false);

    const data = {
      title: newQuiz.title,
      category: newQuiz.category,
    };

    try {
      await axios.post("/quizes.json", data);
    } catch (e) {
      console.log(e);
    }
  };

  const removeQuiz = (quiz) => {
    setQuizes(quizes.filter((q) => q.id !== quiz.id));
  };

  const editQuiz = (quiz) => {
    console.log(quiz.id);
  };

  return (
    <div className="Dashboard">
      <div className="Dashboard-header">
        <h2 className="Dashboard-title">Dashboard</h2>
        <div className="Dashboard-controls">
          <Button stylebutton="Primary" onClick={() => setActive(true)}>
            Создать тест
          </Button>
        </div>
      </div>
      <div className="Dashboard-list">
        <Popup active={active} setActive={setActive}>
          <QuizCreator create={createQuiz} />
        </Popup>
        <hr />
        <QuizFilter filter={filter} setFilter={setFilter} />
        <QuizList
          remove={removeQuiz}
          edit={editQuiz}
          quizes={sortedAndSearchedQuizes}
        />
      </div>
    </div>
  );
};

export default Dashboard;
