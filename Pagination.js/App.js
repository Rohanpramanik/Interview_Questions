import React, { useState, useEffect } from "react";
import "./App.css";

export const ProdComponent = ({ image, name }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <span>{name}</span>
    </div>
  );
};

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products");
      if (!data.ok) {
        throw new Error("some issue with API");
      }
      const jsonData = await data.json();
      setProducts(jsonData.products);
    } catch (error) {
      throw new Error("API call was not happen successfully");
    }
  };

  useEffect(() => {
    fetchData();
    console.log(products);
  }, []);

  const handleClick = (n) => {
    setCurrentPage(n);
  };
  const handleArrowClick = (btnClick) => {
    if (btnClick == "prev") {
      setCurrentPage((n) => n - 1);
    } else {
      setCurrentPage((n) => n + 1);
    }
  };

  const Total_item = products.length - 1;
  const No_of_prod = 5;
  const No_of_Page = Math.ceil(Total_item / No_of_prod);
  const startIndex = currentPage * No_of_prod;
  const endIndex = startIndex + No_of_prod;

  return products.length > 0 ? (
    <div className="App">
      <div>Pagination</div>
      <div style={{ display: "flex" }}>
        {currentPage > 0 && (
          <div onClick={() => handleArrowClick("prev")}>{"<<"}</div>
        )}
        {[...Array(No_of_Page).keys()].map((n) => (
          <div
            key={n}
            className={`page-no ${currentPage === n ? "active" : ""}`}
            onClick={() => handleClick(n)}
          >
            {n}
          </div>
        ))}
        {currentPage !== No_of_Page - 1 && (
          <div onClick={() => handleArrowClick("next")}>{">>"}</div>
        )}
      </div>
      <div className="container">
        {products.slice(startIndex, endIndex).map((p) => (
          <ProdComponent key={p.id} image={p.images[0]} name={p.title} />
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}

export default App;
