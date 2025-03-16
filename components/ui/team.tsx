"use client";

import { useState, useEffect } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps { 
  name: string;
  role: string;
  imageUrl?: string;
}

export function Team() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Animation effect when component mounts
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-teamFadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all team members
    document.querySelectorAll('.team-member').forEach((item, index) => {
      setTimeout(() => {
        observer.observe(item);
      }, index * 100); // Staggered delay
    });
    
    return () => observer.disconnect();
  }, []);

  const team = [
    { name: "Alex Chen", role: "CEO & Founder" },
    { name: "Sarah Johnson", role: "CTO" },
    { name: "Michael Kumar", role: "Head of AI" },
    { name: "Emily Rodriguez", role: "Lead Game Designer" },
  ];

  return (
    <section id="team" className="py-24 px-6 bg-zinc-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        {/* Background grid pattern */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Animated glow orbs */}
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              backgroundColor: `rgba(255, 255, 255, 0.03)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse-glow ${Math.random() * 10 + 15}s infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 opacity-0 animate-teamFadeIn" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block text-gray-400 text-sm tracking-wider uppercase mb-3">
            Our Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-4">
            The Minds Behind DataKai
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our team combines decades of experience in AI, gaming, and educational technology
            to deliver innovative solutions for tomorrow's challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <TeamMember 
              key={index} 
              {...member} 
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
      
      {/* Global styles */}
      <style jsx global>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.2); }
        }
        
        @keyframes float-up-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes teamFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-teamFadeIn {
          animation: teamFadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

const TeamMember = ({ name, role, imageUrl, isActive, onClick }: TeamMemberProps & { isActive?: boolean; onClick?: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const firstLetter = name.charAt(0);
  const lastName = name.split(' ')[1] || '';
  const firstLastLetter = lastName.charAt(0);
  
  return (
    <div 
      className="text-center team-member opacity-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative mx-auto mb-6 cursor-pointer group">
        {/* Avatar container */}
        <div 
          className="w-32 h-32 mx-auto relative transition-all duration-500"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        >
          {/* Rotating border effect */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
            <div className="absolute inset-[-3px] rounded-full border-2 border-transparent"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
                backgroundSize: '200% 100%',
                animation: 'rotate-slow 4s linear infinite'
              }}
            ></div>
          </div>
          
          {/* Avatar circle */}
          <div className="w-full h-full bg-zinc-800 rounded-full overflow-hidden flex items-center justify-center relative z-10 border-2 border-zinc-700 transition-all duration-300"
            style={{
              boxShadow: isHovered ? '0 0 20px rgba(255,255,255,0.15)' : 'none'
            }}
          >
            <span className="text-3xl font-bold text-white">{firstLetter}{firstLastLetter}</span>
          </div>
        </div>
        
        {/* Floating social icons - appear on hover */}
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 flex space-x-2 -translate-y
          ${isHovered ? 'opacity-100 -translate-y-8' : 'opacity-0 -translate-y-4'} 
          transition-all duration-300`}>
          <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700 hover:bg-zinc-700 transition-colors cursor-pointer">
            <Linkedin size={14} className="text-gray-300" />
          </div>
          <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700 hover:bg-zinc-700 transition-colors cursor-pointer">
            <Twitter size={14} className="text-gray-300" />
          </div>
          <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700 hover:bg-zinc-700 transition-colors cursor-pointer">
            <Mail size={14} className="text-gray-300" />
          </div>
        </div>
      </div>
      
      {/* Team member details */}
      <div className="transition-all duration-300"
        style={{
          transform: isHovered ? 'translateY(5px)' : 'translateY(0)'
        }}
      >
        <h3 className="text-xl font-medium text-white mb-1">{name}</h3>
        <p className="text-gray-400 mb-2">{role}</p>
        
        {/* Animated underline */}
        <div className="h-0.5 w-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto transition-all duration-300"
          style={{
            width: isHovered ? '80px' : '0'
          }}
        ></div>
      </div>
    </div>
  );
};