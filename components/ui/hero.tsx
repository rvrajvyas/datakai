"use client";
import { useEffect, useState } from "react";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/b.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video and make text readable */}
      <div className="absolute inset-0 bg-black bg-transparent"></div>

      {/* Hero Text */}
      <div className="relative text-center text-white px-6 z-10">
        <p className="text-sm md:text-base font-medium text-gray-300 mb-2">
          Innovating the Digital Landscape
        </p>
        <h1
          className="text-40xl md:text-6xl font-bold leading-tight"
          style={{
            fontFamily: "'Cool', sans-serif",
            background: "linear-gradient(to right, #9ca3af, #d1d5db)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Shaping Digital Future
        </h1>
        <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Pioneering AI, Gaming, and Learning Solutions for Tomorrow's Innovation
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-lg border border-gray-400 text-gray-200 hover:bg-white hover:text-black transition-all">
            Explore Our Products
          </button>
          <button className="px-6 py-3 rounded-lg border border-gray-400 text-gray-200 hover:bg-white hover:text-black transition-all">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
