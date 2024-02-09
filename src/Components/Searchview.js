
import React, { useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
 import "./SearchView.css"



function Searchview() {
    const { state } = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
      console.log("Single Job State:", state); // Debug: Log state
      if (state && state.singleJob) {
        console.log("Single Job Data:", state.singleJob); // Debug: Log singleJob data
        // You can then proceed to use the single job data as needed
      }
    }, [state]);

    function handleApplyClick(e){
      e.preventDefault()
      if(localStorage.getItem("token")){
        navigate("/ApplyJobs")
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
      </div>
    );
  }
 

export default Searchview;
