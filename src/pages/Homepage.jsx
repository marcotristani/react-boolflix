import { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";
import MovieCard from "../components/MovieCard";

function Homepage() {
  const { movieList, seriesTvList } = useSearch();
  const [all, setAll] = useState([]);
  useEffect(
    () =>
      setAll([...movieList, ...seriesTvList].sort(() => Math.random() - 0.5)),
    [movieList, seriesTvList],
  );

  return (
    <ul className="card-container">
      {all.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default Homepage;
