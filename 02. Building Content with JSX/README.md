# Building Content with JSX

Learned more about JSX and how the syntax works.

A simple example is shown below,

**React Component written in JSX**

```jsx
const App = () => {
  return (
    <div>
      <h1>React First Impression</h1>
    </div>
  );
};
```

**Equivalent code that gets converted to Javascript during compilation**

Can be viewed with [Babel Repl](https://babeljs.io/repl)

```js
var App = function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "React First Impression")
  );
};
```

Learned about the difference between `JSX` and `HTML`.

**HTML Code**

```html
<div>
  <label class="label" for="text">Enter Name:</label>
  <input type="text" id="text" />
  <button style="background-color: red; color: white">Submit</button>
</div>
```

Got Error `Line 11: Style prop value must be an object react/style-prop-object`

**JSX Equivalent Code**

```jsx
<div>
  <label className="label" for="text">
    Enter Name:
  </label>
  <input type="text" id="text" />
  <button style={{ backgroundColor: "red", color: "white" }}>Submit</button>
</div>
```

- Converted `style="background-color: red; color: white"` to `style={{ backgroundColor: "red", color: "white" }}`.
- Converted `class` to `className`.

Referencing the JS variable within JSX

```jsx
const App = () => {
  // Javascript Variable
  const buttonText = "Click Me";

  return (
    <div>
      <label className="label" for="text">
        Enter Name:
      </label>
      <input type="text" id="text" />
      // Referencing the JS variable using {} inside the button text area
      <button style={{ backgroundColor: "red", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};
```

Referencing the JS Function within JSX

```jsx
// Javascript Function
function getButton() {
  return "Click Me";
}

// create a React Component
const App = () => {
  return (
    <div>
      <label className="label" for="text">
        Enter Name:
      </label>
      <input type="text" id="text" />
      // Referencing the JS Function using {} inside the button text area
      <button style={{ backgroundColor: "red", color: "white" }}>
        {getButton()}
      </button>
    </div>
  );
};
```

**Watch Out when referencing JS Objects with in JSX**

**String, Number and Array** can be passed without any issues

```jsx
const App = () => {
  const buttonText = { text: "Click Me" };
  const labelText = "Enter Name:";

  return (
    <div>
      <label className="label" for="text">
        {labelText} // Note
      </label>
      <input type="text" id="text" />
      // JSX cannot reference a JS Object - Wrong Syntax
      <button style={{ backgroundColor: "red", color: "white" }}>
        {buttonText}
      </button>
      // Correct Syntax
      <button style={{ backgroundColor: "red", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};
```

Console Log Error

```js
Warning: Invalid DOM property `for`. Did you mean `htmlFor`?
    in label (at src/index.js:12)
    in div (at src/index.js:11)
    in App (at src/index.js:24)
```

Can be solved by changing `for` with `htmlFor` in JSX

```jsx
const App = () => {
  const buttonText = { text: "Click Me" };
  const labelText = "Enter Name:";

  return (
    <div>
      // <label className="label" for="text">
      <label className="label" htmlFor="text">
        {labelText}
      </label>
      <input type="text" id="text" />
      <button style={{ backgroundColor: "red", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};
```

**Challenge 1 - Get Current Time**

```html
<script type="text/babel" data-presets="env,react">
  function getTime() {
    return new Date().toLocaleTimeString();
  }

  // Creates a functional component
  const App = () => {
    return (
      <div>
        <div>Current Time:</div>
        <h3>{getTime()}</h3>
      </div>
    );
  };

  // Renders the App component into a div with id 'root'
  ReactDOM.render(<App />, document.querySelector("#root"));
</script>

<!--The App component above will be rendered into this-->
<div id="root"></div>

<!--No need to change anything after this line!-->
<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

> **Final Code**

```jsx
// import React and React Dom Libraries
import React from "react";
import ReactDOM from "react-dom";

// create a React Component
const App = () => {
  const buttonText = { text: "Click Me" };
  const labelText = "Enter Name:";

  return (
    <div>
      <label className="label" htmlFor="text">
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
```

> **Final Snap**

![React Section 2 Complete](../assets/ReactS02Final.PNG)
