import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/red-dimond-premium-svgrepo-com.svg";
import { navItems } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-10 mr-2 pb-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">DatingR</span>
          </div>
          <ul className="hidden md:flex ml-14 md:space-x-4 lg:space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className="hover:text-gray-200 hover:transition-colors" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex justify-center md:space-x-4 lg:space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md
             hover:bg-white transition-all duration-300 hover:text-black">
              Sign In
            </a>
            <a
              href="#"
              className="bg-red-800 py-2 px-3 rounded-md border border-gray-950
               hover:bg-white hover:text-black transition-all duration-300"
            >
              Create an account
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-black to-red-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;