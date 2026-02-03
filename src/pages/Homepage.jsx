import { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";
import MovieCard from "../components/MovieCard";

function Homepage() {
  const { movieList, seriesTvList } = useSearch();
  // const [all, setAll] = useState([]);
  // useEffect(
  //   () => setAll([...movieList, ...seriesTvList]),
  //   [movieList, seriesTvList],
  // );

  return (
    <ul className="card-container">
      {seriesTvList.map((seriesTv) => (
        <MovieCard
          key={seriesTv.id}
          movie={seriesTv}
          endpointActor={`https://api.themoviedb.org/3/tv/${seriesTv.id}/credits`}
        />
      ))}
      {movieList.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          endpointActor={`https://api.themoviedb.org/3/movie/${movie.id}/credits`}
        />
      ))}
    </ul>
  );
}

export default Homepage;
