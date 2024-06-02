import axios from 'axios';

const GITHUB_USERNAME = 'Harkohrede'
const GITHUB_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const fetchRepositories = async () => {
  try {
    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};
