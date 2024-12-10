import React, { useState } from 'react';
import logo from '../assets/GT-Holidays-Logo.jpg';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpenContact, setIsDropdownOpenContact] = useState(false);
  const [isDropdownOpenWedding, setIsDropdownOpenWedding] = useState(false);

  const indiaPlaces = [
    'Mumbai',
    'Chennai',
    'Kolkata',
    'Delhi',
    'Hyderabad',
    'Bangalore',
    'Ahmedabad',
    'Pune',
    'Jaipur',
    'Lucknow',
  ];

  const internationalPlaces = [
    'Paris',
    'New York',
    'Dubai',
    'Sydney',
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 mb-10">
      {/* Upper Navbar */}
      <div className="flex items-center bg-gray-200 justify-between p-6">
        <Link to="/">
          <img src={logo} alt="logo" width={'200px'} />
        </Link>

        {/* Navbar Links */}
        <div>
          <Link to="/" className="text-black hover:bg-yellow-500 p-5 transition">
            HOME
          </Link>
        </div>

        <div>
          <Link to="/company" className="text-black hover:bg-yellow-500 p-5 transition">
            COMPANY
          </Link>
        </div>

        <div>
          <Link to="/group-tour" className="text-black hover:bg-yellow-500 p-5 transition">
            GROUP TOUR
          </Link>
        </div>

        <div>
          <Link to="/package" className="text-black hover:bg-yellow-500 p-5 transition">
            PACKAGE
          </Link>
        </div>

        <div>
          <Link to="/honeymoon" className="text-black hover:bg-yellow-500 p-5 transition">
            HONEYMOON
          </Link>
        </div>

        {/* Wedding Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setIsDropdownOpenWedding(true)}
          onMouseLeave={() => setIsDropdownOpenWedding(false)}
        >
          <Link to="/" className="text-black hover:bg-yellow-500 p-5 transition">
            WEDDING
          </Link>

          {isDropdownOpenWedding && (
            <div className="absolute bg-white shadow-lg mt-5 rounded-md flex space-x-4">
              {/* India Dropdown */}
              <div className="w-1/2">
                <h3 className="text-black font-semibold px-4 py-2">India</h3>
                <ul>
                  {indiaPlaces.map((place, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-yellow-500 text-black transition cursor-pointer text-sm"
                    >
                      {place}
                    </li>
                  ))}
                </ul>
              </div>

              {/* International Dropdown */}
              <div className="w-1/2">
                <h3 className="text-black font-semibold px-4 py-2">International</h3>
                <ul>
                  {internationalPlaces.map((place, index) => (
                    <li
                      key={index}
                      className="px-2 py-1 hover:bg-yellow-500 text-black transition cursor-pointer text-sm"
                    >
                      {place}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Contact Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setIsDropdownOpenContact(true)}
          onMouseLeave={() => setIsDropdownOpenContact(false)}
        >
          <Link to="/" className="text-black hover:bg-yellow-500 p-5 transition">
            CONTACT
          </Link>

          {isDropdownOpenContact && (
            <div className="absolute bg-white shadow-lg mt-5 rounded-md">
              <ul>
                {indiaPlaces.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-yellow-500 text-black transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Contact Number */}
        <div>
          <a href="tel:+917904237345" className="text-black bg-yellow-500 p-3 transition">
            +91 7904237345
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
