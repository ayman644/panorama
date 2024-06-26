import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();


  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      console.log(`Searching for: ${searchTerm}`);
      // Perform your search or navigate to the URL
      // You can also use window.location.href = searchTerm; to navigate to the typed URL
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    } else {
      console.log('Please enter a search term or URL.');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
    return (
      <div className="search-bar">
        <button className="search-button" onClick={handleSearch}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg" alt="Search" />
        </button>
        <input type="text" placeholder="Paste a URL" value={searchTerm}
        onChange={handleInputChange} onKeyDown={handleKeyPress}
        />
      </div>
    );
  }
  