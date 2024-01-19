import React, { useState } from 'react';
import "./ApplyJobs.css"
function ApplyJobs() {
  const [applyFormData, setApplyFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    resume: '',
    coverLetter: '',
    experienceLevel: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplyFormData({
      ...applyFormData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Application Submitted:', applyFormData);
   
    setApplyFormData({
      name: '',
      email: '',
      phoneNumber: '',
    //   resume: '',
      coverLetter: '',
      experienceLevel: '',
    });
  };

  return (
      <div className=' applyJobsContainer'>
        <div className='applyjobs'>

      <form onSubmit={handleSubmit}>
        <h2 className='headerapply'>Job Application Form :</h2>
        <label>
          Name:
          <input 
            type="text"
            name="name"
            value={applyFormData.name}
            onChange={handleInputChange}
            required
            />
        </label>
        
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={applyFormData.email}
            onChange={handleInputChange}
            required
            />
        </label>
  
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={applyFormData.phoneNumber}
            onChange={handleInputChange}
            required
            />
        </label>
        
        <label>
          Resume (Attach your resume):
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleInputChange}
            required
            />
        </label>
        
        <label>
          Cover Letter:
          <textarea
            name="coverLetter"
            value={applyFormData.coverLetter}
            onChange={handleInputChange}
            required
            />
        </label>
        
        <label>
          Experience Level:
          <select className='jobSelcet'
            name="experienceLevel"
            value={applyFormData.experienceLevel}
            onChange={handleInputChange}
            required
            >
            <option value="">Select</option>
            <option value="fresher">Fresher</option>
            <option value="experienced">Experienced</option>
          </select>
        </label>
        
        <button  className ="SUBMIT"type="submit">Submit Application</button>
      </form>
    </div>
              </div>
  );
}

export default ApplyJobs;
