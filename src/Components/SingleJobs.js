import React, {useEffect, useState}from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
function SingleJobs() {

  const [ SingleJobs , setSingleJobs] = useState()
  const { jobId } = useParams()

  
  
  
  
  useEffect(()=>{
  axios.get(`http://localhost:8000/single-jobs/:id${jobId}`)
  .then(response => {
    // console.log(response.data)
    setSingleJobs(response.data.data);
  })
  .catch(error => {
    console.error('Error fetching job data:', error);
  });



 },[jobId])
 if(!SingleJobs){
  return <div>is loading...</div>

 }
  return (
    <div>
    
    </div>
  )
}

export default SingleJobs