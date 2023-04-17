import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import MovieCard from "./MovieCard";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h2 className="font-Nunito font-[600px] text-gray-600 text-3xl text-opacity-50">
        My Watch List{" "}
        <span className="text-red-900 text-opacity-70 font-[600px]">
          {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}{" "}
        </span>
      </h2>

      {watchlist.length > 0 ? (
        <div className=" gap-4 m-4 rounded-3xl grid grid-cols-7 bg-slate-50 h-auto w-full">
          {watchlist.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
          ))}
        </div>
      ) : (
        <h2>No movies in your list, add some!</h2>
      )}
    </div>
  );
};

export default WatchList;
