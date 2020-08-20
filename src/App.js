import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [mathProblem, setMathProblem] = useState("plus");
  // const [mathSymbol, setMathSymbol] = useState("+");
  const [maxNum, setMaxNum] = useState(10);
  const [firstNum, setFirstNum] = useState(0);
  const [secNum, setSecNum] = useState(0);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("Click Next");

  // changes the symbol displayed in between the two numbers depending on the value of mathProblem
  const ProblemSymbol = () => {
    if (mathProblem === "plus") {
      return "+";
    } else {
      return "-";
    }
  };

  const chnageSymbol = (e) => {
    e.preventDefault();
    setMathProblem(e.target.value);
    generateNums()
  };

  // sets the users answer in state and changes the message to display depending on whether the user was correct or not
  // checks to see if the problem is plus or minus
  const userAnswer = (e) => {
    e.preventDefault();
    setAnswer(parseInt(e.target[0].value));

    if (mathProblem === "plus") {
      if (answer === firstNum + secNum) {
        setMessage("Correct!  You are the best!");
      } else {
        setMessage("Not quite, try again!");
      }
    } else {
      if (answer === firstNum - secNum) {
        setMessage("Correct!  You are the best!");
      } else {
        setMessage("Not quite, try again!");
      }
    }
  };

  // Generates numbers randomly when user clicks "Next", user can defines maxNum
  const generateNums = () => {
    const initialNum = Math.floor(Math.random() * maxNum + 1);
    const secondNum = Math.floor(Math.random() * maxNum + 1);
    
    // checks to see if the user is doing subtraction and always puts the largest number on top to avoid negative numbers
    // if addition, sets values as normal
    if (mathProblem === "minus" && initialNum > secondNum) {
      setFirstNum(initialNum)
      setSecNum(secondNum)
    } else {
      setFirstNum(secondNum);
      setSecNum(initialNum);
    }

    setAnswer("");
    setMessage("Try a number");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Math Learner</h1>
      </header>
      {/* Initial problem setup selectors */}
      <div>
        <h5>Select Math Problem</h5>
      </div>
      <div>
        <label>
          Select Math Problem |
          <button onClick={(e) => chnageSymbol(e)} value="plus">
            +
          </button>
          <button value="minus" onClick={(e) => chnageSymbol(e)}>
            -
          </button>
        </label>
      </div>
      <br />
      <div>
        <div>
          <label>
            Set Max Number |{" "}
            <input
              name="maxNumber"
              value={maxNum}
              // chnages state when user changes number
              onChange={(e) => setMaxNum(parseInt(e.target.value))}
            ></input>
          </label>
        </div>
      </div>
      {/* Answers displayed here */}
      <div>
        <h3>{firstNum}</h3>
        <h3>
          <ProblemSymbol />
        </h3>
        <h3>{secNum}</h3>
        <h3>{message}</h3>
      </div>
      {/* Answer form for user to submit answers and load the next math problem */}
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
