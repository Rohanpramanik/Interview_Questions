import React, { useState } from "react";
import "./App.css";
import Profile from './Components/Profile';
import Interest from "./Components/Interest";
import Setting from "./Components/Setting";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState({
    name: "rohan",
    age: 24,
    email: "rohan@com",
    interest: ["cricket", "javascript", "music"],
    theme: ["dark", "light"],
  });

  const tab = [
    {
      tabName: "Profile",
      component: Profile,
    },
    {
      tabName: "Interest",
      component: Interest,
    },
    {
      tabName: "Setting",
      component: Setting,
    },
  ];

  const handleTabChange = (i) => {
    setActiveIndex(i);
  };

  const ActiveTab = tab[activeIndex].component;

  const handleSubmit = () => {
    //you can write your logic what you want in submit ex-post call
    console.log("submitted data");
  };

  return (
    <div className="App">
      <div>Tab Form</div>
      <div className="tab-container">
        {tab.map((tab, index) => (
          <div
            key={index}
            className="tab-header"
            onClick={() => handleTabChange(index)}
          >
            {tab.tabName}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTab data={data} setData={setData} />
      </div>
      <div>
        {activeIndex > 0 && (
          <button onClick={() => setActiveIndex((prev) => prev - 1)}>
            prev
          </button>
        )}
        {activeIndex < tab.length - 1 && (
          <button onClick={() => setActiveIndex((prev) => prev + 1)}>
            next
          </button>
        )}
        {activeIndex == tab.length - 1 && (
          <button onClick={handleSubmit}>submit</button>
        )}
      </div>
    </div>
  );
}

export default App;
