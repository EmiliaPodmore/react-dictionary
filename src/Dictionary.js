import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    //documentation: https://api.shecodes.io/dictionary/v1/define?word=book&key=97ca3fd7c1847b8c2t8cf2o00a730a3a
    let apiKey = "97ca3fd7c1847b8c2t8cf2o00a730a3a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word..."
          autoFocus={true}
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
