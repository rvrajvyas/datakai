"use client";

import { Code, Server, Cpu, Database, Cloud, Gamepad } from "lucide-react";
import { useEffect } from "react";
import { Stats } from "@/components/ui/stats";

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
      className="py-24 px-6 bg-black relative overflow-hidden"
    >
      {/* Image Container */}
      <div className="absolute inset-0 bg-cover bg-center bg-opacity-10" style={{ backgroundImage: "url('images/hero6.jpg')" }}></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-white-400 text-sm tracking-wider uppercase mb-3">
            Technology Stack
          </span>
          <h2 className="text-8xl md:text-4xl font-LemonMilk text-black tracking-wider">
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-8 rounded-lg border border-indigo-600 animate-fadeIn">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-wider">
              Need Custom Technology Solutions?
            </h3>
            <p className="text-black bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-6  tracking-wider md:mb-0">
              Our tech experts can build custom solutions tailored to your specific business needs.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-8 py-4 rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold hover:scale-105 transition-transform animate-pulse tracking-wide"
          >
            Schedule Consultation
          </a>
        </div>
        <Stats/>
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
      <Icon size={32} className="text-white" /> {/* Changed to text-white for better visibility */}
    </div>
    {/* Tech Name */}
    <span className="text-white-400 group-hover:text-white transition-all duration-300">
      {name}
    </span>
  </div>
);