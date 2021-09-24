import { makeAutoObservable } from 'mobx';
import { get, fetchGraphQLQuery } from '../Utility/rest';

// const Profile = {
//   info: String,
//   posts: String,
// };

class ProfileStore {
  loading = false;
  profile = { info: Object, posts: Object };
  continents = {};
  countries = {};

  constructor() {
    makeAutoObservable(this);
  }

  getProfile = async () => {
    const response = await get('db.json');
    this.profile = response.data.profile;
    this.loading = true;
    console.log(this.loading);
  };

  getContinents = () => {
    const query = `query {
    continents{name, code}
    }`;
    const result = fetchGraphQLQuery(query);
    result.then((data) => {
      this.continents = data.data;
    });
    this.getCountriesInContinent();
  };

  getCountriesInContinent = () => {
    const query = `query getCountries($code: ID!){
      continent(code:$code){
        countries{
          name
        }
      }
    }`;

    const variables = { code: 'AS' };

    const result = fetchGraphQLQuery(query, variables);
    result.then((data) => {
      this.countries = data.data;
      console.log('hello', data);
    });
  };
}

export default ProfileStore;
