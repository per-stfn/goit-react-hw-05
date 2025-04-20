import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../services/api";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const data = await fetchMovies();
      setTrendingMovies(data);
    };
    getTrendingMovies();
  }, []);

  return (
    <div className={s.pageWrapper}>
      <h1 className={s.pageTitle}>Trending Today:</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
