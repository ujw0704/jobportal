import React, { useState } from "react";
import { Link } from "react-router-dom";

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
import { FaYoutube } from "react-icons/fa";
import chart from "../Components/images/piechart for visa.jpg";
// import benfit from "../Components/images/befint.png"
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { context } from "../App";
import axios from "axios";

import "./Home.css";

function Home() {
  const [isShown, setIsShown] = useState(true);
  const [centersearch, setcentersearch] = useState("");
  const { searchResults, setSearchResults } = useContext(context);
  const navigate = useNavigate();
  //  const [currentPage, setCurrentPage] = useState(1);

  // const { search, setSearch}=useContext(context)
  function handleSubmit() {
    setIsShown((current) => !current);
  }

  // const handlesearchChange = (e) => {
  //   setSearch(e.target.value);
  // };

  function handlesearchOnclick(e) {
    e.preventDefault();
    // setCurrentPage(1);
    fetchSearchResults();
    navigate("/AdvanceSaerch");
  }
  function fetchSearchResults() {
    axios
      .get(`http://localhost:8000/centerSearch/:${centersearch}?page`)
      .then((response) => {
        if (response.data.status === 200) {
          console.log("Success!", response.data);
          setSearchResults(response.data.data);
        } else {
          setSearchResults([]);
          alert("No data");
        }
      })
      .catch((error) => {
        console.log("Error fetching job data:", error);
      });
  }

  return (
    <div className="home-container">
      <div className="homesection">
        <div className="homecontent">
          {/* <h1>kyodai career</h1>  */}

          <img src={back} alt="images"></img>
        </div>
        <div className="headcont">
          <h1>kyodai career</h1>
          <p className="mainline">
            {" "}
            Empowering Futures, One Opportunity at a Time Where Your Career
            Journey Begins in Japan!
          </p>
          <hr />
          <div className="jobLink">
            <Link className="job-apply" to="/employers">
              Post Job
            </Link>
            {/* Link to Post Job */}
            <br />
            <Link className="job-apply" to="/ApplyJobs">
              Apply Jobs
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
            placeholder="Keyword/companyName/Position"
            value={centersearch}
            onChange={(e) => setcentersearch(e.target.value)}
          />
          <button onClick={handlesearchOnclick} className="searchdata">
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
              <EngineeringIcon sx={{ fontSize: 90 }} />
            </div>
            <div class="category-description">
              <p>Engineering</p>
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

      <div className="seconde-container">
        <section>
          <div className="graphcontainer">
            <div className="chartcontaint">
              <div className="chart">
                  <h2>Jobs in Japan for Foreigners!</h2>
                <p>
                  Japan's dynamic job market offers many opportunities,
                  targeting a wide range of skill sets and interests. There are
                  specific industries where foreigners seem to thrive the most,
                  making them popular choices among foreign job-seekers in
                  Japan.  
                </p>
              </div>
            </div> 
              <div className="chartchild">
                <img src={chart} alt="chart" />
              </div>
          
          </div>
        </section>

        <section className="youthindia-section">
          <div className="youthindia">

          <div className="high-skill-cont">
              <div className="straitline"></div>
                 <span>WHAT IS S.S.W VISA?</span> 
              <div className="straitline"></div>
            </div> 
            <div className="youthparents">
              <div className="youthchild">
                <p>
                  ‘Specified Skilled Worker’ is a new residency status that was
                  introduced by the Government of Japan in April 2019, under
                  which aspiring Indian youth can take up a job and stay in
                  Japan. Japan introduced ‘Specified Skilled Worker’ to address
                  the severe labor shortages in Japan by accepting foreign human
                  resources with specific expertise and skills. As of July 2022,
                  Japan has signed the SSW Memorandum of Cooperation (MoC) with
                  15 nations including India. India and Japan signed a
                  Memorandum of Cooperation in January 2021 for the
                  implementation of ‘Specified Skilled Worker’ between India and
                  Japan</p>
                  <div  className="position-cnt-list"> 
                      <h1>Sectors of work</h1>
                      <ul >
                        <l1>Nursing care</l1>
                        <l1>Agriculture</l1>
                        <l1>Food service industry</l1>
                        <l1>Aviation industry</l1>
                        <l1>Hospitality</l1>
                        <l1>Automobile repair and maintenance</l1>
                      </ul>
                   
                  </div>
                  <p>   This residential visa is valid for 5 years, along with
                  benefits like pension payment, paid leaves and many other such
                  benefits. However taking a dependant under this visa is
                  currently not allowed.  </p>
                 
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="youthindia">

            <div className="high-skill-cont">
              <div className="straitline"></div>
                 <span>WHAT IS HIGH-SKILL VISA?</span> 
              <div className="straitline"></div>
            </div>

            <div className="youthparents"> 
              <div  className="youthchild"> 
                <p>  Foreign nationals who are certified as Highly-Skilled
                  Professionals in Japan are granted significant advantages.
                  Highly-Skilled Professional visa holders are always granted a
                  five-year visa, the longest visa available & can apply for
                  permanent residence after only one year of stay in Japan,
                  while ordinary visa holders must have stayed in Japan for at
                  least 10 years to apply for permanent residence. In the case
                  of a general work visa, the requirements for a work visa must
                  be met and changed if the spouse, such as a wife, works in
                  Japan.  </p>

                <div className="position-cnt-list"> 
                    <h1>Positions Available</h1>
                    <ul>
                      <l1> IT Software Developer</l1>
                      <l1>BLOCK CHAIN</l1>
                      <l1>DATA SCIENTIST</l1>
                      <l1> IoT</l1>
                      <l1>Computer Vision</l1>
                      <l1>UI/UX Designer</l1>
                      <l1> Architecture</l1>
                      <l1>Mechanical Engineer</l1>
                    </ul>
                </div> 
                <p>  This residential visa is valid for 5 years, along with
                  benefits like pension payment, paid leaves and many other such
                  benefits. However taking a dependant under this visa is
                  currently not allowed.
                </p> 
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="youthcontent">
            <h1>What is the Process for SSW Visa ?</h1>
            <hr />

            <div class="timeline">
              <div class="container left">
                <div class="content">
                  <h2>Step 1</h2>
                  <p>Learn Japanese Language & pass JFT/N4 exam</p>
                </div>
              </div>
              <div class="container right">
                <div class="content">
                  <h2>Step 2</h2>
                  <p>
                    Pass Skill exam in any field of your choice aviable(under
                    SSW Programme)
                  </p>
                </div>
              </div>
              <div class="container left">
                <div class="content">
                  <h2>Step 3</h2>
                  <p>Receive Assitance for Job Placement</p>
                </div>
              </div>
              <div class="container right">
                <div class="content">
                  <h2>Step 4</h2>
                  <p>Get employer by accepting company</p>
                </div>
              </div>
              <div class="container left">
                <div class="content">
                  <h2>Step 5</h2>
                  <p>Application for Coe (will be assitanced)</p>
                </div>
              </div>
              <div class="container right">
                <div class="content">
                  <h2>Step 5</h2>
                  <p>Issue of Coe by Japan embassy</p>
                </div>
              </div>
              <div class="container left">
                <div class="content">
                  <h2>Step 6</h2>
                  <p>Enter Japan</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="custom-timeline-container">
            <h2>What is the Process for High Skill Visa (In Japan)</h2>
            <div class="custom-timeline">
              <div class="custom-timeline-section">
                <div class="custom-timeline-circle">1</div>
                <div class="custom-timeline-content">
                  <h5>learn language</h5>
                  <p>Learn Japanse Language & Pass JLPT(min Level-3)</p>
                </div>
              </div>

              <div class="custom-timeline-path"></div>

              <div class="custom-timeline-section">
                <div class="custom-timeline-content">
                  <h5>Interview</h5>
                  <p>Connect with Us For Preliminary interview</p>
                </div>
                <div class="custom-timeline-circle">2</div>
              </div>

              <div class="custom-timeline-path"></div>

              <div class="custom-timeline-section">
                <div class="custom-timeline-circle">3</div>
                <div class="custom-timeline-content">
                  <h5>Job Placemanent</h5>
                  <p>
                    Receive Assitance For Job Placement
                    <br />
                    Get Offer From Desired Company(for prelim Pass)
                  </p>
                </div>
              </div>
              <div class="custom-timeline-path"></div>

              <div class="custom-timeline-section">
                <div class="custom-timeline-content">
                  <h5>Get Hired</h5>
                  <p>Get Interview with your Hiring Company</p>
                </div>
                <div class="custom-timeline-circle">4</div>
              </div>
              <div class="custom-timeline-path"></div>

              <div class="custom-timeline-section">
                <div class="custom-timeline-circle">5</div>
                <div class="custom-timeline-content">
                  <h5>Get Assitance</h5>
                  <p>
                    You Will Get Assitance For Application of Coe(we will Guide
                    You)
                  </p>
                </div>
              </div>
              <div class="custom-timeline-path"></div>
              <div class="custom-timeline-section">
                <div class="custom-timeline-content">
                  <h5>Get in Touch With Japanse Ambassy </h5>
                  <p>Issue of Coe By Japanse Ambassy</p>
                </div>
                <div class="custom-timeline-circle">6</div>
              </div>
              <div class="custom-timeline-path"></div>

              <div class="custom-timeline-section">
                <div class="custom-timeline-circle">7</div>
                <div class="custom-timeline-content">
                  <h5>Issue Of Visa</h5>
                  <p>Visa Issue Application In India</p>
                </div>
              </div>
              <div class="custom-timeline-path"></div>
            </div>
          </div>
        </section>

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
              <i className="fab fa-facebook-f">
                <FaFacebook />
              </i>
            </a>
            <a href="">
              <i className="fab fa-twitter">
                <FaYoutube />
              </i>
            </a>
            <a href="#">
              <i className="fab fa-instagram">
                <FaInstagram />
              </i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </section>
      </div>
      <section>
        <div>
          <h6>
            Company That provide Free Assitance to Land you Get a Job in Japan
          </h6>
        </div>
      </section>
    </div>
  );
}

export default Home;
