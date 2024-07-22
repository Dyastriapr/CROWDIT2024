import React from 'react';
import { imgFacebook, imgGoogle, imgRegister } from '../assets';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Regis = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    Swal.fire({
      title: 'Success!',
      text: 'You have successfully signed up.',
      icon: 'success',
      confirmButtonText: 'Go To Login Page',
      confirmButtonColor: '#55ACD0', // Customize confirm button color (use your primary color)
      customClass: {
        container: 'swal2-container-custom', // Apply custom class for further styling if needed
        popup: 'swal2-popup-custom',
        title: 'swal2-title-custom',
        htmlContainer: 'swal2-html-container-custom',
        confirmButton: 'swal2-confirm-button-custom',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login');
      }
    });
  };

  return (
    <div className="flex h-screen">
      {/* Left side */}
      <div className="hidden md:flex relative w-1/2 items-center justify-center bg-primary">
        <img src={imgRegister} alt="Info Graphic" className="w-3/4 h-full object-contain" />
        <div className="absolute top-80 right-40 text-primary font-bold p-2 rounded-md">
          <p className='text-3xl capitalize'>Don't hesitate </p>
          <p className='text-2xl capitalize'>to ask for guidance</p>
          <p className='text-2xl capitalize'>to ensure a bright future</p>
        </div>
        <div className="absolute bottom-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Connect with every application.</h2>
          <p>Everything you need in an easily customizable dashboard.</p>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="max-w-sm w-full">
          <h1 className="text-3xl font-bold mb-4">Sign Up to your Account</h1>
          <p className="mb-4 text-center">Select method to Sign Up:</p>
          <div className="flex space-x-2 mb-4">
            <button className="flex items-center justify-center w-1/2 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              <img src={imgGoogle} alt="Google" className="w-6 h-6 mr-2" />
              Google
            </button>
            <button className="flex items-center justify-center w-1/2 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              <img src={imgFacebook} alt="Facebook" className="w-6 h-6 mr-2" />
              Facebook
            </button>
          </div>
          <p className="text-center mb-4">or continue with email</p>
          <form className="w-full">
            <div className="mb-4">
              <div className='flex space-x-2 mb-4'>
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-2" htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" placeholder="First Name" className="input input-bordered w-full max-w-xs" required/>
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-2" htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" placeholder="Last Name" className="input input-bordered w-full max-w-xs"  required/>
                </div>
              </div>

              <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input id="email" type="text" className="grow" placeholder="Email" required />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 1 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                <input id="password" type="password" className="grow" placeholder="Password" required/>
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="confirm-password">Confirm Password</label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 1 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                <input id="confirm-password" type="password" className="grow" placeholder="Confirm Password"  required/>
              </label>
            </div>
           
            <button
              className="bg-primary hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
              type="button"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center">
            have an account? <Link to="/login" className="text-primary hover:text-blue-800">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regis;
