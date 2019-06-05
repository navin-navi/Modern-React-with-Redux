import React from "react";
import ReactDOM from "react-dom";

import faker from "faker";
import ComponentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container">
      <div className="ui comments">
        <ComponentDetail
          author="Sam"
          timesAgo="Today at 11AM"
          avatar={faker.image.avatar()}
          comment="Nice blog Post"
        />
        <ComponentDetail
          author="Jane"
          timesAgo="Today at 1AM"
          avatar={faker.image.avatar()}
          comment="Excellent Work"
        />
        <ComponentDetail
          author="Thor"
          timesAgo="Yesterday at 7PM"
          avatar={faker.image.avatar()}
          comment="One of the Masterpiece I have ever seen"
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
