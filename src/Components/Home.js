import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import PlaceIcon from "@mui/icons-material/Place";
import "./Home.css";
import images1 from "./images/agriculter1.jpeg";
import images2 from "./images/reactimg2.jpeg";
import images3 from "./images/reactimg3.jpeg";
import images4 from "./images/reactimg4.jpeg";
import images6 from "./images/fleximages2.jpg";
import images7 from "./images/engerring3.jpeg";
import images8 from "./images/fleximages3.jpg";
import images9 from "./images/i.t2.jpeg";
import images10 from "./images/fleximage1.jpg";
import images11 from "./images/i.t4.jpeg";
//  import { Link } from 'react-browser-router';
import { Link } from "react-router-dom";

function Home() {
  const [text] = useTypewriter({
    words: ["welcome to Nippon carreer!"],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after infinte runs.`),
  });

  return (
    <div className="home-continer">
      <section>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={images1} alt="slide_image" />
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
          {/* <SwiperSlide>
          <img src={images10} alt="slide_image" />
          </SwiperSlide>
        */}
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
      <div></div>
      <div className="typewriter">
        <h1>{text}</h1>
      </div>
      <div className="sec">
        <h1 className="sec-heading">
          Find jobs
          {/* <p>

              </p> */}
          <Link to="/apply/" className="btn btn-primary py-3 px-5">
            Apply Now
          </Link>
        </h1>
        <div className="images-flex">
          <div className="image-flex-wrapper">
            <img src={images10} alt="flex" />
          </div>
          <div className="image-flex-wrapper">
            <img src={images8} alt="flex" />
          </div>
          <div className="image-flex-wrapper">
            <img src={images6} alt="flex" />
          </div>
        </div>
      </div>

      <div className="jobs sec">
        <h1 className="sec-heading">Why Nippon Career</h1>
        <div className="discrpition-wrapper">
          <div className="discrpition">
            <div className="icon">
              <ScreenSearchDesktopIcon />
            </div>
            <h1>People Search For Jobs on Nippon Career</h1>
            <p>
              They enter keywords relevant to their experience and background.
            </p>
          </div>
          <div className="discrpition">
            <div className="icon">
              <ContentPasteSearchIcon />
            </div>
            <h1>Jobs appear in search results</h1>
            <p>
              Nippon carrier matches the job description and location to the
              keywords.
            </p>
          </div>
          <div className="discrpition">
            <div className="icon">
              <PlaceIcon />
            </div>
            <h1>Matches the job description and location to the keywords.</h1>
            <p>
              Sponsored Jobs appear higher in search results while free listings
              lose visibility
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
