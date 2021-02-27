import React from "react";
import { observer } from "mobx-react";
import ProfileIntroSection from "../../Components/Profile/ProfileIntroSection/";
import ProfilePostsSection from "../../Components/Profile/ProfilePostsSection";
@observer
class Profile extends React.Component {
  render() {
    return (
      <>
        <ProfileIntroSection />
        <ProfilePostsSection />
      </>
    );
  }
}

export default Profile;
