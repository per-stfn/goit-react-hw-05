import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies, location }) => {
  return (
    <div className={s.movieListWrapper}>
      <ul>
        {movies?.map((movie) => (
          <li className={s.movieItem} key={movie.id}>
            <Link
              to={`/movies/${movie.id.toString()}`}
              state={{ from: location }}
            >
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
