import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className={`w-full flex justify-between md:justify-around py-5 fixed z-10 backdrop-blur-md ${(isOpen)? "" : "items-center" }`}>
        
    //     <Link to="/">
    //         <h1 className="text-3xl text-white font-bold mr-5 md:mr-0">Ss.</h1>
    //     </Link>

    //     <nav className={"md:hidden ml-5 md:ml-0"}>
    //         
    //         <div }>
    //         
    //         </div>
    //     </nav>

    //     <nav className="">
    //         
    //     </nav>
      
    // </div>
    <nav className="w-full py-5 fixed z-10 backdrop-blur-md flex flex-col justify-center items-center">
        <div className="w-full flex justify-between md:justify-around ">
            <Link to="/">
                <h1 className="text-3xl text-white font-bold ml-5 md:ml-0">Ss.</h1>
            </Link>

            <ul className=" items-center  gap-8 hidden md:flex text-lg">
            <li>
    
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `hover:underline hover:cursor-pointer hover:text-yellow-300 hover:scale-110 ${
                        isActive ? "text-yellow-300" : "text-white"
                        }`
                    }
                    >
                    Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `hover:underline hover:cursor-pointer hover:text-yellow-300 hover:scale-110 ${
                        isActive ? "text-yellow-300" : "text-white"
                        }`
                    }
                    >
                    About Me
                    </NavLink>
                </li>

                <li>
                    <NavLink
                    to="/skills"
                    className={({ isActive }) =>
                        `hover:underline hover:cursor-pointer hover:text-yellow-300 hover:scale-110 ${
                        isActive ? "text-yellow-300" : "text-white"
                        }`
                    }
                    >
                    Skills
                    </NavLink>
                </li>

                <li>
                    <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        `hover:underline hover:cursor-pointer hover:text-yellow-300 hover:scale-110 ${
                        isActive ? "text-yellow-300" : "text-white"
                        }`
                    }
                    >
                    Projects
                    </NavLink>
                </li>

                <li>
                    <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `hover:underline hover:cursor-pointer hover:text-yellow-300 hover:scale-110 ${
                        isActive ? "text-yellow-300" : "text-white"
                        }`
                    }
                    >
                    Contact
                    </NavLink>
                </li>
            </ul>

            <button
            className="md:hidden flex flex-col space-y-1 focus:outline-none mr-5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            >
                <span
                    className={`h-1 w-6 bg-white rounded transition-transform ${
                    isOpen ? "transform rotate-45 translate-y-1.5" : ""
                    }`}
                ></span>
                <span
                    className={`h-1 w-6 bg-white rounded ${
                    isOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                    className={`h-1 w-6 bg-white rounded transition-transform ${
                    isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                    }`}
                ></span>
            </button>
        </div>
        
        <ul className={`flex flex-col gap-4 ${isOpen ? "flex" : "hidden"} my-10`}>
                <li>
                    <NavLink
                    to="/"
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) => 
                    `${isActive ? "text-yellow-300" : "text-white"}`}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/about"
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) => 
                    `${isActive ? "text-yellow-300" : "text-white"}`}
                    >
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/skills"
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) => 
                    `${isActive ? "text-yellow-300" : "text-white"}`}
                    >
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/projects"
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) => 
                    `${isActive ? "text-yellow-300" : "text-white"}`}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/contact"
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) => 
                    `${isActive ? "text-yellow-300" : "text-white"}`}
                    >
                        Contact
                    </NavLink>
                </li>
        </ul>
    </nav>
  );
}

export default Navbar;
