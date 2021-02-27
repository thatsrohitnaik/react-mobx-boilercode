import React from "react";
import { observer } from "mobx-react";
import ProfileIntro from "./Components/Profile/ProfileIntro/";

@observer
class Profile extends React.Component {
  render() {
    return (
      <>
        <ProfileIntro />
      </>
    );
  }
}

export default Profile;
