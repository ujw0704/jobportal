
import React, { useState } from 'react';
 import "./Searchjob.css"
function Searchjob() {
  const locations = ["Japan"];
  const workTypes = ['Full-time', 'Part-time', 'Remote'];
  const experienceLevels = ['Entry-level', 'Mid-level', 'Senior'];
  const jobTitles = ["FULLSTACK", "BLOCKCHAIN", "DATA SCIENTIST", "LOT", "COMPUTER VISION", "UI/UX DESIGINER", "MECHANICAL ENGINEERING", "INDUSTRIAL ENGINEERING", "ARCHITECTURE", "INFRASTRUCTURE / CIVIL ENGINEERING", "NURSING CARE-GIVER", "AGRICULTURE", "AVIATION", "HOSPITALITY", "Automobile Engineer"];

  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedWorkType, setSelectedWorkType] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedJob, setSelectedJob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchQuery = {
      location: selectedLocation,
      workType: selectedWorkType,
      experienceLevel: selectedExperience,
      jobTitle: selectedJob,
    };

    console.log('Search Query:', searchQuery);
  };

  return (
    <div className='Search-Container'>
      <form  className='sreach-form' onSubmit={handleSubmit}>
        <label>
          Location:
          <select  className ="job-opt"value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
            
            <option  className ="jobs"value="">Select location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}className={selectedLocation===location ? 'selected-option' : ''}>
                {location}
              </option>
            ))}
          </select>
        </label>

        <label>
          Work Type:
          <select className='job-opt' value={selectedWorkType} onChange={(e) => setSelectedWorkType(e.target.value)}>
            <option className='jobs' value="">Select work type</option>
            {workTypes.map((workType, index) => (
              <option key={index} value={workType}className={selectedWorkType===workType ? 'selected-option' : ''}>
                {workType}
              </option>
            ))}
          </select>
        </label>

        <label>
          Experience Level:
          <select  className='job-opt'value={selectedExperience} onChange={(e) => setSelectedExperience(e.target.value)}>
            <option  className ='jobs' value="">Select experience level</option>
            {experienceLevels.map((experience, index) => (
              <option key={index} value={experience}className={selectedExperience === experience  ? 'selected-option' : ''}>
                {experience}
              </option>
            ))}
          </select>
        </label>

        <label>
          Job Title:
          <select className='job-opt' value={selectedJob} onChange={(e) => setSelectedJob(e.target.value)}>
            <option className='jobs' value="">Select job title</option>
            {jobTitles.map((job, index) => (
              <option key={index} value={job} className={selectedJob === job ? 'selected-option' : ''}>
                { job}
              </option>
            ))}
          </select>
        </label>

        <button className='job-btons' type="submit">Search</button>
      </form>
    </div>
  );
}

export default Searchjob;
