import React, { useContext } from "react";
import { observer } from "mobx-react";
import ProfileIntroSection from "../../Components/Profile/ProfileIntroSection/";
import ProfilePostsSection from "../../Components/Profile/ProfilePostsSection";
import { StoreContext } from "../../Context/context";

const Profile = observer(() => {
  const store = useContext(StoreContext);

  return (
    <>
      <ProfileIntroSection />
      <ProfilePostsSection />
    </>
  );
});

export default Profile;
