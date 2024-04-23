import React, { useState } from "react";

function Search( { onSearchSubmit, onSortListings, sortAtoZ } ) {
const [search, setSearch] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(search)
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
      <input style={ {width: 20, marginLeft: 20} } type="checkbox" name="sort" value={sortAtoZ} onClick={(e)=>onSortListings(e.target.checked)}/>
      <label>Sort alphabetically</label>
    </form>
  );
}

export default Search;
