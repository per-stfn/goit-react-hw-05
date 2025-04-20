import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsByMovieId } from "../../services/api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchReviewsByMovieId(movieId);
      setReviews(data);
    };
    getData();
  }, [movieId]);

  if (!reviews) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={s.reviewsWrapper}>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id} className={s.reviewItem}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.noReviews}>We dont have any reviews for this movie.</p>
      )}
    </div>
  );
};
export default MovieReviews;
