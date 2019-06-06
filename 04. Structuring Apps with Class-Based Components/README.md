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
