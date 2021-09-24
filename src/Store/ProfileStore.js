import { makeAutoObservable } from 'mobx';
import { get } from '../Utility/rest';

// const Profile = {
//   info: String,
//   posts: String,
// };

class ProfileStore {
  loading = false;
  profile = { info: Object, posts: Object };

  constructor() {
    makeAutoObservable(this);
  }

  getProfile = async () => {
    const response = await get('db.json');
    this.profile = response.data.profile;
    this.loading = true;
    console.log(this.loading);
  };
}

export default ProfileStore;
