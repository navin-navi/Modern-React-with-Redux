import React from "react";
import ReactDOM from "react-dom";
import ComponentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container">
      <div className="ui comments">
        <ComponentDetail author="Sam" />
        <ComponentDetail author="Jane" />
        <ComponentDetail author="Thor" />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
