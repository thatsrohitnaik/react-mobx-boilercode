import React from "react";
import ReactDOM from "react-dom";
import ProfileStore from "./Store/ProfileStore";

import App from "./App";

const store = {
  profileStore: new ProfileStore()
};

ReactDOM.render(<App store={store} />, document.getElementById("root"));
