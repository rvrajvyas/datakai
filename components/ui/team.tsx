"use client";

interface TeamMemberProps {
  name: string;
  role: string;
}



export function Team() {
  const team = [
    { name: "Alex Chen", role: "CEO & Founder" },
    { name: "Sarah Johnson", role: "CTO" },
    { name: "Michael Kumar", role: "Head of AI" },
    { name: "Emily Rodriguez", role: "Lead Game Designer" },
  ];



  return (
    <section id="team" className="py-24 px-6 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}


const TeamMember = ({ name, role }: TeamMemberProps) => (
    <div className="text-center">
      <div className="w-24 h-24 mx-auto bg-zinc-800 rounded-full mb-4 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">{name.charAt(0)}</span>
      </div>
      <h3 className="text-xl font-medium text-white mb-1">{name}</h3>
      <p className="text-gray-400">{role}</p>
    </div>
  );