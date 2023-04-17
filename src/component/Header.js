import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-800 px-2">
      <div className="flex justify-evenly items-center px-4 mx-auto">
        <div className="text-cyan-100 font-FjallaOne text-3xl">
          <Link to="/">Moviesta</Link>
        </div>
        <ul className="text-cyan-100 list-none flex items-center p-2 m-2">
          <li className="inline-block mr-7">
            <NavLink
              to="/"
              className="no-underline text-blue-300 transition-all ease-in-out text-xl hover:opacity-50 "
            >
              Watch List
            </NavLink>
          </li>
          <li className="inline-block mr-7">
            <NavLink
              to="/watched"
              className="no-underline text-blue-300 transition-all ease-in-out text-xl hover:opacity-50"
            >
              Watched
            </NavLink>
          </li>
          <li className="px-5 py-3  bg-slate-400 text-slate-900 uppercase font-[400px] inline-block border-none text-lg leading-5 hover:bg-cyan-500 hover:opacity-100 hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 font-FjallaOne rounded-xl">
            <NavLink to="/add">ADD</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
