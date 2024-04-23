import React from "react";
import Search from "./Search";

function Header({ onSearchSubmit, onSortListings, sortAtoZ }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchSubmit={onSearchSubmit} onSortListings={onSortListings} sortAtoZ={sortAtoZ}/>
    </header>
  );
} 

export default Header;
