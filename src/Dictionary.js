import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }
  function search() {
    //documentation: https://api.shecodes.io/dictionary/v1/define?word=book&key=97ca3fd7c1847b8c2t8cf2o00a730a3a
    let apiKey = "97ca3fd7c1847b8c2t8cf2o00a730a3a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a word..."
              autoFocus={true}
              onChange={handleKeywordChange}
            />
          </form>
          <div className="suggestion">
            <small>suggestions: Autumn, Bonsai, Conundrum...</small>
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return;
  }
}
