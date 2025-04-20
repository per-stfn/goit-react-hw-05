import { useEffect, useState } from "react";
import { fetchCastByMovieId } from "../../services/api";
import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCastByMovieId(movieId);
      setActors(data);
      setIsLoading(false);
    };
    getData();
  }, [movieId]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (actors.length === 0) {
    return <h2>No actors found</h2>;
  }

  return (
    <div className={s.castWrapper}>
      <ul>
        {actors?.map((actor) => (
          <li key={actor.id} className={s.castItem}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            </div>
            <div className={s.castInfo}>
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
