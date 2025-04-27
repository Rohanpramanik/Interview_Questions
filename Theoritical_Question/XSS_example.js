import React, { useState } from "react";
import DOMPurify from "dompurify";

function App() {
  const [input, setInput] = useState("");
  const [safeHtml, setSafeHtml] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    // Sanitize the input before rendering it
    const cleanInput = DOMPurify.sanitize(input);
    setSafeHtml(cleanInput);
  };

  return (
    <div className="App">
      <h1>XSS Protection with DOMPurify</h1>
      <textarea
        value={input}
        onChange={handleChange}
        placeholder="Type something (try <script>alert('XSS')</script>)"
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <h2>Sanitized Output:</h2>
        <div dangerouslySetInnerHTML={{ __html: safeHtml }} />
      </div>
    </div>
  );
}

export default App;
