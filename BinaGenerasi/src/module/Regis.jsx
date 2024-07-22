import React from "react";
import { Link } from "react-router-dom";
import registerImage from "../assets/image/loginn.jpg"; // Update the path to your image

const Register = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-1/2 flex items-center justify-end bg-red-100 relative">
        <div className="absolute left-0 w-full h-full z-0">
          <img
            className="w-full h-full object-cover"
            src={registerImage}
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
      <div className="md:w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <h2 className="text-2xl font-semibold mb-4">Create Your Account</h2>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Register
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-800">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
