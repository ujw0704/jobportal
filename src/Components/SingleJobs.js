import React, {useEffect}from 'react'
import axios from "axios"
import { Link} from 'react-router-dom'
import { useContext } from 'react';
import { context } from '../App';
 import "./Singlejobs.css"

function SingleJobs() {


  const{id,singleJobs , setSingleJobs} = useContext(context)
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
      
      singleJobs.company &&
        <div>

       
        <h2 className='singledata'>CompanyName:{singleJobs.company}</h2>
        <p className='singledata'> email:{singleJobs.email}</p>
        <p className='singledata'> Position:{singleJobs.position}</p>
        <p className='singledata'>PhoneNumber:{singleJobs.number}</p>
        <p className='singledata'>WorkType:{singleJobs.worktype}</p>
         <p className='singledata'>CreatedAt:{singleJobs.createdAt}</p>
         <p className='singledata'>updateAt:{singleJobs.updatedAt}</p>
         <Link to="/ApplyJobs">
            <button style={{width:"120px",marginBottom:"30px" ,marginLeft: "76px"
}}>Apply Jobs</button>
          </Link>
        
      </div>

      
    }
    </div>
  )
}

export default SingleJobs