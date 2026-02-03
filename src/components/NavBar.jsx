import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import { useState } from "react";

import { useSearch } from "../context/SearchContext";

function NavBar() {
  const navVoice = [
    { path: "/", element: <FaHome /> },
    { path: "/movie", element: "Movie" },
    { path: "/series_tv", element: "Series Tv" },
  ];

  const [searchString, setSearchString] = useState("");

  const { queryString, setQueryString } = useSearch();

  function goResearch(e) {
    e.preventDefault();
    setQueryString(searchString);
    setSearchString("");
  }

  return (
    <nav>
      <ul>
        {navVoice.map((voice, index) => (
          <li key={index}>
            <NavLink to={voice.path}>{voice.element}</NavLink>
          </li>
        ))}
      </ul>
      <figure>
        <img src="src\assets\logo_boolflix_mod.png" alt="" />
      </figure>

      <form onSubmit={goResearch}>
        <input
          id="input-search"
          type="text"
          placeholder="Ricerca il titolo"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <button>
          <FaSearch />
        </button>
      </form>
    </nav>
  );
}

export default NavBar;
