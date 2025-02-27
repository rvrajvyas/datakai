"use client";

export  function Newsletter() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-5xl mx-auto bg-zinc-900 p-12 rounded-xl border border-zinc-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full transform translate-x-1/3 -translate-y-1/3 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-800 rounded-full transform -translate-x-1/3 translate-y-1/3 opacity-20"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Stay Updated with DataKai's Innovations
          </h2>
          <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to get the latest updates on our products, technology insights, and exclusive offers.
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
}
