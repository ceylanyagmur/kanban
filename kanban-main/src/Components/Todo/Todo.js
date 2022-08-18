import React from "react";
import "./Todo.css";
const Todo = () => {
  return (
    <div className="back">
      <div className="back-top">
        <div className="back-title">Todo</div>
      </div>
      <div className="col-6">
        <div
          className="col"
          style={{ marginTop: "10px", backgroundColor: "blue" }}
        >
          <h1>Tablet view</h1>
        </div>

        <div className="col" style={{ backgroundColor: "green" }}>
          <h1>Audio recording in note</h1>

          <h2>Show audio in a note and playback UI</h2>
          <button className="button" style={{ backgroundColor: "green" }}>
            Note interface
          </button>
        </div>

        <div className="col" style={{ backgroundColor: "red" }}>
          <h1>Bookmark in note</h1>

          <h2>
            Show rich link UI in a note, and feature to render website
            screenshot.
          </h2>
          <button className="button" style={{ backgroundColor: "red" }}>
            Note interface
          </button>
        </div>

        <div className="col" style={{ backgroundColor: "pink" }}>
          <h1>Image viewer</h1>

          <h2>
            Opens when clicking on the thumbnail in the list or on the image in
            the note x
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Todo;
