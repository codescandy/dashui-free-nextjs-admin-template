"use client"
import React, { useState } from 'react';
import "../../styles/login_signup.css";

function SignupPage() {
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSignup = () => {
    const previousSignups = JSON.parse(localStorage.getItem('signups')) || [];
     // Calculate the new ID based on the length of existing signups
    const newId = previousSignups.length + 1;
    const newSignupData = { id: newId, ...signupData };
    const updatedSignups = [...previousSignups, newSignupData];
    localStorage.setItem('signups', JSON.stringify(updatedSignups));
    // You can add further validation and error handling here
    alert('Signup successful! Please proceed to login.');
  };

  return (
    <div id="signup" className="fPage m-3">
      <form id="signupForm" className="card-container rounded-2">
        <h2 className="mb-3 text-center">Signup</h2>
        <label htmlFor="firstName" className="form-label">
          First Name
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="form-control"
            value={signupData.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="lastName" className="form-label">
          Last Name
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="form-control"
            value={signupData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="email" className="form-label">
          Email Address
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            value={signupData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="password" className="form-label">
          Password
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            value={signupData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <div className='d-flex justify-content-center'>
          <button className="btn btn-outline-primary" type="button" onClick={handleSignup}>
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
