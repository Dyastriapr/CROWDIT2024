import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar container mx-auto md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <NavLink
                exact
                to="/"
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#55ACD0', color: 'white' } : {}
                }
                className="p-2 rounded"
              >
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/doctor"
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#55ACD0', color: 'white' } : {}
                }
                className="p-2 rounded"
              >
                Dokter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) =>
                  isActive ? { backgroundColor: '#55ACD0', color: 'white' } : {}
                }
                className="p-2 rounded"
              >
                Kontak
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink exact to="/" className="btn btn-ghost text-xl text-primary">BGen</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex text-lg">
        <ul className="menu menu-horizontal px-1 font space-x-5">
          <li>
            <NavLink
              exact
              to="/"
              style={({ isActive }) =>
                isActive ? { backgroundColor: '#55ACD0', color: 'white' } : {}
              }
              className="p-2 rounded hover:bg-primary hover:text-white"
            >
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctor"
              style={({ isActive }) =>
                isActive ? { backgroundColor: '#55ACD0', color: 'white' } : {}
              }
              className="p-2 rounded hover:bg-primary hover:text-white"
            >
              Dokter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) =>
                isActive ? { backgroundColor: '#55ACD0', color: 'white'  } : {}
              }
              className="p-2 rounded hover:bg-primary hover:text-white"
            >
             Kontak
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/login" className="btn btn-ghost text-black">Login</NavLink>
        <NavLink to="/regis" className="btn bg-primary text-white border-none">Register</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
