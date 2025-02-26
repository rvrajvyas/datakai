import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, Code, Gamepad, BookOpen, Users, Briefcase, Mail, 
         Server, ShieldCheck, Zap, Cpu, Database, Cloud, Monitor, Globe, 
         ArrowRight, Star, MessageSquare } from 'lucide-react';
// import { SpeedInsights } from "@vercel/speed-insights/next"

// Animated Counter Component
const AnimatedCounter = ({ value, label }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (count < value) {
      const interval = setInterval(() => {
        setCount(prev => Math.min(prev + Math.ceil(value/50), value));
      }, 20);
      return () => clearInterval(interval);
    }
  }, [count, value]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">
        {count}{label.includes('%') ? '%' : '+'}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
};

// Parallax Tech Stack Item
const TechItem = ({ icon: Icon, name }) => (
  <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-2">
    <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center mb-3 
                   group-hover:border-zinc-600 group-hover:bg-zinc-800 transition-all duration-300">
      <Icon size={32} className="text-gray-300" />
    </div>
    <span className="text-gray-400 group-hover:text-white transition-all duration-300">{name}</span>
  </div>
);

// Pulsing Feature Card
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="relative p-8 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all group hover:-translate-y-1">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
    <div className="relative">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center mb-6">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <a
        href="#"
        className="inline-flex items-center text-white hover:text-gray-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
      >
        Learn More <ChevronRight size={16} className="ml-1" />
      </a>
    </div>
  </div>
);

// Testimonial Card
const TestimonialCard = ({ quote, author, position, company }) => (
  <div className="p-8 bg-zinc-900 rounded-lg border border-zinc-800 relative">
    <div className="text-4xl text-zinc-700 absolute top-4 left-4">"</div>
    <p className="text-gray-300 mb-8 relative z-10">{quote}</p>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mr-4">
        <span className="text-xl font-bold text-white">{author.charAt(0)}</span>
      </div>
      <div>
        <h4 className="text-white font-medium">{author}</h4>
        <p className="text-gray-400 text-sm">{position}, {company}</p>
      </div>
    </div>
  </div>
);

// Case Study Card
const CaseStudy = ({ title, description, image, tags }) => (
  <div className="group cursor-pointer">
    <div className="h-64 rounded-lg overflow-hidden mb-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
      <img src={`/api/placeholder/600/400`} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute bottom-0 left-0 p-6 z-20">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-zinc-800/80 text-xs text-gray-300 rounded-full">{tag}</span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </div>
    <p className="text-gray-400">{description}</p>
    <a href="#" className="mt-3 inline-flex items-center text-gray-300 hover:text-white group-hover:translate-x-1 transition-all duration-300">
      View Case Study <ArrowRight size={16} className="ml-2" />
    </a>
  </div>
);

