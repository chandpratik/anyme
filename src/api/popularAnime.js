import axios from 'axios';

export const getUpcomingAnime = async () => {
  const response = await axios.get(
    'https://api.jikan.moe/v3/top/anime/1/upcoming'
  );
  return response;
};

export const getAiringAnime = async () => {
  const response = await axios.get(
    'https://api.jikan.moe/v3/top/anime/1/airing'
  );
  return response;
};

export const getAllTimePopularAnime = async () => {
  const response = await axios.get('https://api.jikan.moe/v3/top/anime/1/tv');
  return response;
};

export const getPopularAnimeMovie = async () => {
  const response = await axios.get(
    'https://api.jikan.moe/v3/top/anime/1/movie'
  );
  return response;
};
