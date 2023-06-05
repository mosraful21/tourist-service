import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const menuItem = <>
            <Link to='/' className="block text-lg text-white hover:text-orange-600">Home</Link>
            <Link to='/places' className="block text-lg text-white hover:text-orange-600">Places</Link>
            <Link to='/blog' className="block text-lg text-white hover:text-orange-600">Blog</Link>
            <Link to='/contact' className="block text-lg text-white hover:text-orange-600">Contact</Link>
            <Link to='/login' className="block text-lg text-white hover:text-orange-600">Login</Link>
          </>
    
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="bg-gray-900 fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-white text-lg font-bold animate-bounce">Logo</Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {menuItem}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
                  <path fillRule="evenodd" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile menu, show/hide based on menu state. */}
        {isMenuOpen && (
          <div className="px-4 pb-5 space-y-4 sm:px-3">
            {menuItem}
          </div>
        )}
      </nav>
    );
  };

export default Header;