// Main App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} activeSection={activeSection} />
      <Hero />
      <Products />
      <Features />
      <Technology />
      <Stats />
      <CaseStudies />
      <Testimonials />
      <Team />
      <Careers />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
};

  // Navigation Component
  const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection }) => (
    <nav className="fixed w-full bg-black/95 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
          DataKai
        </div>
        <div className="md:hidden">
          {/* ✅ Now setIsMenuOpen is correctly accessed */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex space-x-8">
          {[
            { name: 'Products', id: 'products' },
            { name: 'Features', id: 'features' },
            { name: 'Technology', id: 'technology' },
            { name: 'Case Studies', id: 'case-studies' },
            { name: 'Team', id: 'team' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-white/80 hover:text-white transition-colors ${
                activeSection === item.id ? 'text-white border-b-2 border-white pb-1' : ''
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          {[
            { name: 'Products', id: 'products' },
            { name: 'Features', id: 'features' },
            { name: 'Technology', id: 'technology' },
            { name: 'Case Studies', id: 'case-studies' },
            { name: 'Team', id: 'team' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block px-6 py-4 text-white/80 hover:text-white hover:bg-zinc-800 transition-colors ${
                activeSection === item.id ? 'bg-zinc-800 text-white' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
  

  // Hero Section
const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black px-6">
    {/* Animated background glow effects */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
    
    {/* Subtle grid overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
    
    <div className="max-w-5xl text-center relative z-10 mt-[-80px]">
      <div className="inline-block mb-6 px-4 py-1 bg-zinc-900/80 rounded-full border border-zinc-800 backdrop-blur-md">
        <span className="text-gray-400 text-sm">Innovating the Digital Landscape</span>
      </div>
      
      <h1 className="text-7xl md:text-6xl font-extrabold mb-8 tracking-wide bg-gradient-to-r from-blue-300 via-purple-200 to-pink-300 bg-clip-text text-transparent">
        Shaping Digital Future
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-400 mb-16 tracking-wide max-w-3xl mx-auto">
        Pioneering AI, Gaming, and Learning Solutions for Tomorrow's Innovation
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <a
          href="#products"
          className="group relative px-12 py-4 rounded-md bg-transparent border border-white/30 font-semibold overflow-hidden transition-all duration-300"
        >
          {/* Button glow effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span className="relative text-white">Explore Our Products</span>
        </a>
        
        <a
          href="#contact"
          className="px-12 py-4 rounded-md bg-transparent border-2 border-gray-600 text-white hover:border-gray-400 transition-colors hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </div>
    
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#products" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center">
        <ChevronRight size={20} className="text-gray-500 rotate-90" />
      </a>
    </div>
  </section>
);

const ProductCard = ({ title, description, icon: Icon, color }) => {
  // Define neon color schemes based on the color prop
  const colorSchemes = {
    purple: {
      bgGradient: 'bg-gradient-to-br from-purple-900/20 to-purple-900/10',
      borderGlow: 'before:bg-purple-500/20',
      iconGlow: 'bg-gradient-to-br from-purple-400 to-purple-600',
      textGlow: 'text-purple-300'
    },
    pink: {
      bgGradient: 'bg-gradient-to-br from-pink-900/20 to-pink-900/10',
      borderGlow: 'before:bg-pink-500/20',
      iconGlow: 'bg-gradient-to-br from-pink-400 to-pink-600',
      textGlow: 'text-pink-300'
    },
    blue: {
      bgGradient: 'bg-gradient-to-br from-blue-900/20 to-blue-900/10',
      borderGlow: 'before:bg-blue-500/20',
      iconGlow: 'bg-gradient-to-br from-blue-400 to-blue-600',
      textGlow: 'text-blue-300'
    },
    teal: {
      bgGradient: 'bg-gradient-to-br from-teal-900/20 to-teal-900/10',
      borderGlow: 'before:bg-teal-500/20',
      iconGlow: 'bg-gradient-to-br from-teal-400 to-teal-600',
      textGlow: 'text-teal-300'
    }
  };

  // Default to purple if no color is specified
  const scheme = colorSchemes[color] || colorSchemes.purple;

  return (
    <div className={`relative group p-8 rounded-lg ${scheme.bgGradient} border border-zinc-800 overflow-hidden transition-all duration-500 hover:scale-105`}>
      {/* Neon glow effect around border */}
      <div className={`absolute inset-0 before:content-[''] before:absolute before:inset-0 before:rounded-lg before:blur-xl before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-1000 ${scheme.borderGlow}`}></div>
      
      {/* Icon with neon glow */}
      <div className={`relative w-14 h-14 rounded-lg ${scheme.iconGlow} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-current/20 transition-all duration-500`}>
        <Icon className="text-white" size={28} />
      </div>
      
      {/* Text content */}
      <div className="relative z-10">
        <h3 className={`text-2xl font-bold ${scheme.textGlow} mb-4 transition-colors duration-300`}>{title}</h3>
        <p className="text-gray-400 mb-6 transition-colors duration-300 group-hover:text-gray-300">{description}</p>
        
        {/* Call to action with animated arrow */}
        <a href="#" className={`inline-flex items-center ${scheme.textGlow} hover:brightness-125 transition-all duration-300`}>
          Learn More 
          <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">
            <ChevronRight size={16} />
          </span>
        </a>
      </div>
    </div>
  );
};

const TeamMember = ({ name, role }) => (
    <div className="text-center">
      <div className="w-24 h-24 mx-auto bg-zinc-800 rounded-full mb-4 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">{name.charAt(0)}</span>
      </div>
      <h3 className="text-xl font-medium text-white mb-1">{name}</h3>
      <p className="text-gray-400">{role}</p>
    </div>
  );

const Careers = () => (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-gray-400 text-sm tracking-wider uppercase mb-3">Join Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-4">
            Build the Future with Us
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Join our team of innovators working on cutting-edge technology solutions. 
            We offer competitive benefits and a dynamic work environment.
          </p>
        </div>
        {/* Add career listings or other content here */}
      </div>
    </section>
  );

  // Products Section
const Products = () => {
  const products = [
    {
      title: 'AI Influencers',
      description: 'Next-generation virtual personalities powered by advanced AI, creating authentic connections and engaging content.',
      icon: Code,
      color: 'pink'
    },
    {
      title: 'Gaming Innovation',
      description: 'Immersive gaming experiences that push the boundaries of technology and storytelling.',
      icon: Gamepad,
      color: 'blue'
    },
    {
      title: 'LMS Portal',
      description: 'Advanced learning management system designed for modern education and corporate training needs.',
      icon: BookOpen,
      color: 'teal'
    },
  ];

  return (
    <section id="products" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background ambient light effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-gray-400 text-sm tracking-wider uppercase mb-3">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gray-300 via-purple-200 to-white bg-clip-text text-transparent">
            Industry-leading Digital Solutions
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
  // Features Section
const Features = () => {
    const features = [
      {
        title: "High Performance",
        description: "Our infrastructure is built for speed and reliability, ensuring your applications run smoothly at scale.",
        icon: Zap
      },
      {
        title: "Advanced Security",
        description: "Enterprise-grade security protocols keep your data and applications safe from threats.",
        icon: ShieldCheck
      },
      {
        title: "Cloud Integration",
        description: "Seamless integration with leading cloud platforms for maximum flexibility and scalability.",
        icon: Cloud
      },
      {
        title: "Real-time Analytics",
        description: "Gain valuable insights with our powerful analytics tools, monitoring every aspect of performance.",
        icon: Database
      },
      {
        title: "Global Availability",
        description: "Distributed infrastructure ensures your services are available anywhere, anytime.",
        icon: Globe
      },
      {
        title: "Responsive Design",
        description: "All our solutions are built with responsive design to work flawlessly across all devices.",
        icon: Monitor
      }
    ];

    return (
      <section id="features" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-gray-400 text-sm tracking-wider uppercase mb-3">Core Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Built for Performance
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Technology Stack Section
const Technology = () => {
    const technologies = [
      { name: "React", icon: Code },
      { name: "Python", icon: Server },
      { name: "Node.js", icon: Cpu },
      { name: "MongoDB", icon: Database },
      { name: "AWS", icon: Cloud },
      { name: "TensorFlow", icon: Cpu },
      { name: "Unity", icon: Gamepad },
      { name: "Docker", icon: Server }
    ];

    return (
      <section id="technology" className="py-24 px-6 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#222_50%,transparent_100%)] opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-gray-400 text-sm tracking-wider uppercase mb-3">Technology Stack</span>
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Powered by Cutting-Edge Tech
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            {technologies.map((tech, index) => (
              <TechItem key={index} {...tech} />
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-zinc-900 p-8 rounded-lg border border-zinc-800">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Need Custom Technology Solutions?</h3>
              <p className="text-gray-400 mb-6 md:mb-0">Our tech experts can build custom solutions tailored to your specific business needs.</p>
            </div>
            <a
              href="#contact"
              className="whitespace-nowrap px-8 py-4 rounded-md bg-gradient-to-r from-gray-100 to-white text-black font-semibold hover:scale-105 transition-transform"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    );
  };

  // Stats Section with Animated Counters
const Stats = () => {
    const stats = [
      { value: 98, label: "Customer Satisfaction" },
      { value: 24, label: "Countries Served" },
      { value: 300, label: "Projects Completed" },
      { value: 45, label: "Tech Specialists" }
    ];

    return (
      <section className="py-24 px-6 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCounter key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Case Studies Section
const CaseStudies = () => {
    const studies = [
      {
        title: "AI-Powered Content Creator",
        description: "We helped a media company increase content production by 400% using our AI influencer technology.",
        tags: ["AI", "Content Generation", "Media"]
      },
      {
        title: "Immersive VR Gaming Experience",
        description: "Developed a groundbreaking VR game that achieved 1M downloads in its first month.",
        tags: ["Gaming", "VR", "Unity"]
      },
      {
        title: "Enterprise Learning Platform",
        description: "Transformed employee training for a Fortune 500 company, reducing training time by 60%.",
        tags: ["LMS", "Enterprise", "Education"]
      },
      {
        title: "Retail AI Implementation",
        description: "AI-powered inventory management system that reduced waste by 35% for a major retailer.",
        tags: ["Retail", "AI", "Automation"]
      }
    ];

    return (
      <section id="case-studies" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-gray-400 text-sm tracking-wider uppercase mb-3">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Our Impact Across Industries
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {studies.map((study, index) => (
              <CaseStudy key={index} {...study} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Testimonials Section
const Testimonials = () => {
    const testimonials = [
      {
        quote: "DataKai transformed our approach to AI implementation. Their team delivered a solution that exceeded our expectations and truly revolutionized our business processes.",
        author: "Alex Chen",
        position: "CTO",
        company: "TechInnovate"
      },
      {
        quote: "The gaming platform developed by DataKai has been a game-changer for our user engagement. We've seen a 200% increase in user retention since implementation.",
        author: "Sarah Johnson",
        position: "Product Director",
        company: "GameVerse"
      },
      {
        quote: "DataKai's learning management system has completely transformed how we approach employee training. The interface is intuitive and the analytics are invaluable.",
        author: "Michael Rodriguez",
        position: "Learning Director",
        company: "Global Enterprises"
      }
    ];

    return (
      <section className="py-24 px-6 bg-gradient-to-b from-zinc-900 to-black relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-zinc-900 to-transparent opacity-80"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Team Section
const Team = () => {
    const team = [
      { name: 'Alex Chen', role: 'CEO & Founder' },
      { name: 'Sarah Johnson', role: 'CTO' },
      { name: 'Michael Kumar', role: 'Head of AI' },
      { name: 'Emily Rodriguez', role: 'Lead Game Designer' }
    ];

    return (
      <section id="team" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-gray-400 text-sm tracking-wider uppercase mb-3">Our Experts</span>
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
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Contact Section with Newsletter
const Contact = () => (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block text-gray-400 text-sm tracking-wider uppercase mb-3">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-400 mb-8">
              Whether you have a specific project in mind or just want to explore how our technology can help your business, 
              our team is ready to assist you.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:contact@datakai.com" className="flex items-center text-white hover:text-gray-300 transition-colors">
                <Mail size={20} className="mr-4" />
                contact@datakai.com
              </a>
              <div className="flex items-center text-white">
                <Globe size={20} className="mr-4" />
                <span>Global Operations, Remote-first Company</span>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-semibold text-white mb-6">Send us a message</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:border-gray-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:border-gray-500"
              />
              <select className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:border-gray-500">
                <option value="" disabled selected>Select Service</option>
                <option value="ai">AI Solutions</option>
                <option value="gaming">Gaming Development</option>
                <option value="lms">Learning Management Systems</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:border-gray-500"
              ></textarea>
              <button className="w-full px-6 py-4 rounded-md bg-gradient-to-r from-gray-100 to-white text-black font-semibold hover:scale-105 transition-transform">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Newsletter Section
const Newsletter = () => (
    <section className="py-16 px-6 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-5xl mx-auto bg-zinc-900 p-12 rounded-xl border border-zinc-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full transform translate-x-1/3 -translate-y-1/3 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-800 rounded-full transform -translate-x-1/3 translate-y-1/3 opacity-20"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Stay Updated with DataKai's Innovations</h2>
          <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to get the latest updates on our products, 
            technology insights, and exclusive offers.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-4 rounded-l-md bg-zinc-800 border border-zinc-700 focus:border-zinc-600 outline-none text-white w-full md:max-w-sm"
            />
            <button className="px-8 py-4 rounded-r-md bg-gradient-to-r from-gray-100 to-white text-black font-semibold hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );

// Footer Component
const Footer = () => (
  <footer className="py-16 px-6 bg-zinc-900 border-t border-zinc-800">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-4">
            DataKai
          </div>
          <p className="text-gray-400 mb-6 max-w-md">
            Pioneering the future of digital innovation through AI, gaming, and learning solutions.
            Building tomorrow's technology today.
          </p>
          <div className="flex space-x-4">
            {['facebook', 'twitter', 'linkedin', 'github'].map(platform => (
              <a
                key={platform}
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                <span className="sr-only">{platform}</span>
                <i className={`fab fa-${platform} text-white`}></i>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-3">
            {['AI Influencers', 'Gaming Solutions', 'LMS Portal', 'Custom Development'].map(link => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-3">
            {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map(link => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-800 pt-6 text-gray-500 text-center">
        &copy; {new Date().getFullYear()} DataKai. All rights reserved.
      </div>
    </div>
  </footer>

  
);


// // App Component
// const Appy = () => (
//   <div className="bg-black text-white min-h-screen">
//       <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} activeSection={activeSection} />
//       <Hero />
//       <Products />
//       <Features />
//       <Technology />
//       <Stats />
//       <CaseStudies />
//       <Testimonials />
//       <Team />
//       <Careers />
//       <Contact />
//       <Newsletter />
//       <Footer />
//   </div>
// );

export default App;
