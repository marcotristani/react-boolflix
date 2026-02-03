import { useSearch } from "../context/SearchContext";

import MovieCard from "../components/MovieCard";

function SeriesTv() {
  const { seriesTvList } = useSearch();
  return (
    <ul className="card-container">
      {seriesTvList.map((seriesTv) => (
        <MovieCard
          key={seriesTv.id}
          movie={seriesTv}
          endpointActor={`https://api.themoviedb.org/3/tv/${seriesTv.id}/credits`}
        />
      ))}
    </ul>
  );
}

export default SeriesTv;
