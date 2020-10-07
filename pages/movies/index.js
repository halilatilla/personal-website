import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import { Filter, Nav } from "../../components";
import "lazysizes";
import SiteConfig from "../../site.config";
import MovieCard from "../../components/MovieCard";

const MovieList = ({ allMovies }) => {
  const [movies, setMovies] = useState([]);

  const setFiler = (e) => {
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
        <title>{SiteConfig.title} || Movies</title>
      </Head>
      <main>
        <Nav goHome={"Home"}></Nav>
        <h1>My Movies</h1>
        <Filter movies={allMovies} onChange={(e) => setFiler(e)} />

        <div className="p-movies-wrapper">
          {movies &&
            movies.map((movie) => {
              return <MovieCard movie={movie} key={movie._id} />;
            })}
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const res = await axios.get(process.env.API_URL);
  const allMovies = await res.data;
  return {
    props: { allMovies },
  };
}

export default MovieList;
