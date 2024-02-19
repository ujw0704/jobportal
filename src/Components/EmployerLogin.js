import React, { useState } from "react";
import { Link } from "react-router-dom";
import   employepic from "../Components/images/employee.png";

import axios from "axios";
import "./EmployerLogin.css";

function EmployerLogin() {
  //   const navigate = useNavigate();
  const [LoginData, setLoginData] = useState({
    company: "",
    password: "",
    number: "",
    email: "",
    position: "",
    worktype: "",
    workLocation: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(LoginData);
    // navigate('/Login');
    axios
      .post("http://localhost:8000/jobs", LoginData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error job data:", error);
      });
  }

  function handleChange(event) {
    setLoginData({
      ...LoginData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="Employer-login">
      <div className="employeform">
    
        <div className="emplyeimage-parents">
          <div className="employeeimage-child">
            <img src={employepic } alt="Employee" />
          </div>
          <h1 style={{color:"green"}}>Post your Job Here </h1>
        </div>

        <form className="employeform" onSubmit={handleSubmit}>
          <label htmlFor="Company">Company Name:</label>
          <input
            className="employeeinputs"
            type="text"
            placeholder="e.g., Amazon & CarrenZen"
            value={LoginData.company}
            id="company"
            name="company"
            autoComplete="off"
            required
            onChange={handleChange}
          />

          <label htmlFor="Mobile">Mobile:</label>
          <input
            className="employeeinputs"
            type="text"
            id="number"
            name="number"
            placeholder="Enter your Number"
            value={LoginData.number}
            pattern="[0-9]*"
            required
            onChange={handleChange}
          />

          <label htmlFor="Password">Password:</label>
          <input
            className="employeeinputs"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={LoginData.password}
            autoComplete="off"
            required
            onChange={handleChange}
          />

          <label htmlFor="Email">Email:</label>
          <input
            className="employeeinputs"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            value={LoginData.email}
            autoComplete="off"
            required
            onChange={handleChange}
          />

          <label htmlFor="Position">Position:</label>
          <input
            className="employeeinputs"
            type="text"
            id="position"
            name="position"
            placeholder="Enter your position"
            value={LoginData.position}
            autoComplete="off"
            onChange={handleChange}
          />

          <label htmlFor="Work Type">Work Type:</label>
          <select
            className="employeeinputs"
            type="text"
            id="worktype"
            name="worktype"
            value={LoginData.worktype}
            autoComplete="off"
            onChange={handleChange}
          >
            <option value="">Select Work Type</option>
            <option value="full-time"> Full-Time</option>
            <option value="part-time">Part-time"</option>
            <option value="intership">Internship</option>
            <option value="contract">contract</option>
          </select>

          <label htmlFor="Work Location">Work Location:</label>
          <input
            className="employeeinputs"
            type="text"
            id="workLocation"
            name="workLocation"
            placeholder="Enter your work location"
            value={LoginData.workLocation}
            autoComplete="off"
            onChange={handleChange}
          />
            <div className="employbtn">

          <button className="employerbtn" type="submit">
            Submit
          </button>
            </div>

          <ul className="employe" style={{color:"blue"}}>
            <li >
              Don't have an account? <Link to="/Login" className="employerLink">Login!</Link>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default EmployerLogin;
