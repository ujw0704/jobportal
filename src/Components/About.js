import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about-container'>
      <div className='about-section'>
        <h1>About Our Job Portal</h1>
        <p>
          Welcome to our job portal! We are a dedicated team of professionals striving to connect talented individuals with exciting job opportunities. Our mission is to make the job search and hiring process seamless and efficient.
        </p>
        <p>
          Whether you are a job seeker looking for the perfect career path or an employer seeking top-notch talent, our platform is designed to meet your needs. We believe in creating meaningful connections that lead to successful and fulfilling careers.
        </p>
      </div>
      <div className='right-img'>
         <img src='https://source.unsplash.com/800x600/?office' alt='Office' /> 
       <img src='https://source.unsplash.com/800x600/?workplace' alt='Workplace' />
        <img src='https://source.unsplash.com/800x600/?meeting' alt='Meeting' />
       
      </div>
    </div>
  );
}

export default About;
