import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import ProfileIntroSection from '../../Components/Profile/ProfileIntroSection/';
import ProfilePostsSection from '../../Components/Profile/ProfilePostsSection';
import { StoreContext } from '../../Context/context';

const Profile = observer((props) => {
  const [profile, setProfile] = React.useState({});
  useEffect(async () => {
    // getProfileFromStore();
    await store.profileStore.getProfile();
    store.profileStore.getContinents();
    setProfile(store.profileStore.profile);
  }, []);

  const store = useContext(StoreContext);

  console.log(store.profileStore.continents, 'co');
  console.log(store.profileStore.countries, 'cu');


  if (profile?.info && profile?.posts) {
    return (
      <>
        <ProfileIntroSection info={profile.info} />
        <ProfilePostsSection posts={profile.posts} />
      </>
    );
  }

  return null;
});

export default Profile;
