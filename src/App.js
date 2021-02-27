import React from "react";
import "./style.css";
import { observer } from "mobx-react";
import Profile from "./Pages/Profile/";

@observer
class App extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <>
        <div>
          <h1>Hello StackBlitz!"hh|</h1>
          <p>Start editing to see some magic happen :)</p>
        </div>
        <Profile store={store} />
      </>
    );
  }
}

export default App;
