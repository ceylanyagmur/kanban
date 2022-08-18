import React from "react";

const Backlog = () => {
  return (
    <div className="back">
      <div className="back-top">
        <div className="back-title">Backlog</div>
      </div>

      <div className="col-6">
        <div className="col" style={{ backgroundColor: "#C440A1" }}>
          <h1>Twilio integration</h1>

          <h2>
            Create new note via SMS. Support text, audio, links, and media.
          </h2>
        </div>

        <div className="col" style={{ backgroundColor: "green" }}>
          <h1>Markdown support</h1>

          <h2>Markdown shorthand converts to formatting</h2>
          <button className="button" style={{ backgroundColor: "green" }}>
            <h6>Formatting</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Backlog;
