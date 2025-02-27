"use client";

export function CaseStudies() {
  const studies = [
    {
      title: "AI-Powered Content Creator",
      description:
        "We helped a media company increase content production by 400% using our AI influencer technology.",
      tags: ["AI", "Content Generation", "Media"],
    },
    {
      title: "Immersive VR Gaming Experience",
      description:
        "Developed a groundbreaking VR game that achieved 1M downloads in its first month.",
      tags: ["Gaming", "VR", "Unity"],
    },
    {
      title: "Enterprise Learning Platform",
      description:
        "Transformed employee training for a Fortune 500 company, reducing training time by 60%.",
      tags: ["LMS", "Enterprise", "Education"],
    },
    {
      title: "Retail AI Implementation",
      description:
        "AI-powered inventory management system that reduced waste by 35% for a major retailer.",
      tags: ["Retail", "AI", "Automation"],
    },
  ];

  return (
    <section id="case-studies" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-gray-400 text-sm tracking-wider uppercase mb-3">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
            Our Impact Across Industries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {studies.map((study, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-zinc-900 border border-zinc-800 p-6 rounded-lg transition-all hover:scale-105"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">{study.title}</h3>
              </div>
              <p className="text-gray-400">{study.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {study.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-zinc-800/80 text-xs text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
