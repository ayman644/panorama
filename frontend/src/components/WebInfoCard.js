import '../App.css';
import React  from 'react';


function WebInfoCard({websiteIcon, websiteName, pageName}) {

    return (
        <div className="d-flex align-items-center">
          {/* Website Icon */}
          <div
            className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
            style={{ width: '60px', height: '60px' }}
          >
            website icon
          </div>
          {/* Text Section */}
          <div className="ml-3">
            <div style={{ fontSize: '1.5rem' }}>{websiteName}</div>
            <div style={{ fontSize: '1.7rem', fontWeight: 'bold' }}>{pageName}</div>
          </div>
        </div>
    );
};

export default WebInfoCard;
