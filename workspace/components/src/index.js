import React from "react";
import ReactDOM from "react-dom";
import ComponentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container">
      <div className="ui comments">
        <ComponentDetail />
        <ComponentDetail />
        <ComponentDetail />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
