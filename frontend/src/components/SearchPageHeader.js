import React from 'react';
import '../App.css';

function SearchPageHeader() {
  return (
    <header className="searchpageheader">
      <h1>Searchify</h1>
      <div className="search-bar">
        <input type="text" placeholder="https://freenews4u.com/newsarticle" />
        <button className="search-button">Search</button>
      </div>
    </header>
  );
}

export default SearchPageHeader;
