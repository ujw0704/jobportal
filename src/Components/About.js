
import React from 'react';
import './About.css';
import uj from "../Components/images/fuji-mountain-kawaguchiko-lake-sunset-autumn-seasons-fuji-mountain-yamanachi-japan.jpg"
import ku from "../Components/images/temple.jpg"

function About() {
  return (
    <div className="we-are-block">

      <div id="about-us-section" className="section">

        <div className="about-us-info">
          <h2>About Our Job Portal</h2>
          <p>Welcome to Kyodai Japan Job, a groundbreaking initiative powered by Yokohama Business Group Japan with a strong partnership of Kyodai Business India, dedicated to transforming the employment landscape from India to Japan. Our revolutionary platform tirelessly endeavors to bridge the gap between forward-thinking companies seeking their perfect match and individuals yearning to amplify their career opportunities in Japan.</p>
          <a href="#" title="History Button">About us</a>
        </div>

        <div className="about-us-image">
          <img src={uj} width="644" height="458" alt="Lobby Image"/>
        </div>

      </div>

      <div id="history-section" className="section">

        <div className="history-image">
          <img src={ku} alt="Building Pic"/>
        </div>

        <div className="history-info">
          <h2>Kyodai Career</h2>
          <p>At Kyodai Job, we've meticulously crafted a user-friendly space that goes beyond the conventional norms of job hunting. It is not merely a job portal; it is an immersive experience designed to be your one-stop solution for all your employment and career advancement needs.</p>
          <p>With just a click, Kyodai Jobs opens the door to a plethora of opportunities, making job hunting and talent acquisition a streamlined and hassle-free process. Whether you are a company in search of the perfect candidate or an individual eager to embark on a new career journey, our platform is your trusted companion.</p>
          <p>Join us on this transformative journey as we redefine the future of employment in Japan. Career Nippon - where aspirations meet opportunities, and careers take flight.</p>
          <a href="#" title="History Button">About us</a>
        </div>

      </div>

    </div>
  );
}

export default About;
