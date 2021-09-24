import { makeAutoObservable } from 'mobx';
import { get } from './Utility/rest';

const profile = {
  info: String,
  posts: String,
};

class ProfileStore {
  //profile = {};

  loading = false;
  profile = { info: any, posts: any };

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
