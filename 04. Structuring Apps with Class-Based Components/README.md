# Structuring Apps with Class-Based Components

`create-react-app seasons --use-npm` to create a new app for seasons and location based app.
Initial React setup done for the App.

Get User location using the below window api.

```js
window.navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.log(err)
);
```

> **S03L48 Getting a Users Physical Location**

Used Class Method for declaring React Component

```js
class App extends React.Component {
  render() {}
}
```

Using State System with constructors.

```js
constructor(props) {
    super(props);

    this.state = { lat: null };
  }
```

Set new values to the state and update the render when new state value is assigned.

```js
this.setState({ lat: position.coords.latitude });
```

> **S03L54 Updating State Properties**

Added Conditional Redering.

```jsx
render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude : {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
```

> **S03L57 Conditionally Rendering Content**
