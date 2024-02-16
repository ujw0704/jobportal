import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { context } from "../App";

import PhoneIcon from "@mui/icons-material/Phone";
import PostAddIcon from "@mui/icons-material/PostAdd";
import UpdateIcon from "@mui/icons-material/Update";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CreateIcon from "@mui/icons-material/Create";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import "./Singlejobs.css";
import singlejob from "../Components/images/singlejob.png";
import singlebg from "../Components/images/singlebg.jpg"


function SingleJobs() {
  const { id, singleJobs, setSingleJobs } = useContext(context);
  // const { id } = useParams()

  useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:8000/single-jobs/:${id}`)
      .then((response) => {
        console.log(response.data.data);

        setSingleJobs(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  }, [id]);
  console.log(SingleJobs);
  //  if(!SingleJobs){
  //   return <div>is loading...</div>

  //  }
  return (
    <div className=" containersinglejobs">
      {singleJobs.company && (
        <div className="singleData">
          <div className="singleimagesparent">
            <div className="singleimagesChild">
              <img src={singlebg} alt="single" />
            </div>
          </div>

          <div className="singleParent">
            <div className="singlechild">
              <h2 className="singledata">
                <span><ApartmentIcon /></span>
                CompanyName:{singleJobs.company}
              </h2>
              <p className="singledata">
                {" "}
                <span>

                <AttachEmailIcon  sx={{fontSize:22}}/> email:{singleJobs.email}
                </span>
              </p>
              <p className="singledata">
                {" "}
               <span><PostAddIcon /></span>
                Position:<span className="space"></span> {  singleJobs.position}
              </p>
              <p className="singledata">
               <span> <PhoneIcon /></span> 
                PhoneNumber:{singleJobs.number}
              </p>
              <p className="singledata">
                <span>
                  
                <Diversity3Icon />
                </span>
                WorkType:{singleJobs.worktype}
              </p>
              <p className="singledata">
                <span>

                <CreateIcon />
                </span>
                CreatedAt:{singleJobs.createdAt}
              </p>
              <p className="singledata">
                <span>

                <UpdateIcon />
                </span>
                updateAt:{singleJobs.updatedAt}
              </p>
            </div>
          </div>
          <div className="singlebutton">
            <div className="singlechildbtn">
              <Link to="/ApplyJobs">
                <button >Apply Jobs</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleJobs;
