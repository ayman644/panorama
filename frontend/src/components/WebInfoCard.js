import '../App.css';
import React  from 'react';


function WebInfoCard({websiteIcon, websiteName, pageName, pageUrl}) {

    return (
        <div className="d-flex align-items-center">
          {/* Website Icon */}
          <div
            className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
            style={{ width: '60px', height: '60px' }}
          >
              <img
                  src={websiteIcon}
                  alt={`${websiteName} icon`}
                  style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                  }}
              />
          </div>
          {/* Text Section */}
          <div className="ml-3">
            <div style={{ fontSize: '1.5rem' }}>{websiteName}</div>
              <div style={{fontSize: '1.7rem', fontWeight: 'bold'}}>
                  <a href={pageUrl} style={{textDecoration: 'none', color: '#332FF2'}}>
                      {pageName}
                  </a>
              </div>
          </div>
        </div>
    );
};

export default WebInfoCard;
