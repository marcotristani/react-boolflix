import { useSearch } from "../context/SearchContext";

import MovieCard from "../components/MovieCard";

function SeriesTv() {
  const { seriesTvList } = useSearch();
  return (
    <ul>
      {seriesTvList.map((seriesTv) => (
        <MovieCard key={seriesTv.id} movie={seriesTv} />
      ))}
    </ul>
  );
}

export default SeriesTv;
