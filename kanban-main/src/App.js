import React from "react";

import "./App.css";
import Backlog from "./Components/Backlog/Backlog";
import Navbar from "./Components/Navbar/Navbar";
import Todo from "./Components/Todo/Todo";
import Inprogress from "./Components/Inprogress/Inprogress";
import Designed from "./Components/Designed/Designed";

function App() {
  return (
    <div className="app">
                <Navbar />

      <div className="row">

        <div className="col-3">
          <Backlog />
        </div>

        <div className="col-3">
          <Todo />
        </div>
        <div className="col-3">
          <Inprogress />
        </div>

        <div className="col-3">
          <Designed />
        </div>
      </div>
    </div>
  );
}
export default App;
