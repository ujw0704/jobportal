
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./SearchView.css"

function Searchview() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Location State:", state); // Debug: Log state
  }, [state]);

  function handleApplyClick(e){
    e.preventDefault();
    if(localStorage.getItem("token")){
      navigate("/ApplyJobs");
    }
  }

  return (
    <div className="search-view-container">
      {state && state.singleJob && (
        <div className="job-details">
          <h2>Company: {state.singleJob.company}</h2>
          <p>Email: {state.singleJob.email}</p>
          <p>Position: {state.singleJob.position}</p>
          <p>Phone Number: {state.singleJob.number}</p>
          <p>Work Type: {state.singleJob.worktype}</p>
          <p>Created At: {state.singleJob.createdAt}</p>
          <p>Updated At: {state.singleJob.updatedAt}</p>
          <button className='apply-button' onClick={handleApplyClick}>Apply</button>
        </div>
      )}

      {state && state.searchResults && (
        <div className="search-results">
          {state.searchResults.map((job, index) => (
            <div className="job-item" key={index}>
              <h2>Company: {job.company}</h2>
              <p>Email: {job.email}</p>
              <p>Position: {job.position}</p>
              <p>Phone Number: {job.number}</p>
              <p>Work Type: {job.worktype}</p>
              <p>Created At: {job.createdAt}</p>
              <p>Updated At: {job.updatedAt}</p>
              <button className='apply-button' onClick={handleApplyClick}>Apply</button>
            </div>
          ))}
        </div>
      )}

      {!state && <p>No job details available</p>}
    </div>
  );
}

export default Searchview;

