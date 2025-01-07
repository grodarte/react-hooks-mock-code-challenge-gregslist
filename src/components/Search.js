import React, { useState } from "react";

function Search({ onSearchItems }) {
  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onSearchItems(search);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
