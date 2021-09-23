import { makeAutoObservable } from 'mobx';
import { get } from './Utility/rest';

class ProfileStore implements Profile {
  //profile = {};

  loading = false;
  profile: { info: any; posts: any };

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

interface Profile {
  profile: {
    info;
    posts;
  };
}

export default ProfileStore;
