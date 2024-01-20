import React, {useEffect, useState}from 'react'
import axios from "axios"
// import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { context } from '../App';


function SingleJobs() {

  const [ SingleJobs , setSingleJobs] = useState()
  const{id} = useContext(context)
  // const { id } = useParams()

  
  
  
  
  useEffect(()=>{
  axios.get(`http://localhost:8000/single-jobs/:${id}`)
  .then(response => {
   
      console.log(response.data.data)
    
    
    
    
    // setSingleJobs(response.data.data);
  })
  .catch(error => {
    console.error('Error fetching job data:', error);

  });



 },[id])
//  if(!SingleJobs){
//   return <div>is loading...</div>

//  }
  return (
    <div>
    
    </div>
  )
}

export default SingleJobs