import {React,useState} from "react";
import hairing from "../Components/images/hiring.jpg";
import employerImg from "../Components/images/employer-6.jpg";
import employerbrand from "../Components/images/employerbrand.png"
import MailIcon from '@mui/icons-material/Mail';
import ArticleIcon from '@mui/icons-material/Article';
import MicIcon from '@mui/icons-material/Mic';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import  lifestyle from "../Components/images/lifestyle in japan.png"
import FaqData from 'react-faq-component'
import { useNavigate } from "react-router-dom";
import "./Employer.css";

function Employer() {
  //faq
  const [activeIndex, setActiveIndex] = useState(null);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (localStorage.getItem("token")) {
      navigate("/EmployerLogin");
    } else {
      navigate("/");
    }
  };


  //faq object
  const faqDataArray = [
    {
      title: 'FAQ (how it works) 1',
      rows: [
        {
          title: 'How do I change my password?',
          content: `Answer here.`,
        },
        {
          title: 'How do I sign up?',
          content:'Answer here.',
        },
      ],
    },
    {
      title: 'FAQ (how it works) 2',
      rows: [
        {
          title: 'How do I change my password?',
          content: `Answer here.`,
        },
        {
          title: 'How do I sign up?',
          content:'Answer here.',
        },
      ],
    },
    {
      title: 'FAQ (how it works) 3',
      rows: [
        {
          title: 'How do I change my password?',
          content: `Answer here.`,
        },
        {
          title: 'How do I sign up?',
          content:'Answer here.',
        },
      ],
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="employee-container">
      <div className="employer">
        <div className="imageparent"
        style={{ backgroundImage: `url(${employerImg})`}}>  
        

          
          <div className="imageChild2">
            <img src={hairing} alt="employer" />
          </div>
        </div>

        <div className="employercontext">
          
            <div className="employerClick">
              <button onClick={handleClick} className="employer-button">
                Start hiring
              </button>
            </div>
          </div>
          <div className="employerbrand">
            <div className="employerImages">
              <img src={employerbrand}alt="brandimg"/>
            </div>
          </div>
          <div className="carrerContainer">
            <div className="carrerHeader">

            <h2>Career Advice</h2>
            <h3>Tips to building a successful international career</h3>
            </div>
            <div className="iconsection">

              <div className="carrierparent">
            <div className="carreri">
                <MailIcon sx={{ fontSize: 60 }}/>
            </div>
                <div className="carreContentParent">
                  <p>cover-Letter</p>
                  <p>Letter format and
sample cover letter</p>

                  </div>

                </div>
                <div className="carrierparent">
            <div className="carreri">
                <ArticleIcon sx={{ fontSize: 60 }}/>
            </div>
                <div className="carreContentParent">
                  <p>Resume Guide</p>
                  <p>Essential Ways to Write a Resume</p>

                  </div>

                </div>
                <div className="carrierparent">
            <div className="carreri">
             <MicIcon sx={{ fontSize: 60 }}/>
            </div>
                <div>
                  <p>Interview Guide</p>
                  <p>Essential Ways to Write a Resume</p>

                  </div>

                </div>
                
                <div className="carrierparent">
            <div className="carreri">
                < CurrencyYenIcon sx={{ fontSize: 60 }}/>
            </div>
                <div className="carreContentParent">
                  <p>Salary Guide</p>
                  <p>Are you earning enough?</p>

                  </div>

                </div>
               

              </div>

            </div>
              <section>
                <div className="worklifeparent">

                <div className="workflow">
                  <h3>How is life in <b>JAPAN</b></h3>
                  
                </div>
                  <div className="graphimages">
                    <div  className="garphchild">
                      <img src={lifestyle} alt="JAPN"/>
                    </div>

                  </div>
                </div>
              </section>
              
              <section>
              <div className="faqsection">
      <h2 className="section-title">My FAQ&apos;s</h2>
      <div className="faq-style-wrapper">
        {faqDataArray.map((data, index) => {
          return(

            <FaqData
            key={index}
            data={data}
            getRowOptions={() => handleToggle(index)}
            activeIndex={activeIndex === index}
            />
            );
        })
      }    
          
      </div>
    </div>
              </section>
              

          </div>
        </div>
    
  
  );
}

export default Employer;
