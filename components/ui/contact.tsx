"use client";

import { Mail, Globe } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-gray-400 text-sm tracking-wider uppercase mb-3">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-400 mb-8">
              Whether you have a specific project in mind or just want to explore how our technology can help your business,
              our team is ready to assist you.
            </p>

            {/* Email & Location */}
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

          {/* Contact Form */}
          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-6">Send us a message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
              />
              <select className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500">
                <option value="" disabled selected>Select Service</option>
                <option value="ai">AI Solutions</option>
                <option value="gaming">Gaming Development</option>
                <option value="lms">Learning Management Systems</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-4 rounded-md bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold hover:scale-105 transition-transform tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
