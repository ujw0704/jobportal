import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./FindJobs.css"
import {  useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { context } from '../App';
import SearchIcon from '@mui/icons-material/Search';




function FindJob() {
  const [findJob, setFindJob] = useState([]);
  const {id, setId} = useContext(context)
  const {search,setSearch} = useContext(context)
  const[ searchFilter, setFilter]= useState([])

  const navigate = useNavigate()
  

  useEffect(() => {
    axios.get(`http://localhost:8000/get-jobs`)
      .then((response) => {
        console.log('Success!', response.data.data);
        setFindJob(response.data.data);
        setFilter(response.data.data)
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
    if(localStorage.getItem("token")){
      navigate("/ApplyJobs")
      
    }else{
      alert("login please!!")
      navigate("/login")
    }
   
  }
  useEffect(() => {
    console.log('Search:', search);
    console.log('Search Filter:', searchFilter);
  
    const result = searchFilter.filter((resp) => 
      (resp.title?.toLowerCase().includes(search.toLowerCase()) || false) ||
      (resp.company?.toLowerCase().includes(search.toLowerCase()) || false)
    );
  
    console.log('Filter Result:', result);
  
    setFindJob(result);
  }, [search]);
  
  return (
    
    <>
    <div className='seachbar'>
<input 
  type="text"
  id="search"
  placeholder="search jobs"
  
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
<SearchIcon className='searchicons'/>
  {/* <button onClick={HandleSubmit}>submit</button> */}

  </div>
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
  </>
  );
}

export default FindJob;
