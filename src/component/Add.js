import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
const Add = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${searchMovie}&apikey=f52736f`)
      .then((resp) => {
        if (resp.data.Search) {
          setMovies(resp.data.Search);
        }
      })
      .catch((error) => console.log(error));
  }, [searchMovie]);

  return (
    <div className="flex flex-col items-center  ">
      <div className=" p-12 my-auto mx-0 w-[900px]">
        <input
          className="w-full bg-cyan-200 p-2 rounded-2xl border-none text-teal-800 text-xl"
          type="text"
          placeholder="Lookin for a Movie?"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
      </div>
      <div className="m-0 p-0 mt-5">
        {movies.length > 0 && (
          <ul className="mt-5">
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <MovieCard movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Add;
