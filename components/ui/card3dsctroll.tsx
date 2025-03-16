// "use client";

// import { Card3D } from "@/components/ui/3dcard";

// export function Card3DScroll() {
//   const cardData = [
//     {
//       title: "High perfromance",
//       description: "Our infrastructure is built for speed and reliability, ensuring your applications run smoothly at scale.",
//       image: "/images/performance.jpg"
//     },
//     {
//       title: "Advanced Security",
//       description: "Enterprise-grade security protocols keep your data and applications safe from threats.",
//       image: "/images/security.jpg"
//     },
//     {
//       title: "Cloud Integration",
//       description: "Seamless integration with leading cloud platforms for maximum flexibility and scalability.",
//       image: "/images/cloud.jpg"
//     },
//     {
//       title: "Real-time Analytics",
//       description: "Gain valuable insights with our powerful analytics tools, monitoring every aspect of performance.",
//       image: "/images/analytics.jpg"
//     },
//     {
//       title: "Global Availibily ",
//       description: "Distributed infrastructure ensures your services are available anywhere, anytime.",
//       image: "/images/global.jpg"
//     },
//     {
//       title: "Responsive Design",
//       description: "All our solutions are built with responsive design to work flawlessly across all devices.",
//       image: "/images/design.jpg"
//     }
//   ];

//   return (
//     <div className="relative w-full py-5">
//       {/* Full-width container with no horizontal padding */}
//       <div className="overflow-x-auto no-scrollbar w-screen -ml-[calc(50vw-50%)]">
//         <div className="flex space-x-8 pl-8 md:pl-12 lg:pl-16 pr-8 md:pr-12 lg:pr-16 w-max">
//           {/* First card with extra left padding to start from edge */}
//           <div className="w-80 sm:w-96 flex-shrink-0">
//             <Card3D
//               title={cardData[0].title}
//               description={cardData[0].description}
//               image={cardData[0].image}
//             />
//           </div>
          
//           {/* Remaining cards */}
//           {cardData.slice(1).map((card, index) => (
//             <div key={index} className="w-80 sm:w-96 flex-shrink-0">
//               <Card3D
//                 title={card.title}
//                 description={card.description}
//                 image={card.image}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// components/ui/card3dsctroll.tsx
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
      description: "Our infrastructure is built for speed and reliability, ensuring your applications run smoothly at scale.",
      image: "/images/performance.jpg"
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security protocols keep your data and applications safe from threats.",
      image: "/images/security.jpg"
    },
    {
      title: "Cloud Integration",
      description: "Seamless integration with leading cloud platforms for maximum flexibility and scalability.",
      image: "/images/cloud.jpg"
    },
    {
      title: "Real-time Analytics",
      description: "Gain valuable insights with our powerful analytics tools, monitoring every aspect of performance.",
      image: "/images/analytics.jpg"
    },
    {
      title: "Global Availability",
      description: "Distributed infrastructure ensures your services are available anywhere, anytime.",
      image: "/images/global.jpg"
    },
    {
      title: "Responsive Design",
      description: "All our solutions are built with responsive design to work flawlessly across all devices.",
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
        <div className="flex space-x-8 pl-8 md:pl-12 lg:pl-16 pr-8 md:pr-12 lg:pr-16 w-max py-8">
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
      
      {/* Optional scroll indicators */}
      <div className="hidden md:flex justify-center mt-4 space-x-2">
        <div className="h-1 w-8 bg-gray-300 rounded-full"></div>
        <div className="h-1 w-8 bg-gray-500 rounded-full"></div>
        <div className="h-1 w-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}
