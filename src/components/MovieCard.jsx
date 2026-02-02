function MovieCard({ movie }) {
  const { title, original_title, original_language, vote_average } = movie;
  return (
    <li>
      <h1>{title}</h1>
      <h3>{original_title}</h3>
      <p>{original_language}</p>
      <p>{vote_average}</p>
    </li>
  );
}

export default MovieCard;
