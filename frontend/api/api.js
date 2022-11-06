import axios from "axios";

const url = "http://localhost:5000";

export const createPoll = async (data) => {
  try {
    const response = await axios.post(`${url}/createPoll`, data);
    return response.data.id;
  } catch (error) {
    console.log("Error while calling createPoll api", error);
  }
};

export const addCandidate = async (data) => {
  console.log(data);
  try {
    const response = await axios.post(`${url}/addCandidate`, data);
    return response;
  } catch (error) {
    console.log("Error while calling addCandidate api", error);
  }
}

export const changePollState = async (data) => {
  console.log(data);
  try {
    const response = await axios.post(`${url}/changeState`, data);
    return response;
  } catch (error) {
    console.log("Error while calling changePollState api", error);
  }
}
