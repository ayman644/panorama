import '../App.css';
import React, { useState } from 'react';


function TypicalSearchBar() {
    const [searchText, setSearchText] = useState('');

    
    return (
        <div className="search-container">
            <a href="/" className="typical-logo" style={{display: 'block'}}>Searchify</a>
            <div className="search-input-group">
                <input 
                type="text" 
                className="search-input" 
                value={searchText} 
                onChange={(e) => setSearchText(e.target.value)} 
                />
                <button className="clear-button" onClick={() => setSearchText('')}>
                <i className="fas fa-times"></i>
                </button>
                <button className="search-button">
                <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    );
  };

export default TypicalSearchBar;