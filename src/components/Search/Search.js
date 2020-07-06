import React, { useState } from "react";
// import Albums from "../Albums/Albums"
import { useLocation } from "wouter";
import "./style.css"
const Search = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useLocation();

  const handleForm = (e) => {
    e.preventDefault();
    if (query) {
      // console.log(query);
      setLocation(`/search/${query}`);
    }
  };
  const handleSearch = (e) => setQuery(encodeURI(e.target.value));
  return (
    <>
      <form method="get" onSubmit={handleForm} autoComplete="off">
        <input
          type="search"
          name="search"
          className="input"
          onChange={handleSearch}
          autoComplete="off"
        />
        <input type="submit" value="Search" className="btn"/>
      </form>
    </>
  );
};

export default Search;
