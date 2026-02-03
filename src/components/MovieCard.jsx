import ReactCountryFlag from "react-country-flag";
import countries from "../data/countries";
import { FaFlag } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

const urlImageBase = "https://image.tmdb.org/t/p/";
const widthImage = "w342";

function MovieCard({ movie, endpointActor }) {
  const {
    title,
    original_title,
    original_language,
    vote_average,
    name,
    original_name,
    poster_path,
    overview,
    id,
  } = movie;

  const endpointBase = endpointActor;
  const endpointKey = import.meta.env.VITE_API_KEY;
  const [actors, setActors] = useState([]);

  function fetchActors() {
    axios
      .get(`${endpointBase}?api_key=${endpointKey}`)
      .then((response) => setActors(response.data.cast));
  }

  useEffect(fetchActors, []);
  console.log(actors);

  const vote = Math.ceil(parseFloat(vote_average / 2));
  const stringStars = [];

  for (let index = 0; index < vote; index++) {
    stringStars.push(<FaStar key={index} />);
  }

  return (
    <li className="movie-card">
      <img src={urlImageBase + widthImage + poster_path} alt={title} />
      <div className="description-card">
        <p className="title">
          Titolo: <span>{title || name}</span>
        </p>
        <p className="title-original">
          Titolo originale: <span>{original_title || original_name}</span>
        </p>
        <p className="lenguage">
          {original_language.toUpperCase()}
          {countries.includes(original_language) ? (
            <span className="flag">
              <ReactCountryFlag countryCode={original_language} svg />
            </span>
          ) : (
            <span className="flag FaFlag">
              <FaFlag />
            </span>
          )}
        </p>
        <p className="vote">
          Vote:<span className="vote-stars">{stringStars}</span>
        </p>
        <p>
          Overview:
          <span>{overview}</span>
        </p>
        <p>Attori principali:</p>
        <ul>
          {actors.slice(0, 5).map((actor) => (
            <li key={actor.id}>{actor.name}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default MovieCard;
