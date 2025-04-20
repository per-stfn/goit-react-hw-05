import { Field, Formik, Form } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const location = useLocation();

  const initialValues = { query: "" };

  useEffect(() => {
    const getMovies = async () => {
      if (query) {
        setIsLoading(true);
        const data = await fetchSearchMovies(query);
        setMovies(data);
        setIsLoading(false);
      }
    };
    getMovies();
  }, [query]);

  const handleSearchSubmit = (values) => {
    handleChangeQuery(values.query);
  };

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  const filteredData = useMemo(
    () =>
      movies.filter((movie) =>
        movie.title?.toLowerCase().includes(query.toLowerCase())
      ),
    [query, movies]
  );

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSearchSubmit}>
        <Form className={s.wrapper}>
          <Field
            className={s.searchInput}
            name="query"
            placeholder="Enter movie name..."
          />
          <button type="submit" className={s.btn}>
            Search
          </button>
        </Form>
      </Formik>

      {isLoading && <p>Loading movies...</p>}

      {!isLoading && movies?.length === 0 && query && (
        <p>No movies found for this query</p>
      )}

      {movies?.length > 0 && (
        <MovieList movies={filteredData} location={location} />
      )}
    </>
  );
};

export default MoviesPage;
