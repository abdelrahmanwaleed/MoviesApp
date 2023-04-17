import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import MovieCard from "./MovieCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h2 className="font-Nunito font-[600px] text-gray-600 text-3xl text-opacity-50">
        Movies already you watched is{" "}
        <span className="text-red-900 text-opacity-70 font-[600px]">
          {watched.length} {watched.length === 1 ? "Movie" : "Movies"}{" "}
        </span>
      </h2>
      {watched.length > 0 ? (
        <div className="grid grid-cols-7 gap-4 m-4 rounded-3xl h-auto w-full bg-slate-200">
          {" "}
          {watched.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} type="watched" />
          ))}{" "}
        </div>
      ) : (
        <h2>You havent watch any Movies yet</h2>
      )}
    </div>
  );
};

export default Watched;
