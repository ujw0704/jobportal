


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { context } from '../App';
import "./AdvanceSearch.css"


function AdvanceSearch() {
  const [centersearch, setCenterSearch] = useState('');
  const { searchResults, setSearchResults } = useContext(context);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(10);
  const { setFindJob } = useContext(context);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (centersearch.trim() !== '') {
      fetchSearchResults();
    }
  }, [currentPage, centersearch]);

  useEffect(() => {
    console.log("Search Results Updated:", searchResults); // Debug: Log searchResults
  }, [searchResults]);

  function fetchSearchResults() {
    axios.get(`http://localhost:8000/centerSearch/:${centersearch}?page=${currentPage}`)
      .then((response) => {
        if (response.data.status === 200) {
          console.log('Success!', response.data);
          setSearchResults(response.data.data);
        } else {
          setSearchResults([]);
          alert("No data");
        }
      })
      .catch((error) => {
        console.log('Error fetching job data:', error);
      });
  }

  function handleSearchOnclick(e) {
    e.preventDefault();
    setCurrentPage(1);
    fetchSearchResults();
  }

  function handlePaginationClick(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handleMatchedResults() {
    const matchedResults = searchResults.filter(data => {
      const companyName = data.company.toLowerCase();
      const searchQuery = centersearch.toLowerCase();
      return companyName.includes(searchQuery);
    });

    console.log("Matched Results:", matchedResults); // Debug: Log matchedResults

    setFindJob(matchedResults);

    // Send single job data when "View Matched Results" button is clicked
    if (matchedResults.length === 1) {
      navigate('/Searchview', { state: { singleJob: matchedResults[0] } });
    } else {
      navigate('/Searchview', { state: { searchResults: matchedResults } });
    }
  }

  const totalPages = Math.ceil(searchResults.length / resultsPerPage);

  return (
    <div advance-search-container>
     
      <div className="results-container">
        {searchResults.length > 0 ? (
          <>
            {searchResults.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage).map((data, index) => (
              <div className='AdavanceData' key={index}>
                <h1>company:{data.company}</h1><br></br>
                <p> position:{data.position}</p><br></br>
              </div>
            ))}
            <button  className="Advance-search-buts"onClick={handleMatchedResults}>View Matched Results</button>
            {/* <div>
              {Array.from({ length: totalPages }, (_, i) => (
                <button className= "pagination-button"style={{ width: "20px" }} key={i} onClick={() => handlePaginationClick(i + 1)}>{i + 1}</button>
              ))}
            </div> */}
          </>
        ) : (
            <p>No search results</p>
          )}
      </div>
    </div>
  );
}

export default AdvanceSearch;










