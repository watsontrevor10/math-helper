import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [mathProblem, setMathProblem] = useState("plus")
  const [maxNum, setMaxNum] = useState(10);
  const [firstNum, setFirstNum] = useState(0);
  const [secNum, setSecNum] = useState(0);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("Click Next");

  const changeMaxNum = (e) => {
    e.preventDefault();
    setMaxNum(parseInt(e.target[0].value));
  };

  const userAnswer = (e) => {
    e.preventDefault();
    setAnswer(parseInt(e.target[0].value));
    console.log(e.target[0].value);

    if (answer === firstNum + secNum) {
      setMessage("Correct!  You are the best!");
    } else {
      setMessage("Not quite, try again!");
    }
  };

  const generateNums = () => {
    setFirstNum(Math.floor(Math.random() * maxNum + 1));
    setSecNum(Math.floor(Math.random() * maxNum + 1));
    setAnswer("");
    setMessage("Try a number");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Math Learner</h1>
      </header>
      <div>
        <h5>Select Math Problem</h5>
      </div>
      <div>
        <label>
          Select Math Problem {" "} | {" "}
          <button>+</button>
          <button>-</button>
        </label>
      </div>
      <br/>
      <div>
        <div>
          <label>
            Set Max Number | {" "}
            <input
              name="maxNumber"
              value={maxNum}
              onChange={(e) => setMaxNum(parseInt(e.target.value))}
            ></input>
          </label>
        </div>
      </div>
      <div>
        <h3>{firstNum}</h3>
        <h3>+</h3>
        <h3>{secNum}</h3>
        <h3>{message}</h3>
      </div>
      <div>
        <form onSubmit={(e) => userAnswer(e)}>
          <label>
            Answer:{" "}
            <input
              name="answer"
              id="name"
              value={answer}
              onChange={(e) => setAnswer(parseInt(e.target.value))}
            ></input>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={() => generateNums()}>Next</button>
      </div>
    </div>
  );
};

export default App;
