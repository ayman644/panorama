import React, {useState} from 'react';
import '../../App.css';
import TypicalSearchBar from '../../components/TypicalSearchBar';
import WebInfoCard from '../../components/WebInfoCard';
import WebSummaryCard from '../../components/WebSummaryCard';
import ViewMoreButton from '../../components/ViewMoreButton';


const SearchPage = () => {

  const [similarPages, setSimilarPages] = useState([<WebSummaryCard key={0} />, <WebSummaryCard key={1} />]);
  const [contradictingPages, setContradictingPages] = useState([<WebSummaryCard key={0} />, <WebSummaryCard key={1} />]);

  const handleViewMoreSimilar = () => {
    const newItems = [
      <WebSummaryCard key={similarPages.length} />,
      <WebSummaryCard key={similarPages.length + 1} />,
      <WebSummaryCard key={similarPages.length + 2} />
    ];
    setSimilarPages([...similarPages, ...newItems]);
  };

  const handleViewMoreContradicting = () => {
    const newItems = [
      <WebSummaryCard key={contradictingPages.length} />,
      <WebSummaryCard key={contradictingPages.length + 1} />,
      <WebSummaryCard key={contradictingPages.length + 2} />
    ];
    setContradictingPages([...contradictingPages, ...newItems]);
  };

  return (
    <div className='SearchPage'>
      <TypicalSearchBar />
      <div className='RecordsContainer my-4'>
        <WebInfoCard />
      </div>
      <hr />
      <div className='RecordsContainer my-4'>
        <h3>Similar Pages</h3>
        <div className='SimilarItems'>
          <ul>
          {similarPages.map((page, index) => (
              <li key={index}>{page}</li>
            ))}
          </ul>
          <ViewMoreButton onClick={handleViewMoreSimilar}/>
        </div>
        <h3>Contradicting Pages</h3>
        <div className='SimilarItems'>
          <ul>
          {contradictingPages.map((page, index) => (
              <li key={index}>{page}</li>
            ))}
          </ul>
          <ViewMoreButton onClick={handleViewMoreContradicting} />
        </div>
      </div>
      
    </div>
  );
};

export default SearchPage;
