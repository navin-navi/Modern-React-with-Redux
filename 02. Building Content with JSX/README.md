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
