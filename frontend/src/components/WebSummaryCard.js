import '../App.css';
import React from 'react';
import WebInfoCard from './WebInfoCard';


function WebSummaryCard({websiteIcon, websiteName, pageName, pageSummary, pageUrl}) {
    return (
        <div className='SummaryCardContainer'>
        <div className='SummaryCard'>
            <WebInfoCard
                websiteIcon={websiteIcon}
                websiteName={websiteName}
                pageName={pageName}
                pageUrl={pageUrl}
            />
            <p>{pageSummary}</p>
        </div>
        </div>
    );
}

export default WebSummaryCard