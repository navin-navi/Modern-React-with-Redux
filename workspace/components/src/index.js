import React from "react";
import ReactDOM from "react-dom";

import faker from "faker";
import ComponentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>WARNING!</h4>
          Are you Sure?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail
          author="Sam"
          timesAgo="Today at 11AM"
          avatar={faker.image.avatar()}
          comment="Nice blog Post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail
          author="Jane"
          timesAgo="Today at 1AM"
          avatar={faker.image.avatar()}
          comment="Excellent Work"
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail
          author="Thor"
          timesAgo="Yesterday at 7PM"
          avatar={faker.image.avatar()}
          comment="One of the Masterpiece I have ever seen"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
