import React from "react";
import "./Inprogress.css";

const Inprogress = () => {
  return (
    <div className="back">
      <div className="back-top">
        <div className="back-title">Inprogress</div>
      </div>
      <div className="col-6">
        <div className="col" style={{ backgroundColor: "yellow" }}>
          <h1>Mobile view</h1>

          <h2>
            Functions for both web responsive and native apps. Note: Android and
            iOS will need unique share icons.
          </h2>
        </div>

        <div className="col" style={{ backgroundColor: "green" }}>
          <h1>Desktop view</h1>

          <h2>
            PWA for website and native apps. Note: Windows and Mac will need
            unique share icons.
          </h2>
        </div>
        <div className="col" style={{ backgroundColor: "pink" }}>
          <h1>Formatting options</h1>

          <h2>
            Mobile formatting bar expands and collapses when tapping the format
            icon.
          </h2>
        </div>
      </div>
      <div className="col" style={{ backgroundColor: "red" }}>
        <h1>Media in note </h1>

        <h2>Image & video with player UI</h2>
        <button className="button" style={{ backgroundColor: "red" }}>
          <h6>Note interface</h6>
        </button>
      </div>
    </div>
  );
};

export default Inprogress;
