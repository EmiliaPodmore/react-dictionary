import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div className="definition">
        {props.meaning.definition}
        <div className="example">
          <em>{props.meaning.example}</em>
        </div>
      </div>
    </div>
  );
}
