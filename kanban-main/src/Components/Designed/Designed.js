import React from "react";
import "./Designed.css";
const Designed = () => {
  return (
    <div className="back">
      <div className="back-top">
        <div className="back-title">Designed</div>
      </div>
      <div className="col-6">
        <div className="col" style={{ backgroundColor: "yellow" }}>
          <h1>Audio recording</h1>

          <h2>Interface for when recording a new audio note</h2>
          <button className="button" style={{ backgroundColor: "yellow" }}>
            New note
          </button>
        </div>

        <div className="col" style={{ backgroundColor: "green" }}>
          <h1>Bookmarking</h1>

          <h2>Interface for when creating a new link note.</h2>
          <button className="button" style={{ backgroundColor: "green" }}>
            New note
          </button>
        </div>
        <div className="col" style={{ backgroundColor: "pink" }}>
          <h1>Mobile home screen</h1>

          <h2>Folders, tags, and notes lists are sorted by recent.</h2>
        </div>
      </div>
    </div>
  );
};

export default Designed;
