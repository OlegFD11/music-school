import axios from "axios";

export default axios.create({
  baseURL: "https://react-quiz-logol-default-rtdb.firebaseio.com/",
});
