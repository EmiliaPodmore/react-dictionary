import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header>Dictionary </header>
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer>
          {" "}
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/97316-emilia-podmore"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emilia Podmore
          </a>
          , it is{" "}
          <a
            href="https://github.com/EmiliaPodmore/react-dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://keyword-react-dictionary.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
