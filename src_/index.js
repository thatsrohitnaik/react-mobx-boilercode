import React from "react";
import ReactDOM from "react-dom";
import ProfileStore from "./Store/ProfileStore";
import { StoreContext } from "./Context/context";
import App from "./App";

const store = {
  profileStore: new ProfileStore()
};

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);
