"use client";

import { Code, Server, Cpu, Database, Cloud, Gamepad } from "lucide-react";

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

  return (
    <section
      id="technology"
      className="py-24 px-6 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#222_50%,transparent_100%)] opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gray-400 text-sm tracking-wider uppercase mb-3">
            Technology Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
            Powered by Cutting-Edge Tech
          </h2>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {technologies.map((tech, index) => (
            <TechItem key={index} name={tech.name} Icon={tech.icon} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-zinc-900 p-8 rounded-lg border border-zinc-800">
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
            className="whitespace-nowrap px-8 py-4 rounded-md bg-gradient-to-r from-gray-100 to-white text-black font-semibold hover:scale-105 transition-transform"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

// Technology Item Component
const TechItem = ({ name, Icon }: { name: string; Icon: any }) => (
  <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-2">
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
