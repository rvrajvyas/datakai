'use client';

import React, { useRef, useState, useEffect } from 'react';

export function ScrollRevealText() {
  const [activeLineIndex, setActiveLineIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const storyLines = [
    "Crafting one pixel",
    "at a time",
    "we are a group of engineers",
    "who solve complex problems",
    "working on ideas that inspire",
    "focusing on working with you,",
    "not just for you."
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          
          if (entry.isIntersecting) {
            setActiveLineIndex(index);
          } else if (entry.boundingClientRect.top > 0) {
            setActiveLineIndex(index - 1);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const lineElements = container.querySelectorAll('.story-line');
    lineElements.forEach((line) => observer.observe(line));

    return () => {
      lineElements.forEach((line) => observer.unobserve(line));
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="text-4xl md:text-7xl lg:text-8xl bg-black min-h-screen flex flex-col justify-center font-poppins items-center p-4 space-y-8 py-30"
    >
   

      {storyLines.map((line, index) => (
        <div
          key={index}
          data-index={index}
          className={`
            story-line
            text-4xl md:text-6xl lg:text-6xl font-poppins text-center w-full max-w-4xl
            transition-colors duration-500 ease-in-out
            ${activeLineIndex >= index ? 'text-white' : 'text-gray-pink'}
          `}
        >
          {line}
        </div>
      ))}
    </div>
  );
}