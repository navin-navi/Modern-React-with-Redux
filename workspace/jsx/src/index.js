// import React and React Dom Libraries
import React from "react";
import ReactDOM from "react-dom";

// create a React Component
const App = () => {
  const buttonText = { text: "Click Me" };
  const labelText = "Enter Name:";

  return (
    <div>
      <label className="label" for="text">
        {labelText}
      </label>
      <input type="text" id="text" />
      <button style={{ backgroundColor: "red", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the React Component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
