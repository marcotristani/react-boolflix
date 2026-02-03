import { useContext, createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchContext = createContext();

const endpointMovie = import.meta.env.VITE_API_URL_MOVIE;
const endpointSeriesTv = import.meta.env.VITE_API_URL_SERIES_TV;
const endpointKey = import.meta.env.VITE_API_KEY;

function SearchProvider({ children }) {
  const [queryString, setQueryString] = useState("");

  const [movieList, setMovieList] = useState([]);

  const [seriesTvList, setSeriesTvList] = useState([]);

  function fetchList(endpoint, setterList) {
    axios
      .get(`${endpoint}?api_key=${endpointKey}&query=${queryString.trim()}`)
      .then((response) => setterList(response.data.results))
      .catch((error) => {
        alert(error.message);
      });
  }

  useEffect(() => fetchList(endpointMovie, setMovieList), [queryString]);
  useEffect(() => fetchList(endpointSeriesTv, setSeriesTvList), [queryString]);

  return (
    <SearchContext.Provider
      value={{ queryString, setQueryString, movieList, seriesTvList }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  return context;
}

export { SearchProvider, useSearch };
