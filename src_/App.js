import React, { useContext } from "react";
import "./style.css";
import { observer } from "mobx-react";
import Profile from "./Pages/Profile/";
import { StoreContext } from "./Context/context";

const App = observer(() => {
  const store = useContext(StoreContext);
  store.profileStore.getProfile();
  console.log(store.profileStore.profile);
  return (
    <>
      {store.profileStore.loading}
      <Profile />
    </>
  );
});
export default App;
