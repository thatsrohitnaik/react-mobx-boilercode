import axios from 'axios';

//const urlbase = "https://api.npoint.io/";

const urlbase = window.location.origin + '/';

export async function get(url, config = {}) {
  try {
    const response = await axios.get(urlbase + url);
    return response;
  } catch (error) {
    return null;
  }
}

export function fetchGraphQLQuery(query, variables) {
  return fetch('https://countries.trevorblades.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: query, variables: variables }),
  }).then((res) => res.json());
}
