"use client";

import { Card3D } from "@/components/ui/3dcard";
import { useRef, useEffect, useState } from "react";

export function Card3DScroll() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const cardData = [
    {
      title: "High performance",
      description: "Whether you're launching a new product or scaling to millions of users, we ensures your application stays fast, reliable, and ready for anything. Trust isn't given — it's earned through performance, and we help you win it.",
      image: "/images/performance.jpg"
    },
    {
      title: "Advanced Security ",
      "description": "We deliver enterprise-grade security protocols across every layer, ensuring your data and applications stay protected around the clock. Our security is designed to scale with your business — without slowing you down.",
      "image": "/images/security.jpg"
    },
    {
      title: "Cloud Integration",
      description: "We offer seamless integration with leading cloud platforms, unlocking maximum flexibility and scalability for your applications. Our solution ensures smooth connections across multiple environments, giving you the freedom to scale, adapt, and innovate without limits.",
      image: "/images/cloud.jpg"
    },
    {
      title: "Real-time Analytics",
      description: "We help you integrate powerful, real-time analytics into your systems. With our seamless integration, you can monitor key metrics, make data-driven decisions, and optimize performance in real time to stay ahead of the competition.",
      image: "/images/analytics.jpg"
    },
    {
      title: "Global Availability",
      description: "We follow a distributed infrastructure model to ensure your services are always available, no matter where your users are. This architecture provides unmatched reliability and speed, keeping your applications running smoothly around the clock, anywhere in the world.",
      image: "/images/global.jpg"
    },
    {
      title: "Responsive Design",
      description: "We design all our solutions to be fully responsive, ensuring they perform flawlessly across any device. From smartphones to desktops, our platform adjusts seamlessly to deliver the best experience, no matter how your users access it.",
      image: "/images/design.jpg"
    }
  ];

  // Initialize references array correctly
  useEffect(() => {
    cardRefs.current = cardData.map(() => null);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollLeft);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Apply parallax effect to each card
  useEffect(() => {
    requestAnimationFrame(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card || !(card instanceof HTMLDivElement)) return;

        try {
          // Calculate the card's position relative to the viewport
          const rect = card.getBoundingClientRect();
          const centerPosition = rect.left + rect.width / 2;
          const viewportCenter = window.innerWidth / 2;
          const distanceFromCenter = centerPosition - viewportCenter;

          // Calculate rotation and translation based on distance from center
          const rotationY = distanceFromCenter * 0.02; // Adjust multiplier for rotation intensity
          const translateZ = Math.abs(distanceFromCenter) < 200 ? 20 : 0; // Pop out cards near the center

          // Apply transformations
          card.style.transform = `
            perspective(1000px) 
            rotateY(${rotationY}deg) 
            translateZ(${translateZ}px)
          `;

          // Adjust opacity based on distance from center
          const opacity = 1 - Math.min(0.3, Math.abs(distanceFromCenter) / 1000);
          card.style.opacity = opacity.toString();
        } catch (error) {
          console.error("Error applying parallax effect:", error);
        }
      });
    });
  }, [scrollPosition]);

  // Register scroll event for window resize
  useEffect(() => {
    const handleResize = () => {
      setScrollPosition(prev => prev + 1); // Just to trigger a re-render
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full py-10">
      {/* Full-width container with no horizontal padding */}
      <div 
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar w-screen -ml-[calc(50vw-50%)] scroll-smooth"
      >
        <div className="flex space-x-8 pl-8 md:pl-12 lg:pl-16 pr-8 md:pr-12 lg:pr-16 w-max py-8 justify-start">
          {/* Map through all cards */}
          {cardData.map((card, index) => (
            <div 
              key={index} 
              ref={el => {
                cardRefs.current[index] = el;
              }}
              className="w-80 sm:w-96 flex-shrink-0 transition-all duration-300"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card3D
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </div>
          ))}
        </div>
      </div>

  
    </div>
  );
}
