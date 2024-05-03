"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/login_signup.css";

function LoginPage() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    uname: '',
    pwd: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedSignupData = JSON.parse(localStorage.getItem('signups'));
    const matchedUser = storedSignupData.find(user => user.firstName === loginData.uname && user.password === loginData.pwd);
    if (matchedUser) {
    // Set logged-in status in localStorage
    localStorage.setItem('isUserLogged', true);

    toast.success('Login successful!', {
      position: 'top-right',
      autoClose: 1000,
      onClose: () => {
        router.push('/');
      }
    });
    } else {
      toast.error('Invalid username or password.', { position: 'top-right' });
    }
  };

  return (
    <div id="login" className="fPage">
      <ToastContainer position="top-right" />
      <form id="loginForm" className="card-container rounded-2">
        <h2 className="mb-3 text-center">Login</h2>
        <label htmlFor="uname" className="form-label">
          Username
          <input
            id="uname"
            name="uname"
            type="text"
            className="form-control"
            value={loginData.uname}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="pwd" className="form-label">
          Password
          <input
            id="pwd"
            name="pwd"
            type="password"
            className="form-control"
            value={loginData.pwd}
            onChange={handleInputChange}
            required
          />
        </label>
        <div className='d-flex justify-content-center'>
          <button className="btn btn-outline-primary" type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;