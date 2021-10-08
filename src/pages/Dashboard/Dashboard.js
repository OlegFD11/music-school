import React, { useState, useMemo, useEffect } from "react";
import "./Dashboard.scss";
import QuizList from "../../components/QuizList/QuizList";
import Button from "../../components/UI/Button/Button";
import QuizCreator from "../../components/QuizCreator/QuizCreator";
import QuizQuestionCreator from "../../components/QuizQuestionCreator/QuizQuestionCreator";
import QuizFilter from "../../components/QuizFilter/QuizFilter";
import Popup from "../../components/Popup/Popup";
import axios from "../../axios/axios-quiz";
import QuizEditor from "../../components/QuizEditor/QuizEditor";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDKUWv_Iw-N7AUc7NChSnWHBaiBFaPt3kk",
  authDomain: "react-quiz-logol.firebaseapp.com",
  databaseURL: "https://react-quiz-logol-default-rtdb.firebaseio.com",
  projectId: "react-quiz-logol",
  storageBucket: "react-quiz-logol.appspot.com",
  messagingSenderId: "1037436650260",
  appId: "1:1037436650260:web:6257bd378b7a6d8efeb801",
  measurementId: "G-Y52RGTMW7G",
};

const fireApp = initializeApp(firebaseConfig);

function removeQuizesData(userId) {
  const db = getDatabase();
  set(ref(db, "quizes/" + userId), {});
}

const Dashboard = () => {
  const [quizes, setQuizes] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });

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

  function writeUserData(userId, chancheQuiz) {
    const db = getDatabase();
    set(ref(db, "quizes/" + userId), {
      title: chancheQuiz.title,
      category: chancheQuiz.title,
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
      id: newQuiz.id,
    };
    try {
      writeUserData(data.id, data);
    } catch (e) {
      console.log(e);
    }
  };

  const removeQuiz = (quiz) => {
    setQuizes(quizes.filter((q) => q.id !== quiz.id));
    removeQuizesData(quiz.id);
  };

  const [currentQuiz, setCurrentQuiz] = useState();
  const editQuiz = (quiz) => {
    setCurrentQuiz(quiz);
    setActiveModalContent("updateQuiz");
    setActive(true);
  };

  const changeQuiz = (chancheQuiz) => {
    writeUserData(chancheQuiz.id, chancheQuiz);
    setQuizes(
      quizes.map((quiz) => (quiz.id === chancheQuiz.id ? chancheQuiz : quiz))
    );
    setCurrentQuiz(chancheQuiz);
    setActive(false);
  };
  // questions

  const addQuestions = (quiz) => {
    setCurrentQuiz(quiz);
    setActiveModalContent("createQuestion");
    setActive(true);
  };

  const createQuestion = (newQuestion) => {
    console.log(newQuestion);
    setActive(false);
  };

  const [active, setActive] = useState(false);

  const [activeModalContent, setActiveModalContent] = useState("");

  return (
    <div className="Dashboard">
      <div className="Dashboard-header">
        <h2 className="Dashboard-title">Dashboard</h2>
        <div className="Dashboard-controls">
          <Button
            stylebutton="Primary"
            onClick={() => {
              setActive(true);
              setActiveModalContent("createQuiz");
            }}
          >
            Создать тест
          </Button>
        </div>
      </div>
      <div className="Dashboard-list">
        <Popup active={active} setActive={setActive}>
          {activeModalContent === "createQuiz" ? (
            <QuizCreator create={createQuiz} />
          ) : null}
          {activeModalContent === "updateQuiz" ? (
            <QuizEditor updateQuiz={currentQuiz} changeQuiz={changeQuiz} />
          ) : null}
          {activeModalContent === "createQuestion" ? (
            <QuizQuestionCreator createQuestion={createQuestion} />
          ) : null}
        </Popup>

        <hr />
        <QuizFilter filter={filter} setFilter={setFilter} />
        <QuizList
          remove={removeQuiz}
          edit={editQuiz}
          quizes={sortedAndSearchedQuizes}
          addQuestions={addQuestions}
        />
      </div>
    </div>
  );
};

export default Dashboard;
