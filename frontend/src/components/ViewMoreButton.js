import '../App.css';
import React from 'react';


function ViewMoreButton({ onClick }) {
    return (
        <div className="ViewMoreBtn">
            <button name="ViewMore" type="submit" onClick={onClick}>View More</button>
        </div>
    );
  };

export default ViewMoreButton;