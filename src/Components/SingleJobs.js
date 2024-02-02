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
       
        <h2 className='singledata'>CompamyName:{SingleJobs.company}</h2>
        <p className='singledata'> email:{SingleJobs.email}</p>
        <p className='singledata'> Position:{SingleJobs.position}</p>
        <p className='singledata'>PhoneNumber:{SingleJobs.number}</p>
        <p className='singledata'>WorkType:{SingleJobs.worktype}</p>
         <p className='singledata'>CreatedAt:{SingleJobs.createdAt}</p>
         <p className='singledata'>updateAt:{SingleJobs.updatedAt}</p>
         <Link to="/ApplyJobs">
            <button style={{width:"120px",marginBottom:"30px"}}>Apply Jobs</button>
          </Link>
        </>


      }
    </div>
  )
}

export default SingleJobs