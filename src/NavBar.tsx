import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {

return (
  <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              className="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="hidden lg:block h-8 mb-2 w-auto"
              src="grocery.svg"
              alt="Workflow"
            />
            <span className="hidden lg:block h-8 w-auto font-bold text-lg text-white mt-1 ml-1 italic text-opacity-100">
              HODOR
            </span>
            {/* <img
              className="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            /> */}
            {/* <img
              className="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            /> */}
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <NavLink
                to={"/"}
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900"
              >
                Home
              </NavLink>
              <NavLink
                to={"/app/faq"}
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900"
              >
                FAQ
              </NavLink>
              <NavLink
                to={"/app/about-us"}
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900"
              >
                About Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="hidden sm:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <NavLink
          to={"/"}
          className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
        >
          Home
        </NavLink>
        <NavLink
          to={"/app/faq"}
          className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
        >
          FAQ
        </NavLink>
        <NavLink
          to={"/app/about-us"}
          className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
        >
          About Us
        </NavLink>
      </div>
    </div>
  </nav>
);}

export default NavBar