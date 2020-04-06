import React, { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";

const MovieList = ({ movies }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Nav loading={loading} goHome={"Home"}></Nav>
      <div className="movies-wrapper">
        {movies &&
          movies.map((localMovie) => {
            return (
              <div className="movie-container" key={localMovie._id}>
                <div>
                  <p className="movie-name"> {localMovie.movieName}</p>
                  <p className="movie-date">
                    {" "}
                    {localMovie.movieDate.split("-")[0]}
                  </p>

                  <a
                    target="_black"
                    href={localMovie.movieUrl}
                    className="movie-image-wrapper"
                  >
                    <img
                      src={localMovie.movieImgUrl}
                      alt=""
                      className="movie-image"
                    />
                  </a>

                  <p className="movie-description">
                    {" "}
                    {localMovie.movieDescription}
                  </p>
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
          border: 1px solid #067df7;
          padding: 6px 12px;
          border-radius: 3px;
          transition: all 0.3s ease;
          color: #067df7;
          text-decoration: none;
          letter-spacing: 1px;
        }
        .create-movie:hover {
          background-color: #067df7;
          color: white;
        }
        .movies-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-auto-flow: dense;
          grid-gap: 3rem;
          margin: 0 auto;
          margin-top: 1rem;
          overflow-x: hidden;
          padding: 18px 30px;
          color: wheat;
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
        }
        .movie-name {
          font-size: 1.2rem;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .movie-date {
          font-size: 1.2rem;
          letter-spacing: 1px;
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

MovieList.getInitialProps = async () => {
  const res = await axios.get(`https://mymovies-strapi.herokuapp.com/movies`);
  const movies = await res.data;

  return { movies };
};

export default MovieList;
