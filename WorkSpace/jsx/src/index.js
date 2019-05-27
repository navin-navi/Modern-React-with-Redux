// import React and React Dom Libraries
import React from "react";
import ReactDOM from "react-dom";

// create a React Component
const App = () => {
  return <div>
    <h1>Hi There I am Excited</h1>
  </div>;
};

// Take the React Component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
