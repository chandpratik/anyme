import axios from 'axios';

export const getUpcomingAnime = async () => {
  try {
    const response = await axios.get(
      'https://api.jikan.moe/v3/top/anime/1/upcoming'
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAiringAnime = async () => {
  try {
    const response = await axios.get(
      'https://api.jikan.moe/v3/top/anime/1/airing'
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllTimePopularAnime = async () => {
  try {
    const response = await axios.get('https://api.jikan.moe/v3/top/anime/1/tv');
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getPopularAnimeMovie = async () => {
  try {
    const response = await axios.get(
      'https://api.jikan.moe/v3/top/anime/1/movie'
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
