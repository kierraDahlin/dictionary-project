import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  // console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="meaning-single" key={index}>
            <div>
              <p>
                <strong>{definition.definition}</strong>{" "}
              </p>

              <p className="meaning-example">
                <em>{definition.example}</em>
              </p>

              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
