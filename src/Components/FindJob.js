import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom'
function FindJob() {
  const [findJob, setFindJob] = useState([]);
  const navigate = useNavigate()
  const apply = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:8000/get-jobs`)
      .then((response) => {
        console.log('Success!', response.data);
        setFindJob(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching job data:', error);
      });
  }, []);
  function handleClick(e){
    e.preventDefault()
    navigate("/Single-Jobs/:jobId")
  }
  function handleApplyClick(e){
    e.preventDefault()
     apply("/ApplyJobs")
  }

  return (
    <div>
      {
        findJob.map((job, index) => {
          return (
            <div key={index}>
              <h2>Company: {job.company}</h2>
              <p>CreatedAt: {job.createdAt}</p>
              <p>Number: {job.number}</p>
              {/* <p>Password: {job.password}</p> */}
              <p>Position: {job.position}</p>
              <p>UpdatedAt: {job.updatedAt}</p>
              <p>WorkLocation: {job.workLocation}</p>
              <p>WorkType: {job.worktype}</p>
             <button onClick={handleClick}>view</button>
              <br /><br />
             <button onClick={handleApplyClick}>Apply</button>
            </div>
          );
        })
    }
    </div>
  );
}

export default FindJob;
