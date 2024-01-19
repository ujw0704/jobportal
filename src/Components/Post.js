import React, { useState } from 'react';

function Post() {
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    worktype: '',
    workLocation: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  

  
     
    console.log('Form Data:', formData);

    
   
  };

  return (
    <div>
      <h2>Create a New Job</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Company:
          <input type="text" name="company" value={formData.company} onChange={handleChange} />
        </label>
        <br />
        <label>
          Position:
          <input type="text" name="position" value={formData.position} onChange={handleChange} />
        </label>
        <br />
        <label>
          Work Type:
          <input type="text" name="worktype" value={formData.worktype} onChange={handleChange} />
        </label>
        <br />
        <label>
          Work Location:
          <input type="text" name="workLocation" value={formData.workLocation} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Post;
