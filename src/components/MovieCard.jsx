import ReactCountryFlag from "react-country-flag";
import countries from "../assets/countries";
import { FaFlag } from "react-icons/fa";

function MovieCard({ movie }) {
  const {
    title,
    original_title,
    original_language,
    vote_average,
    name,
    original_name,
  } = movie;
  return (
    <li>
      <h1>{title || name}</h1>
      <h3>{original_title || original_name}</h3>
      <p>
        {original_language.toUpperCase()}
        {countries.includes(original_language) ? (
          <ReactCountryFlag countryCode={original_language} svg />
        ) : (
          <FaFlag />
        )}
      </p>
      <p>{vote_average}</p>
    </li>
  );
}

export default MovieCard;
