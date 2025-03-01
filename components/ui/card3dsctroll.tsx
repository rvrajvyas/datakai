"use client";

import { Card3D } from "@/components/ui/3dcard";

export function Card3DScroll() {
  const cardData = [
    {
      title: "High perfromance",
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
      title: "Global Availibily ",
      description: "Distributed infrastructure ensures your services are available anywhere, anytime.",
      image: "/images/global.jpg"
    },
    {
      title: "Responsive Design",
      description: "All our solutions are built with responsive design to work flawlessly across all devices.",
      image: "/images/design.jpg"
    }
  ];

  return (
    <div className="relative w-full py-5">
      {/* Full-width container with no horizontal padding */}
      <div className="overflow-x-auto no-scrollbar w-screen -ml-[calc(50vw-50%)]">
        <div className="flex space-x-8 pl-8 md:pl-12 lg:pl-16 pr-8 md:pr-12 lg:pr-16 w-max">
          {/* First card with extra left padding to start from edge */}
          <div className="w-80 sm:w-96 flex-shrink-0">
            <Card3D
              title={cardData[0].title}
              description={cardData[0].description}
              image={cardData[0].image}
            />
          </div>
          
          {/* Remaining cards */}
          {cardData.slice(1).map((card, index) => (
            <div key={index} className="w-80 sm:w-96 flex-shrink-0">
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