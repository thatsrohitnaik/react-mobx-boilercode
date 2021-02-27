import axios from "axios";

async export function getRequest(url, config = {}) {
  try {
    const response = await axios.get(url);
    console.log("res:", response);
    return response;
  } catch (error) {
    return null;
  }
}
