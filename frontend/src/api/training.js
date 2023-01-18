import axios from "axios";

export const getTrainingtimes = async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return response.data;
};
