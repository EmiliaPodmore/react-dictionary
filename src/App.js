import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          Dictionary
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/123/700/original/search.gif?1713527221"
            alt="Animated cartoon book"
          ></img>
        </header>
        <main>
          <Dictionary defaultKeyword="spring" />
        </main>
        <footer>
          Animated icons created by{" "}
          <a
            href="https://www.flaticon.com/free-animated-icons/ethics"
            title="ethics animated icons"
          >
            Freepik - Flaticon
          </a>
          <br /> This project was coded by{" "}
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
          >
            hosted on Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
