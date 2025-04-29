import React, { useState, useEffect } from "react";
import "./App.css";

//Added both basic and advanced version of infinite scrolling
// Initially, you can implement basic scrolling so that later the interviewer can ask for changes to make it an advanced version.


//Basic infinite scrolling
export default function App() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      
      // when you want to some buffer like 100px I have added here then only use 'document.body.offsetHeight'
      // else use document.documentElement.scrollHeight because offsetHeight didn't give accurate height'
      //if ( window.innerHeight + window.scrollY >= document.documentElement.scrollHeight )
      
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        setCount((prev) => prev + 50);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let element = [];

  for (let i = 0; i < count; i++) {
    element.push(<div key={i + 1}>{i + 1}</div>);
  }

  return (
    <div className="App">
      <div>{element}</div>
    </div>
  );
}

//Advnced and otimized infinite scrolling
export const App2=()=> {
  const [count, setCount] = useState(50);

  useEffect(() => {
    let timerCount = 0;

    //check you are near to bottom of your content or not
    const nearToBottom = () => {
      return (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
      );
    };

    //based on poition and timer add more content
    //if the timer end and your are near to end of your content add more content
    const handleScroll = () => {
      if (timerCount) clearTimeout(timerCount);
      timerCount = setTimeout(() => {
        if (nearToBottom()) {
          setCount((prev) => prev + 50);
        }
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    //clean up all the listener or timer
    return () => {
      if (timerCount) clearTimeout(timerCount);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let element = [];

  for (let i = 0; i < count; i++) {
    element.push(<div key={i + 1}>{i + 1}</div>);
  }

  return (
    <div className="App">
      <div>{element}</div>
    </div>
  );
}



