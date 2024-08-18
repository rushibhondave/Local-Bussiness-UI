import React from "react";
import './WordLoading.css'
function WordLoading() {
  return (
    <>
      <div className="container-loader">
        <div className="spinner">
          <div className="cube" />
          <div className="cube" />
          <div className="cube" />
          <div className="cube" />
          <div className="text-container">
            <div className="letters">
              <span>L</span>
              <span>O</span>
              <span>A</span>
              <span>D</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="loading-text">wait please</div>
      </div>
    </>
  );
}

export default WordLoading;
