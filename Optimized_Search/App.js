import React, { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const handleSearch = (value) => {
    setText(value);
    const filteredData = filterData.filter((p) =>
      p.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilterData(filteredData);
  };

  const optimizedSearch = useDebounce(handleSearch, 1000);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => {
          setData(res.products);
          setFilterData(res.products);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="search"
        onChange={(e) => optimizedSearch(e.target.value)}
      />
      {text && (
        <table border="1">
          {filterData.map((p) => (
            <tbody>
              <td key={p.id}>{p.title}</td>
            </tbody>
          ))}
        </table>
      )}
    </div>
  );
}

export default App;
