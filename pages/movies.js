import React from "react";
import axios from "axios";
import Nav from "../components/Nav";

const MovieList = ({ movies }) => {
  return (
    <>
      <Nav goHome={"Home"}></Nav>
      <div className="movies-wrapper">
        {movies &&
          movies.map(localMovie => {
            return (
              <div className="movie-container" key={localMovie._id}>
                <div>
                  <p className="movie-name"> {localMovie.movieName}</p>

                  <div className="movie-image-wrapper">
                    <img
                      src={localMovie.movieImage}
                      alt=""
                      className="movie-image"
                    />
                  </div>

                  <p> {localMovie.description}</p>
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
          grid-gap: 2rem;
          max-width: 1180px;
          margin: 0 auto;
          margin-top: 1rem;
          overflow-x: hidden;
          padding: 18px 30px;
          color: wheat;
        }
        .movie-container {
          display: grid;
          width: 100%;
          box-shadow: 1px 1px 10px #ccc;
          padding: 9px;
          align-content: space-between;
        }
        .movie-name {
          font-size: 1.2rem;
          font-weight: bold;
        }
        .movie-image-wrapper {
          overflow: hidden;
          cursor: pointer;
        }
        .movie-image {
          width: 100%;
          object-fit: cover;
          object-position: center;
          transition: all 0.4s ease;
        }
        .movie-image:hover {
          transform: scale(1.2);
        }
        .button-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 9px;
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
  const res = await axios.get(`https://strapi-nextjs.herokuapp.com/tests`);
  const movies = await res.data;
  console.log(movies);

  return { movies };
};

export default MovieList;
