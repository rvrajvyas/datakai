// "use client";

// export  function Newsletter() {
//   return (
//     <section className="py-16 px-6 bg-gradient-to-b from-black to-zinc-900">
//       <div className="max-w-5xl mx-auto bg-zinc-900 p-12 rounded-xl border border-zinc-800 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full transform translate-x-1/3 -translate-y-1/3 opacity-20"></div>
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-800 rounded-full transform -translate-x-1/3 translate-y-1/3 opacity-20"></div>
        
//         <div className="relative z-10 text-center">
//           <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
//             Stay Updated with DataKai's Innovations
//           </h2>
//           <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
//             Subscribe to our newsletter to get the latest updates on our products, technology insights, and exclusive offers.
//           </p>
          
//           <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="px-6 py-4 rounded-l-md bg-zinc-800 border border-zinc-700 focus:border-zinc-600 outline-none text-white w-full md:max-w-sm"
//             />
//             <button className="px-8 py-4 rounded-r-md bg-gradient-to-r from-gray-100 to-white text-black font-semibold hover:scale-105 transition-transform">
//               Subscribe
//             </button>
//           </div>
          
//           <p className="text-gray-500 text-sm mt-4">
//             We respect your privacy. Unsubscribe at any time.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

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
    <section className="py-16 px-6 bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden">
      {/* Background with cool tech circuit patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Circuit pattern lines */}
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white h-px" 
              style={{
                width: `${Math.random() * 200 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.2 + Math.random() * 0.3,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
          
          {/* Circuit nodes */}
          {[...Array(15)].map((_, i) => (
            <div 
              key={i + 'node'} 
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.2 + Math.random() * 0.4
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Floating particles container */}
      <div id="particles-container" className="absolute inset-0 overflow-hidden pointer-events-none" />
      
      <div 
        className="max-w-5xl mx-auto bg-zinc-900 p-12 rounded-xl border border-zinc-800 relative overflow-hidden shadow-lg"
        style={{
          boxShadow: isHovered ? '0 0 30px rgba(255, 255, 255, 0.1)' : '0 0 20px rgba(0, 0, 0, 0.5)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full transform translate-x-1/3 -translate-y-1/3 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-800 rounded-full transform -translate-x-1/3 translate-y-1/3 opacity-20"></div>
        
        {/* Animated light beam */}
        <div 
          className="absolute h-full w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          style={{
            left: '-10%',
            top: '0',
            animation: 'lightBeam 5s ease-in-out infinite'
          }}
        ></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Stay Updated with DataKai's Innovations
            </span>
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to get the latest updates on our products, technology insights, and exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0">
              {!isSubmitted ? (
                <>
                  <div className="relative w-full md:max-w-sm">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="px-6 py-4 rounded-l-md bg-zinc-800 border border-zinc-700 focus:border-zinc-600 outline-none text-white w-full transition-all duration-300"
                      style={{
                        borderColor: isHovered ? 'rgb(161, 161, 170)' : '',
                        boxShadow: isHovered ? '0 0 10px rgba(255, 255, 255, 0.1)' : 'none'
                      }}
                    />
                  </div>
                  <button 
                    type="submit"
                    className="group px-8 py-4 rounded-r-md bg-gradient-to-r from-gray-100 to-white text-black font-semibold transition-all duration-300 flex items-center justify-center"
                    style={{
                      transform: isHovered ? 'scale(1.02)' : 'scale(1)'
                    }}
                  >
                    Subscribe
                    <Send size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </>
              ) : (
                <div className="w-full flex items-center justify-center py-4 px-6 bg-zinc-800 border border-green-500/50 rounded-md text-green-400 space-x-2 animate-fadeIn">
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
          border-radius: 50%;
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
