import axios from "axios";

//Getting the JSON data on my account
export const getTrainingtimes = async () => {
  const response = await axios.get(
    `https://gist.githubusercontent.com/sebastianchengg/ff5942af8be0ab4c21a6d0ee7c9b4926/raw/trainingHours.json`
  );
  return response.data;
};

export const getLeaderboardRepetitions = async () => {
  const response = await axios.get(
    `https://gist.githubusercontent.com/sebastianchengg/d9cba7f6020e32a025c6235e8a14cd30/raw/leaderboardRepetition.json`
  );
  return response.data;
};

export const getLeaderboardDuration = async () => {
  const response = await axios.get(
    `https://gist.githubusercontent.com/sebastianchengg/b12f9946e5bd00087b9d41e6656ff827/raw/leaderboardDuration.json`
  );
  return response.data;
};
