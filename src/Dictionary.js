import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Images from "./Images";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }
  function handleImageResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }
  function search() {
    //documentation: https://api.shecodes.io/dictionary/v1/define?word=book&key=97ca3fd7c1847b8c2t8cf2o00a730a3a
    let apiKey = "97ca3fd7c1847b8c2t8cf2o00a730a3a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
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
        <div className="Search-bar">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              placeholder="Suggestions: Autumn, Bonsai, Conundrum..."
            />
          </form>
        </div>
        <Results results={results} />
        <Images photos={photos} />
      </div>
    );
  } else {
    load();
    return;
  }
}
