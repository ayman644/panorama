import React, {useState} from 'react';
import '../../App.css';
import TypicalSearchBar from '../../components/TypicalSearchBar';
import WebInfoCard from '../../components/WebInfoCard';
import WebSummaryCard from '../../components/WebSummaryCard';
import ViewMoreButton from '../../components/ViewMoreButton';


const SearchPage = () => {

  const [similarPages, setSimilarPages] = useState([
    <WebSummaryCard websiteIcon={"blah"}
                    websiteName={"website name"}
                    pageName={"page name"}
                    pageSummary={"this is a summary"}
                    key={0} />,
    <WebSummaryCard websiteIcon={"blah 2"}
                    websiteName={"website name 2"}
                    pageName={"page name 2"}
                    pageSummary={"this is a summary 2"}
                    key={1} />,
  ]);
  const [contradictingPages, setContradictingPages] = useState([
    <WebSummaryCard websiteIcon={"blah"}
                    websiteName={"website name"}
                    pageName={"page name"}
                    pageSummary={"this is a summary"}
                    key={0} />,
    <WebSummaryCard websiteIcon={"blah 2"}
                    websiteName={"website name 2"}
                    pageName={"page name 2"}
                    pageSummary={"this is a summary 2"}
                    key={1} />,
  ]);

  const handleViewMoreSimilar = () => {
    const newItems = [
      <WebSummaryCard websiteIcon={"blah"}
                      websiteName={"website name"}
                      pageName={"page name"}
                      pageSummary={"this is a summary"}
                      key={similarPages.length} />,
      <WebSummaryCard websiteIcon={"blah 2"}
                      websiteName={"website name 2"}
                      pageName={"page name 2"}
                      pageSummary={"this is a summary 2"}
                      key={similarPages.length + 1} />,
      <WebSummaryCard websiteIcon={"blah 3"}
                      websiteName={"website name 3"}
                      pageName={"page name 3"}
                      pageSummary={"this is a summary 3"}
                      key={similarPages.length + 2} />
    ];
    setSimilarPages([...similarPages, ...newItems]);
  };

  const handleViewMoreContradicting = () => {
    const newItems = [
      <WebSummaryCard websiteIcon={"blah"}
                      websiteName={"website name"}
                      pageName={"page name"}
                      pageSummary={"this is a summary"}
                      key={similarPages.length} />,
      <WebSummaryCard websiteIcon={"blah 2"}
                      websiteName={"website name 2"}
                      pageName={"page name 2"}
                      pageSummary={"this is a summary 2"}
                      key={similarPages.length + 1} />,
      <WebSummaryCard websiteIcon={"blah 3"}
                      websiteName={"website name 3"}
                      pageName={"page name 3"}
                      pageSummary={"this is a summary 3"}
                      key={similarPages.length + 2} />
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
