import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about-container'>
      <div className='about-section'>
        <h1>About Our Job Portal</h1>
        <p>
        Welcome to Kyodai Japan Job, a groundbreaking initiative powered by Yokohama Business  Group Japan with strong partnership of Kyodai Business India, dedicated to transforming the employment landscape from India to Japan. Our revolutionary platform tirelessly endeavors to bridge the gap between forward-thinking companies seeking their perfect match and individuals yearning to amplify their career opportunities in Japan. 

        </p>
        <p>
        At Kyodai Job,  we've meticulously crafted a user-friendly space that goes beyond the conventional norms of job hunting. It is not merely a job portal; it is an immersive experience designed to be your one-stop solution for all your employment and career advancement needs. 
        </p>
        <p>
        With just a click, Kyodai Jobs opens the door to a plethora of opportunities, making job hunting and talent acquisition a streamlined and hassle-free process. Whether you are a company in search of the perfect candidate or an individual eager to embark on a new career journey, our platform is your trusted companion.

        </p>
        <p>
        Join us on this transformative journey as we redefine the future of employment in Japan. Career Nippon - where aspirations meet opportunities, and careers take flight.

        </p>
      </div>
      <div className='right-img'>
         <img src='https://source.unsplash.com/800x600/?office' alt='Office' /> 
       {/* <img src='https://source.unsplash.com/800x600/?workplace' alt='Workplace' />
        <img src='https://source.unsplash.com/800x600/?meeting' alt='Meeting' /> */}
       
      </div>
    </div>
  );
}

export default About;
