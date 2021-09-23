import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import ProfileIntroSection from '../../Components/Profile/ProfileIntroSection/';
import ProfilePostsSection from '../../Components/Profile/ProfilePostsSection';
import { StoreContext } from '../../Context/context';

const Profile = observer((props) => {
  useEffect(() => {
    // getProfileFromStore();
    store.profileStore.getProfile();
    console.log(store.profileStore.profile);
  }, []);

  const store = useContext(StoreContext);

  //  console.log(store);

  const {
    profileStore: { getProfile, profile },
  } = store;

  const getProfileFromStore = () => getProfile();

  if (info != null && posts != null) {
    return (
      <>
        <ProfileIntroSection info={info} />
        <ProfilePostsSection posts={posts} />
      </>
    );
  }

  return null;
});

export default Profile;
