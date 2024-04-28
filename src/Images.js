import React from "react";
import "./Images.css";

export default function Images(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Images">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                {" "}
                <a href={photo.src.original} target="_blank" alt="keyword">
                  <img src={photo.src.landscape} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
