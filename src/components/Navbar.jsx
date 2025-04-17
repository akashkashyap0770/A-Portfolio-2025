import React, { useState } from "react";
import { NAVBARList } from "../utils/Data";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Ensure NAVBARList has data before accessing index 0
  if (!NAVBARList || NAVBARList.length === 0) return null;

  const { to, navTitle, items } = NAVBARList[0];

  return (
    <nav className="container min-w-full flex  justify-center items-center py-3">
      <div className="flex flex-col md:flex-row m-auto gap-x-10 p-3 md:px-6 lg:px-10 rounded-none md:rounded-full lg:rounded-full lg:shadow-inner lg:shadow-black lg:ring-4 md:shadow-inner md:shadow-black md:right-4">
          {/* Title */}
          <Link
            to={to}
            className="title flex-0 md:justify-start text-purple-600 hover:text-purple-500 transition-all duration-300 text-2xl lg:text-3xl font-bold p-1"
          >
            {navTitle}
          </Link>
        {/* Navbar List */}
        <ul
          className={`nav-list flex flex-col md:flex-row items-center text-sm lg:text-lg p-1 md:px-5 lg:px-10  gap-y-1 lg:gap-x-2 md:gap-x-2 md:shadow-inner md:shadow-black md:rounded-full lg:shadow-inner lg:shadow-black lg:rounded-full ${
            menuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          {items.map((item, id) => (
            <li key={id}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors duration-300 p-1 px-2 lg:p-1 lg:px-4 rounded-full hover:bg-purple-500 ${
                    isActive ? "text-white bg-purple-600" : "text-black"
                  }`
                }
              >
                {item.listName}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* Hamburger */}
      <div
            className="hamburger md:hidden text-2xl cursor-pointer transform transition-transform duration-300 ease-in-out active:scale-90"
            onClick={() => setMenuOpen(!menuOpen)}
          >
          &#9776;
          </div>
    </nav>
  );
}

export default Navbar;
