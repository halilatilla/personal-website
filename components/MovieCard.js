import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div>
        <p className="movie-name"> {movie.name}</p>
        <p className="movie-date">
          {movie.date.split("-")[0]} -{" "}
          <span className="region"> {movie.region} </span>
        </p>
        <a target="_blank" href={movie.imdbUrl} className="movie-image-wrapper">
          <img
            data-src={movie.imgUrl}
            alt={movie.name}
            className="movie-image lazyload"
          />
        </a>
        <p className="movie-description">{movie.description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
