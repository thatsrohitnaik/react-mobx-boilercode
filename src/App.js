import React from "react";
import "./style.css";
import { observer } from "mobx-react";

@observer
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!hh|</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

export default App;
