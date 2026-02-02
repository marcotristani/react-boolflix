import ReactCountryFlag from "react-country-flag";
import countries from "../assets/countries";
import { FaFlag } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const urlImageBase = "https://image.tmdb.org/t/p/";
const widthImage = "w342";

function MovieCard({ movie }) {
  const {
    title,
    original_title,
    original_language,
    vote_average,
    name,
    original_name,
    poster_path,
  } = movie;

  const vote = Math.ceil(parseFloat(vote_average / 2));
  const stringStars = [];

  for (let index = 0; index < vote; index++) {
    stringStars.push(<FaStar key={index} />);
  }

  return (
    <li>
      <img src={urlImageBase + widthImage + poster_path} alt={title} />
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
      <p>{stringStars}</p>
    </li>
  );
}

export default MovieCard;
