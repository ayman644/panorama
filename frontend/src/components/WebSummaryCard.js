import '../App.css';
import React from 'react';
import WebInfoCard from './WebInfoCard';


function WebSummaryCard() {
    return (
        <div className='SummaryCardContainer'>
        <div className='SummaryCard'>
            <WebInfoCard/>
            <p>A summary of this page is lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Nam posuere lobortis odio, 
            ac fringilla lorem egestas nec. Mauris id dignissim ligula. 
            Proin ac iaculis magna. Vivamus ultrices mollis leo, 
            eu ultrices purus posuere at. Donec accumsan aliquam sapien, 
            at egestas enim finibus ut. In eu tortor dui. Sed odio nunc, 
            venenatis a ultricies a,culis magna. Vivamus ultrices mollis leo, 
            eu ultrices purus posuere at. Donec accumsan aliquam sapien, 
            at egestas enim finibus ut. In eu tortor dui. Sed odio nunc, 
            venenatis a ultricies a,  </p>
        </div>
        </div>
    );
};

export default WebSummaryCard