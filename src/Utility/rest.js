import axios from "axios";

const urlbase = "https://api.npoint.io/";

async export function get(url, config = {}) {
  try {
    const response = await axios.get(urlbase + url);
    return response;
  } catch (error) {
    return null;
  }
}
