// import React and React Dom Libraries
import React from "react";
import ReactDOM from "react-dom";

// create a React Component
const App = () => {
  return (
    <div>
      <label class="label" for="text">
        Enter Name:
      </label>
      <input type="text" id="text" />
      <button style={{ backgroundColor: "red", color: "white" }}>Submit</button>
    </div>
  );
};

// Take the React Component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
