import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../assets/image/loginn.jpg'; // Update the path to your image
import googleImage from '../assets/image/google.png'; // Update the path to your image
import FacebookImage from '../assets/image/Facebook.png'; // Update the path to your image

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen animate-fadeIn">
         <div className="md:w-1/2 flex items-center justify-end relative">
        <div className="absolute left-0 w-full h-full z-0">
          <img
            className="w-full h-full object-cover"
            src={loginImage}
            alt="Woman with Thumbs Up"
          />
        </div>
        <div className="absolute -mt-80 z-10 p-8 text-end">
          <h1 className="text-2xl font-bold mb-4" style={{ color: '#47A8D1' }}>
            Join us and organize your
            <br />
            meetings in a new way
          </h1>
        </div>
      </div>
      <div className="md:w-1/2 bg-white flex flex-col justify-center items-center p-8 animate-slideInRight">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="email"
              type="email"
              placeholder="Ketik Email Anda"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="password"
              type="password"
              placeholder="Ketik Password Anda"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="block text-gray-500 text-sm">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">ingat saya</span>
            </label>
            <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
              Lupa password?
            </a>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Enter
          </button>
        </form>
        <div className="flex mt-4 space-x-2">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300">
            <img src={FacebookImage} alt="Facebook" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300">
            <img src={googleImage} alt="Google" />
          </button>
        </div>
        <p className="mt-4">
          Belum Punya Akun? <Link to="/register" className="text-blue-500 hover:text-blue-800">Register Disini</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;