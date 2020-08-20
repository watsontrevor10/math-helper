import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./App.css";

const App = () => {
  const [mathProblem, setMathProblem] = useState("plus");
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
    generateNums();
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
      setFirstNum(initialNum);
      setSecNum(secondNum);
    } else {
      setFirstNum(secondNum);
      setSecNum(initialNum);
    }

    setAnswer("");
    setMessage("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Math Helper</h1>
      </header>

      {/* Initial problem setup selectors */}
      <div className="Main-cont">
        <div className="Selector-cont">
          <div>
            <IconContext.Provider value={{ size: "6em" }}>
              <label>
                Addition or Subtraction?
                <br />
                <button
                  onClick={(e) => chnageSymbol(e)}
                  value="plus"
                  className="Plus-button"
                >
                  <FaPlus />
                </button>
              </label>
              <button
                value="minus"
                onClick={(e) => chnageSymbol(e)}
                className="Minus-button"
              >
                <FaMinus />
              </button>
            </IconContext.Provider>
          </div>
          <br />
          <div>
            <div>
              <label>
                Max Number{" "}
                <input
                  name="maxNumber"
                  value={maxNum}
                  // chnages state when user changes number
                  onChange={(e) => setMaxNum(parseInt(e.target.value))}
                ></input>
              </label>
            </div>
          </div>
        </div>

        <hr />
        <div className="Results-cont">
          {/* Answers displayed here */}
          <div className="Results">
            <div className="Answers-cont">
              <h2>{firstNum}</h2>
              <h2>
                <ProblemSymbol />
              </h2>
              <h2>{secNum}</h2>
              <h2>=</h2>
            </div>
          </div>
          {/* Answer form for user to submit answers and load the next math problem */}
          <div className="Submit-cont">
            <form onSubmit={(e) => userAnswer(e)}>
              <input
                name="answer"
                id="name"
                placeholder="Answer"
                value={answer}
                onChange={(e) => setAnswer(parseInt(e.target.value))}
              ></input>
              <br />
              <input type="submit" value="Submit" className="Submit-button" />
              <button onClick={() => generateNums()} className="Submit-button">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3 className="Message">{message}</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
