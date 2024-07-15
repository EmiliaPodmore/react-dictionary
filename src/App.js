import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="spring" />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/97316-emilia-podmore"
            target="_blank"
            rel="noreferrer"
          >
            Emilia Podmore
          </a>
          , it is{" "}
          <a
            href="https://github.com/EmiliaPodmore/react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://keyword-react-dictionary.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
