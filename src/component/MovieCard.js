import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

const MovieCard = ({ movie }) => {
  const { MoviesDispatch, watchlist, watched } = useContext(GlobalContext);

  const storeMovieList = watchlist.find((o) => o.imdbID === movie.imdbID);
  const storeMovieWatched = watched.find((o) => o.imdbID === movie.imdbID);
  const watchListDisabled = storeMovieList
    ? true
    : storeMovieWatched
    ? true
    : false;

  const watchedDisabled = storeMovieWatched ? true : false;

  return (
    <div className="relative max-w-xs m-4 overflow-hidden rounded-2xl shadow-lg group">
      {movie.Poster ? (
        <img
          className="transition-transform group-hover:scale-110 duration-200"
          src={movie.Poster}
          alt={movie.Title}
        />
      ) : (
        <div className="bg-[#333] w-20 h-16"></div>
      )}
      <div className="absolute  inset-0 flex  items-end bg-gradient-to-t from-slate-900 to-transparent">
        <h3 className="text-xl font-bold p-4 text-slate-50">{movie.Title}</h3>
        {movie.Year ? (
          <h4 className="font-bold text-slate-400">{movie.Year}</h4>
        ) : (
          "-/-"
        )}
        <div className="text-lg text-yellow-100">
          <button
            onClick={() =>
              MoviesDispatch({
                type: "ADD_MOVIE_TO_WATCHLIST",
                payload: movie,
              })
            }
            disabled={watchListDisabled}
          >
            Whatch List
          </button>

          <button
            onClick={() =>
              MoviesDispatch({
                type: "ADD_MOVIE_TO_WATCHED",
                payload: movie,
              })
            }
            disabled={watchedDisabled}
          >
            Add to watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
