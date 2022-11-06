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
    return await axios.post(`${url}/addCandidate`, data);
  } catch (error) {
    console.log("Error while calling addCandidate api", error);
  }
};

export const changePollState = async (data) => {
  // console.log(data);
  try {
    await axios.post(`${url}/changeState`, data);
  } catch (error) {
    console.log("Error while calling changePollState api", error);
  }
};

export const getPolls = async () => {
  try {
    const polls = await axios.get(`${url}/getPolls`);
    return polls.data;
  } catch (error) {
    console.log("Error while calling getPolls api", error);
  }
};

export const getCandidates = async (data) => {
  try {
    const candidates = await axios.post(`${url}/getCandidates`, data);
    console.log(candidates.data);
    return candidates.data;
  } catch (error) {
    console.log("Error while calling getCandidates api", error);
  }
};

export const voteSubmit = async (data) => {
  try {
    await axios.post(`${url}/voteSubmit`, data);
  } catch (error) {
    console.log("Error while calling voteSubmit api", error);
  }
};

export const registerVoter = async (data) => {

  try {
    const response = await axios.post(`${url}/registerVoter`, data);
    console.log(response);
    return response.data.eligible;
  } catch (error) {
    console.log("Error while calling registerVoter api", error);
  }
};
