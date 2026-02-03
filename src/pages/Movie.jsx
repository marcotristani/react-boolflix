import { useSearch } from "../context/SearchContext";

import MovieCard from "../components/MovieCard";

function Movie() {
  const { movieList } = useSearch();
  return (
    <ul className="card-container">
      {movieList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default Movie;
