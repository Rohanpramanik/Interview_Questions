import React, { useState, useEffect, useRef } from "react";
import useDebounce from "./useDebounce";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const timer = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timer.current = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer.current);
    };
  }, [isRunning]);

  const handlebtn = (value) => {
    if (value === "pause") {
      setIsRunning(false);
    } else if (value === "reset") {
      setIsRunning(false); // it will stop the timer
      setCounter(0);    //reset the timer t 0
    } else if (value === "resume") {
      setIsRunning(true);
    }
  };

  return (
    <div className="App">
      <div>{counter}</div>
      <button className="btn pause-btn" onClick={() => handlebtn("pause")}>
        Pause
      </button>
      <button className="btn resume-btn" onClick={() => handlebtn("resume")}>
        Resume
      </button>
      <button className="btn reset-btn" onClick={() => handlebtn("reset")}>
        Reset
      </button>
    </div>
  );
}

export default App;
