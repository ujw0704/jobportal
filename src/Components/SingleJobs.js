import React, {useEffect, useState}from 'react'
import axios from "axios"
import { Link} from 'react-router-dom'
import { useContext } from 'react';
import { context } from '../App';
 import "./Singlejobs.css"

function SingleJobs() {

  const [ SingleJobs , setSingleJobs] = useState({})
  const{id} = useContext(context)
  // const { id } = useParams()

  
  
  
  
  useEffect(()=>{
    console.log(id)
  axios.get(`http://localhost:8000/single-jobs/:${id}`)
  .then(response => {
   
      console.log(response.data.data)


      setSingleJobs(response.data.data);
      
      
      
      
    })
    .catch(error => {
      console.error('Error fetching job data:', error);
      
    });
    
    
    
  },[id])
  console.log(SingleJobs)
//  if(!SingleJobs){
//   return <div>is loading...</div>

//  }
  return (
    <div className='singlejobs'>
      {
        <>
       
        <h2>CompamyName:{SingleJobs.company}</h2>
        <h2> email:{SingleJobs.email}</h2>
        <h2> Position:{SingleJobs.position}</h2>
        <h2>PhoneNumber:{SingleJobs.number}</h2>
        <h2>WorkType:{SingleJobs.worktype}</h2>
         <h2>CreatedAt:{SingleJobs.createdAt}</h2>
         <h2>updateAt:{SingleJobs.updatedAt}</h2>
         <Link to="/ApplyJobs">
            <button>Apply Jobs</button>
          </Link>
        </>


      }
    </div>
  )
}

export default SingleJobs