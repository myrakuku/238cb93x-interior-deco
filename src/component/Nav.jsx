import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../image/IDE-logo.jpeg";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto pr-4">
        <div className="flex justify-between">
          <div className="flex space-x-4 ml-2">
            <Link to="/" className="flex items-center py-2 px-1 text-[#D29E75]">
              <img src={logo} alt="Logo" className="h-10" />
              <p className="text-[#233B51] font-bold">啟發裝飾工程有限公司</p>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-2 px-3 text-[#D29E75] hover:text-amber-900">首頁</Link>
            <Link to="/about" className="py-2 px-3 text-[#D29E75] hover:text-amber-900">關於我們</Link>
            <Link to="/services" className="py-2 px-3 text-[#D29E75] hover:text-amber-900">服務介紹</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-[#D29E75] focus:outline-none">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 bg-white z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`flex flex-col items-center justify-center h-full space-y-3 transform ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full transition-transform duration-300'}`}>
          <Link to="/" className="text-[#62320d] bg-white border-2 border-orange-200 rounded-lg px-10 text-xl mt-4 hover:bg-orange-200 transition-colors duration-300" onClick={toggleMobileMenu}>首頁</Link>
          <Link to="/about" className="text-[#62320d] bg-white border-2 border-orange-200 rounded-lg px-10 text-xl mt-4 hover:bg-orange-200 transition-colors duration-300" onClick={toggleMobileMenu}>關於我們</Link>
          <Link to="/services" className="text-[#62320d] bg-white border-2 border-orange-200 rounded-lg px-10 text-xl mt-4 hover:bg-orange-200 transition-colors duration-300" onClick={toggleMobileMenu}>服務介紹</Link>
          <button onClick={toggleMobileMenu} className="text-[#D29E75] absolute top-0 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
