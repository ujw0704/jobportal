
import React, { useState } from 'react';
import "./ApplyJobs.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function ApplyJobs() {
  const [applyFormData, setApplyFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    resume: null,
    coverLetter: '',
    experienceLevel: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setApplyFormData({
        ...applyFormData,
        [name]: files[0],
      });
    } else {
      setApplyFormData({
        ...applyFormData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("token")) {
      alert("Please log in to apply for jobs!");
      navigate("/login");
      return; 
    }

    const formData = new FormData();
    formData.append('name', applyFormData.name);
    formData.append('email', applyFormData.email);
    formData.append('phoneNumber', applyFormData.phoneNumber);
    formData.append('resume', applyFormData.resume);
    formData.append('coverLetter', applyFormData.coverLetter);
    formData.append('experienceLevel', applyFormData.experienceLevel);

    axios.post("http://localhost:8000/applyJobs", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log(response.data);
      console.log('Application Submitted:', applyFormData);
      // Reset the form after successful submission
      setApplyFormData({
        name: '',
        email: '',
        phoneNumber: '',
        resume: null,
        coverLetter: '',
        experienceLevel: '',
      });
    })
    .catch(error => {
      console.error('Error job data:', error);
    });
  };

  return (
    <div className='applyJobsContainer'>
      <div className='applyjobs'>
        <form className="applyFormData" onSubmit={handleSubmit}>
          <h2 className='headerapply'>Job Application Form:</h2>

          <label>Name:</label>
          <input
            className='applyinput'
            type="text"
            name="name"
            value={applyFormData.name}
            onChange={handleInputChange}
            required
          />

          <label>Email:</label>
          <input
            className='applyinput'
            type="email"
            name="email"
            value={applyFormData.email}
            onChange={handleInputChange}
            required
          />

          <label>Phone Number:</label>
          <input
            className='applyinput'
            type="tel"
            name="phoneNumber"
            value={applyFormData.phoneNumber}
            onChange={handleInputChange}
            required
          />

          <label>Resume: (Attach your resume)</label>
          <input
            className='applyinput'
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleInputChange}
            required
          />

          <label>Cover Letter:</label>
          <textarea
            name="coverLetter"
            value={applyFormData.coverLetter}
            onChange={handleInputChange}
            required
          />

          <label>Experience Level:</label>
          <select
            className='jobSelcet'
            name="experienceLevel"
            value={applyFormData.experienceLevel}
            onChange={handleInputChange}
            required
          >
            <option value="">Select</option>
            <option value="fresher">Fresher</option>
            <option value="experienced">Experienced</option>
          </select>

          <button className="SUBMIT" type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default ApplyJobs;
