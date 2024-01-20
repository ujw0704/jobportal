import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./FindJobs.css"
import {  useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { context } from '../App';





function FindJob() {
  const [findJob, setFindJob] = useState([]);
  const {id, setId} = useContext(context)

  const navigate = useNavigate()
  const apply = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/get-jobs`)
      .then((response) => {
        console.log('Success!', response.data.data);
        setFindJob(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching job data:', error);
      });
  }, []);
  function handleClick(e,jobid){
    e.preventDefault()
    // console.log(id)
    setId(jobid)
     navigate("/Single-Jobs")
  }
  function handleApplyClick(e){
    e.preventDefault()
     apply("/ApplyJobs")
  }

  return (
    <div className='FindJobs'>
      {
        findJob.map((job, index) => {
          return (
            <div className="jobCat"key={index}>
              <h2>Company: {job.company}</h2>
              <p>CreatedAt: {job.createdAt}</p>
              <p>Number: {job.number}</p>
              {/* <p>Password: {job.password}</p> */}
              <p>Position: {job.position}</p>
              <p>UpdatedAt: {job.updatedAt}</p>
              <p>WorkLocation: {job.workLocation}</p>
              <p>WorkType: {job.worktype}</p>
             <button  className="veiwButton"onClick={(e)=>handleClick(e,job._id)}>view</button>
              <br /><br />
             <button className='Applybutton' onClick={handleApplyClick}>Apply</button>
            </div>
          );
        })
    }
    </div>
  );
}

export default FindJob;
