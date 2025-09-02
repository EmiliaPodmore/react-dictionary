import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>
            <span className="first">D</span>
            <span className="second">i</span>
            <span className="third">c</span>
            <span className="fourth">t</span>
            <span className="fifth">i</span>
            <span className="first">o</span>
            <span className="second">n</span>
            <span className="third">a</span>
            <span className="fourth">r</span>
            <span className="fifth">y</span>
          </h1>
        </header>
        <main>
          <Dictionary defaultKeyword="spring" />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://emiliapodmoredev.netlify.app/"
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
