// "use client";

// import { Code, Server, Cpu, Database, Cloud, Gamepad } from "lucide-react";

// export function Technology() {
//   const technologies = [
//     { name: "React", icon: Code },
//     { name: "Python", icon: Server },
//     { name: "Node.js", icon: Cpu },
//     { name: "MongoDB", icon: Database },
//     { name: "AWS", icon: Cloud },
//     { name: "TensorFlow", icon: Cpu },
//     { name: "Unity", icon: Gamepad },
//     { name: "Docker", icon: Server },
//   ];

//   return (
//     <section
//       id="technology"
//       className="py-24 px-6 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden"
//     >
//       {/* Background Gradient Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#222_50%,transparent_100%)] opacity-30"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <span className="inline-block text-gray-400 text-sm tracking-wider uppercase mb-3">
//             Technology Stack
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
//             Powered by Cutting-Edge Tech
//           </h2>
//         </div>

//         {/* Technology Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
//           {technologies.map((tech, index) => (
//             <TechItem key={index} name={tech.name} Icon={tech.icon} />
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-zinc-900 p-8 rounded-lg border border-zinc-800">
//           <div className="flex-1 text-center md:text-left">
//             <h3 className="text-2xl font-bold text-white mb-4">
//               Need Custom Technology Solutions?
//             </h3>
//             <p className="text-gray-400 mb-6 md:mb-0">
//               Our tech experts can build custom solutions tailored to your specific business needs.
//             </p>
//           </div>
//           <a
//             href="#contact"
//             className="whitespace-nowrap px-8 py-4 rounded-md bg-gradient-to-r from-gray-100 to-white text-black font-semibold hover:scale-105 transition-transform"
//           >
//             Schedule Consultation
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Technology Item Component
// const TechItem = ({ name, Icon }: { name: string; Icon: any }) => (
//   <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-2">
//     {/* Icon Container */}
//     <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center mb-3 
//                    group-hover:border-zinc-600 group-hover:bg-zinc-800 transition-all duration-300">
//       <Icon size={32} className="text-gray-300" />
//     </div>
//     {/* Tech Name */}
//     <span className="text-gray-400 group-hover:text-white transition-all duration-300">
//       {name}
//     </span>
//   </div>
// );

"use client";

import { Code, Server, Cpu, Database, Cloud, Gamepad } from "lucide-react";
import { useEffect } from "react";

export function Technology() {
  const technologies = [
    { name: "React", icon: Code },
    { name: "Python", icon: Server },
    { name: "Node.js", icon: Cpu },
    { name: "MongoDB", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "TensorFlow", icon: Cpu },
    { name: "Unity", icon: Gamepad },
    { name: "Docker", icon: Server },
  ];

  // Animation effect for technology items when they come into view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all tech items
    document.querySelectorAll('.tech-item').forEach(item => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="technology"
      className="py-24 px-6 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden"
    >
      {/* Background Image with Transparency */}
      <div 
        className=
        "absolute inset-0 opacity-55 bg-no-repeat bg-cover bg-center mix-blend-screen"
        style={{
          backgroundImage: `url('images/technologysample2.jpg')`,
          animation: 'floatBackground 20s ease-in-out infinite'
        }}
      ></div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#222_50%,transparent_100%)] opacity-30"></div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-12 h-12 rounded-full bg-white opacity-5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gray-400 text-sm tracking-wider uppercase mb-3 animate-fadeIn">
            Technology Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent animate-fadeIn">
            Powered by Cutting-Edge Tech
          </h2>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {technologies.map((tech, index) => (
            <TechItem 
              key={index} 
              name={tech.name} 
              Icon={tech.icon} 
              delay={index * 0.1} 
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-zinc-900 p-8 rounded-lg border border-zinc-800 animate-fadeIn">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Custom Technology Solutions?
            </h3>
            <p className="text-gray-400 mb-6 md:mb-0">
              Our tech experts can build custom solutions tailored to your specific business needs.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-8 py-4 rounded-md bg-gradient-to-r from-gray-100 to-white text-black font-semibold hover:scale-105 transition-transform animate-pulse"
          >
            Schedule Consultation
          </a>
        </div>
      </div>

      {/* Add global styles */}
      <style jsx global>{`
        @keyframes floatBackground {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(5px, -5px) rotate(1deg); }
          50% { transform: translate(0, 10px) rotate(-1deg); }
          75% { transform: translate(-5px, -5px) rotate(0deg); }
        }
        
        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 0.05; }
          50% { transform: translateY(-20vh) scale(1.5); opacity: 0.1; }
          100% { transform: translateY(-40vh) scale(1); opacity: 0; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}

// Technology Item Component
const TechItem = ({ name, Icon, delay = 0 }: { name: string; Icon: any; delay?: number }) => (
  <div 
    className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-2 tech-item opacity-0"
    style={{ animationDelay: `${delay}s` }}
  >
    {/* Icon Container */}
    <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center mb-3 
                  group-hover:border-zinc-600 group-hover:bg-zinc-800 transition-all duration-300">
      <Icon size={32} className="text-gray-300" />
    </div>
    {/* Tech Name */}
    <span className="text-gray-400 group-hover:text-white transition-all duration-300">
      {name}
    </span>
  </div>
);