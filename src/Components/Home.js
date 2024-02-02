import React ,{useState}from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {  EffectCoverflow,  Pagination, Navigation } from 'swiper/modules';
import ReactPlayer from 'react-player';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import PlaceIcon from '@mui/icons-material/Place';
import "./Home.css"

 import images1 from "./images/agriculter1.jpeg"
import images2 from "./images/reactimg2.jpeg"
import images3 from "./images/reactimg3.jpeg"
import images4 from "./images/reactimg4.jpeg"
import images6 from "./images/fleximages2.jpg"
import images7 from "./images/engerring3.jpeg"
import  images8  from './images/fleximages3.jpg';
import images9 from "./images/i.t2.jpeg"
import images10 from  "./images/fleximage1.jpg"
import images11 from "./images/i.t4.jpeg"
import jobsearch from "./images/jobsearch.mp4"
//  import jobsearch from "./viedoclip/jobsearch.mp4"
import { Link } from 'react-browser-router';

//  import { context} from "../App"


function Home() {
  const [isShown, setIsShown] = useState(true);

  const [text] = useTypewriter({
    words: ['welcome to kyodai carreer!' ],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after infinte runs.`)
  })
 
    function handleSubmit(){
      setIsShown((current => !current))
     
  }

  
  return (
    <div className="home-continer">
   
    <div className='homecontent'> 
         <ReactPlayer url={jobsearch} width="100%" height="100%" controls /> 
        <div className="video-overlay">
  
          <h1>kyodai career</h1>
          <strong>Connecting Dreams, Bridging Careers: Your Gateway to Professional Success in Japan.</strong>
        
          <span>powered by </span>
          <span>yokohama business group Ltd</span>
          <hr />
            Empowering Futures, One Opportunity at a Time: Where Your Career Journey Begins in Japan!
       
   {/* <Link className='job-post'>post job</Link>   */}
         
          
            <br />
          {/* <Link to="/apply/" >Apply Now</Link>  */}
          
        </div> 
      </div>

        <section>
         
          
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        >
       
        
        <SwiperSlide>
          <img src={images1}  alt="slide_image" />
          
        </SwiperSlide>
       
        <SwiperSlide>
          <img src={images7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images9} alt="slide_image" />
        </SwiperSlide>
    
        <SwiperSlide>
          <img src={images2} alt="slide_image" />
        </SwiperSlide>
      
        <SwiperSlide>
          <img src={images3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images4} alt="slide_image" />
        </SwiperSlide>
         <SwiperSlide>
          <img src={images2} alt="slide_image" />
        </SwiperSlide>
          
        <div className="slider-controler">
        
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div> 
          </div>
        </Swiper>
        </section>
        <div>
        </div>
         <div className='typewriter'>
    <h1>{text} 
   
    </h1> 
           <div className='findjob'>
            <h1>
             Find jobs
            
               
                <p className='bestjob'>

              Technical Skill
                </p>
               
            </h1>
              
      </div>
           </div>
           <div className=' social-icons'>
            <ul >
              <p className=' icons'>
                Follow us on:
               
              <li>
                <a  className="facebook"href="https://facebook.com">facebook<FaFacebook /></a>
               
              </li>
              <li>
                <a  className="youtube"href="https://youtube.com">youtube<FaYoutube/></a>
              </li>
              <li>
                <a  className ="instagram"href="https://instagram.com">instagram<FaInstagram/></a>
              </li>
              </p>
            </ul>
            
           </div>
           <div className='helpcontainer'>
        <div className='helpbox'>

     <button  className ="Helpbutton"onClick={handleSubmit}>Need Help</button>
     <div className={isShown ? 'display-block' : 'display-none'}>
        <h2>
            Need Help? Contact Us!
            <ul>
                <li>
                    <Link to ="/contact"className ="helpus">contact</Link><br></br>
                </li>
               
                <li>
                    <Link to ="/contact"className="helpus">Company Inquire</Link>
                </li>
            </ul>

        </h2>
      </div>
    </div>
              
        
           
    </div>

        <div  className=' images-flex'>
          
           <img src={images10}  alt='flex'/>
           <img src={images8} alt='flex'/>
           <img src={images6} alt='flex'/>
           
        </div>
        <p className='bestjob' style={{ marginLeft:"472px", marginBottom:"33px" }}>NoN-Technical Skill</p>
        <div className='images-flex'>
        <img src={images10} alt='flex'/>
           <img src={images8} alt='flex'/>
           <img src={images6} alt='flex'/>
        </div>
          
        
        
        

       
      < h4>Why kyodai Career</h4>
      <div className='jobs'>

    <div className='discrpition' >
    <div  className ="icons">
            <ScreenSearchDesktopIcon  />
          </div>
      <h1>People Search For Jobs on Nippon Career</h1>
        
 

      <p>
      They enter keywords relevant to their experience and background.
      </p>
    </div>
    <div className='discrpition'>
    <div  className ="icons">
    <ContentPasteSearchIcon  />
    </div>
      <h1>Jobs appear in search results</h1>
      <p> Nippon carrier matches the job description and location to the keywords.</p>
    </div>
    <div className='discrpition'>
    <div className='icons' >
    <PlaceIcon  />
    </div>
      <h1>matches the job description and location to the keywords.</h1>
      
      <p>Sponsored Jobs appear higher in search results while free listings lose visibility</p>
    </div>
    </div>
    <div>
    </div>
      </div>
  )
}
export default Home