import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_KEY = "c46c60f22d477079d45954c440436555";

export const fetchMovies = async () => {
  const { data } = await axios.get(`/movie/popular?api_key=${API_KEY}`);
  return data.results;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

export const fetchCastByMovieId = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data.cast;
};

export const fetchReviewsByMovieId = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data.results;
};

export const fetchSearchMovies = async (query) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data.results;
};
