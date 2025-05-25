"use client";

import { useState, useEffect } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Particle animation effect
  useEffect(() => {
    const createParticle = () => {
      const particlesContainer = document.getElementById('particles-container');
      if (!particlesContainer) return;
      
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position and size
      const size = Math.random() * 6 + 2;
      const posX = Math.random() * particlesContainer.offsetWidth;
      const posY = Math.random() * particlesContainer.offsetHeight;
      const rotation = Math.random() * 360;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.transform = `rotate(${rotation}deg)`;
      
      // Animation duration
      const duration = Math.random() * 10 + 10;
      particle.style.animation = `float ${duration}s linear infinite`;
      
      particlesContainer.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        particlesContainer.removeChild(particle);
      }, duration * 1000);
    };
    
    // Create particles at intervals
    const interval = setInterval(createParticle, 500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Background with cool tech circuit patterns */}
      <div className=" p-6 rounded-2xl shadow-2xl bg-white relative z-10">
        <div className="absolute inset-0 opacity-5">
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

        {/* Floating particles container */}
        <div id="particles-container" className="absolute inset-0 overflow-hidden pointer-events-none" />

        <div
          className="relative text-center z-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h2 className="text-2xl md:text-3xl font-LemonMilk mb-6 text-transparent bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text">
            Stay Updated with DataKai's Innovations
          </h2>

          <p className="text-gray-500 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to get the latest updates on our products, technology insights, and exclusive offers.
          </p>

          <form onSubmit={handleSubmit} className="relative">
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0">
              {!isSubmitted ? (
                <>
                  <div className="relative w-full md:max-w-md">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="px-6 py-4 rounded-l-md bg-gray-100 border border-gray-300 focus:border-gray-400 outline-none text-black w-full transition-all duration-300"
                      style={{
                        borderColor: isHovered ? 'rgb(161, 161, 170)' : '',
                        boxShadow: isHovered ? '0 0 10px rgba(255, 255, 255, 0.1)' : 'none'
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="group px-8 py-4 rounded-r-md bg-blue-600 text-white font-semibold transition-all duration-300 flex items-center justify-center"
                    style={{
                      transform: isHovered ? 'scale(1.02)' : 'scale(1)'
                    }}
                  >
                    Subscribe
                    <Send size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </>
              ) : (
                <div className="w-full flex items-center justify-center py-4 px-6 bg-green-800 border border-green-500/50 rounded-md text-green-400 space-x-2 animate-fadeIn">
                  <CheckCircle2 size={20} />
                  <span>Thanks for subscribing! We'll be in touch.</span>
                </div>
              )}
            </div>
          </form>

          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes lightBeam {
          0% { transform: translateX(0) skewX(-15deg); opacity: 0; }
          25% { transform: translateX(800%) skewX(-15deg); opacity: 0.2; }
          26% { opacity: 0; }
          100% { opacity: 0; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }

        .particle {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.4);
          border-radius: 0%;
          pointer-events: none;
        }

        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.2; }
          90% { opacity: 0; }
          100% { transform: translateY(-200px) translateX(100px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
