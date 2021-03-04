import { action, observable, toJS, computed } from "mobx";
import axios from "axios";
import { get } from "../Utility/rest";

class ProfileStore {
  @observable profile = [];
  @observable loading = "false";

  @action async getProfile() {
    const response = await get("210c359b9c49ba11612f");
    this.profile = response.data;
    this.loading = "true";
    console.log(this.loading);
  }
}

export default ProfileStore;
