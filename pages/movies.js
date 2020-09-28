import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import Filter from "../components/Filter";
import "lazysizes";
import Nav from "../components/Nav";

const MovieList = ({ allMovies }) => {
  const [movies, setMovies] = useState([]);

  const setFiler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      setMovies(allMovies);
      return;
    }

    const filteredMovies = allMovies.filter(
      (movie) => movie.region === e.target.value
    );

    setMovies(filteredMovies);
  };

  useEffect(() => {
    setMovies(allMovies);
  }, []);
  return (
    <>
      <Head>
        <title>Halil Atilla || Movies</title>
      </Head>
      <Nav goHome={"Home"}></Nav>
      <Filter movies={allMovies} onChange={(e) => setFiler(e)} />

      <div className="movies-wrapper">
        {movies &&
          movies.map((movie) => {
            return (
              <div className="movie-container" key={movie._id}>
                <div>
                  <p className="movie-name"> {movie.name}</p>
                  <p className="movie-date">
                    {movie.date.split("-")[0]} -{" "}
                    <span className="region"> {movie.region} </span>
                  </p>

                  <a
                    target="_blank"
                    href={movie.imdbUrl}
                    className="movie-image-wrapper"
                  >
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
          })}
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Dank Mono", Tahoma, Geneva, Verdana, sans-serif;
          background-color: #181a1b;
          color: wheat;
          text-align: center;
        }
        .create-movie {
          font-size: 30px;
          margin: auto;
          border: 1px solid #fff;
          padding: 6px 12px;
          border-radius: 3px;
          transition: all 0.3s ease;
          color: #fff;
          text-decoration: none;
          letter-spacing: 1px;
        }
        .create-movie:hover {
          background-color: #fff;
          color: white;
        }
        .movies-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 1rem;
          margin: 0 auto;
          margin-top: 1rem;
          overflow-x: hidden;
          padding: 18px 30px;
          color: wheat;
          justify-items: center;
        }
        @media (max-width: 600px) {
          .movies-wrapper {
            padding: 18px;
          }
        }
        .movie-container {
          display: grid;
          width: 100%;
          box-shadow: 1px 1px 10px #ccc;
          border-radius: 5px;
          align-content: space-between;
          max-width: 300px;
          margin-top: 2rem;
        }
        .movie-name {
          font-size: 1.2rem;
          font-weight: bold;
          letter-spacing: 1px;
          padding: 9px;
        }
        .movie-date {
          font-size: 1.2rem;
          letter-spacing: 1px;
        }
        .region {
          text-transform: capitalize;
        }
        .movie-image-wrapper {
          overflow: hidden;
          cursor: pointer;
        }
        .movie-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: all 0.4s ease;
        }
        .movie-image:hover {
          transform: scale(1.2);
        }

        .movie-description {
          padding: 9px;
        }
        a {
          color: inherit;
          text-decoration: none;
          width: 100%;
          display: block;
        }
      `}</style>
    </>
  );
};

export async function getStaticProps() {
  const res = await axios.get(process.env.API_URL);
  const allMovies = await res.data;
  return {
    props: { allMovies }, // will be passed to the page component as props
  };
}

export default MovieList;
