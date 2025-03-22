"use client";

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-black  border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-4">
              DataKai
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Pioneering the future of digital innovation through AI, gaming, and learning solutions.  
              Building tomorrow's technology today.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {["facebook", "twitter", "linkedin", "github"].map((platform) => (
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

          {/* Products Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {["AI Influencers", "Gaming Solutions", "LMS Portal", "Custom Development"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-zinc-800 pt-6 text-gray-500 text-center">
          &copy; {new Date().getFullYear()} DataKai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
