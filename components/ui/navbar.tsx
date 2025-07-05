"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export function DataKaiLogo() {
  return (
    <svg fill="none" height="24" viewBox="0 0 32 32" width="24">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function CustomNavbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Define specific section ID types
  type SectionId = 'productsdemo' | 'technology' | 'case-studies' | 'team' | 'contact';

  const scrollToSection = (sectionId: SectionId): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`w-full fixed top-0 left-0 z-50 text-white h-16 flex items-center px-6 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      {/* Logo on the left */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <DataKaiLogo />
          <span className="ml-2 font-bold text-xl">DataKai</span>
        </Link>
      </div>

      {/* Navigation items on the right */}
      <div className="ml-auto flex items-center space-x-6">
        <button 
          onClick={() => scrollToSection('productsdemo')} 
          className="hover:text-blue-400 transition-colors cursor-pointer"
        >
          Products
        </button>
        <button 
          onClick={() => scrollToSection('technology')} 
          className="hover:text-blue-400 transition-colors cursor-pointer"
        >
          Technology
        </button>
        <button 
          onClick={() => scrollToSection('case-studies')} 
          className="hover:text-blue-400 transition-colors cursor-pointer"
        >
          Case Studies
        </button>
        <button 
          onClick={() => scrollToSection('team')} 
          className="hover:text-blue-400 transition-colors cursor-pointer"
        >
          Team
        </button>
         <button 
          onClick={() => scrollToSection('contact')} 
          className="hover:text-blue-400 transition-colors cursor-pointer"
        >
          Contact
        </button>
       {/* <Link 
          href="/signup" 
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
        >
          Sign Up
        </Link> */}
      </div>
    </nav>
  );
}