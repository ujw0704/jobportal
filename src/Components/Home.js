import React from "react";
import { Link } from "react-router-dom";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import PlaceIcon from "@mui/icons-material/Place";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import SearchIcon from "@mui/icons-material/Search";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import HotelIcon from "@mui/icons-material/Hotel";
import back from "../Components/images/background-images.png";
import search from "../Components/images/search.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="homesection">
        <div className="homecontent">
          {/* <h1>kyodai career</h1>  */}

          <img src={back} alt="images"></img>
        </div>
        <div className="headcont">
          <h1>kyodai career</h1>
         <p className="mainline"> Empowering Futures, One Opportunity at a Time  Where Your Career
          Journey Begins in Japan!</p>
          <hr />
          <div className="jobLink">
            <Link className="job-apply" to="/employers">
              Post Job
            </Link>
            {/* Link to Post Job */}
            <br />
            <Link className="job-apply" to="/apply/">
              Apply
            </Link>
          </div>
          {/* <h1>FIND-JOBS</h1> */}
          <div className="searchImage">
            <img src={search} alt="saarchImg" />
          </div>
        </div>
      </div>
      <div className="findjob">
        <div className="FindSearch">
          <input
            type="text"
            placeholder="Keyword/companyName"
            // value={centersearch}

            // onChange={(e)=>setcentersearch(e.target.value)}
          />
          <button className="searchdata">
            <SearchIcon />
          </button>
        </div>
        <section>
          <div className="jobs-container"></div>
        </section>
      </div>

      <h4>Why kyodai Career</h4>
      <div className="jobs">
        <div className="discrpition">
          <div className="icons">
            <SearchIcon />
          </div>
          <h1>People Search For Jobs on Nippon Career</h1>

          <p>
            They enter keywords relevant to their experience and background.
          </p>
        </div>
        <div className="discrpition">
          <div className="icons">
            <ContentPasteSearchIcon />
          </div>
          <h1>Jobs appear in search results</h1>
          <p>
            kyodai carrier matches the job description and location to the
            keywords.
          </p>
        </div>
        <div className="discrpition">
          <div className="icons">
            <PlaceIcon />
          </div>
          <h1>matches the job description and location to the keywords.</h1>

          <p>
            Sponsored Jobs appear higher in search results while free listings
            lose visibility
          </p>
        </div>
        <div className="wavecontainer">
          <h1>Road Map to kyodai Career</h1>
          <div id="wave">
            <div class="circle">
              <p>create account</p>
            </div>
            <div class="line-top"></div>

            <div class="circle">
              <p>upload cv</p>
            </div>

            <div class="line-bottom"></div>
            <div class="circle">
              <p>findjob</p>
            </div>
            <div class="line-top"></div>
            <div class="circle">
              <p>ApplyJobs</p>
            </div>
          </div>
        </div>
      </div>

        <div class="popularCategory">
          <h1>Popular Category</h1>
          <div className="catagory-items">
            
             
            <div class="category-item">
              <div className="icon">

              <EngineeringIcon  sx={{ fontSize: 90 }}/>
              </div>
              <div class="category-description">
                <p>Engineering</p>
                <p>0 Open Positions</p>
              </div>
            </div>

            <div className="category-item">
              <div className="icon">

              <ArchitectureIcon sx={{ fontSize: 90 }} />
              </div>
              <div className="category-description">
                <p>Architecture</p>
                <p>0 Open Positions</p>
              </div>
            </div>

            <div className="category-item">
              <div>
                 <div className="icon">

              <MedicationLiquidIcon sx={{ fontSize: 90 }} />
                 </div>
              </div>
              <div className="category-description">
                <p>Health</p>
                <p>0 Open Positions</p>
              </div>
            </div>

            <div className="category-item">
              <div className="icon">

              <CleaningServicesIcon sx={{ fontSize: 90 }} />
              </div>
              <div className="category-description">
                <p>Cleaning Services</p>
              </div>
            </div>

            <div className="category-item">
              <div className="icon">

              <HotelIcon sx={{ fontSize: 90 }} />
              </div>
              <div className="category-description">
                <p>Restaurant</p>
              </div>
            </div>
          </div>
        </div>

      <div>
        <section>
          <div className="getstarted">
            <h1>looking for job</h1>
            <br></br>
            <div className="right">
              <Link to="/login">join us</Link>
            </div>
            <div className="jobimages">
              <img
                src="https://supportfinity.com/assets/images/home/skilled-mini/skilled-mini@3x.webp"
                alt=""
              />
            </div>
          </div>
        </section>
        <section>
          <div className="share-button">
            <span>
              <i className="fas fa-share-alt"></i> Share!
            </span>
            <a href="https://facebook.com">
              <i className="fab fa-facebook-f"><FaFacebook /></i>
            </a>
            <a href="">
              <i className="fab fa-twitter"><FaYoutube/></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"><FaInstagram/></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
