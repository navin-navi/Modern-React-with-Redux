# Building Content with JSX

Learned more about JSX and how the syntax works.

A simple example is shown below,

**React Component written in JSX**

```js
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

```js
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

```js
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

```js
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
