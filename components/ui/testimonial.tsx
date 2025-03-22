import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "DataKai transformed our approach to AI implementation. Their team delivered a solution that exceeded our expectations and truly revolutionized our business processes.",
      author: "Alex Chen",
      position: "CTO",
      company: "TechInnovate",
      color: "bg-gradient-to-r from-pink-500 to-yellow-500", // Custom gradient for testimonial 1
    },
    {
      quote:
        "The gaming platform developed by DataKai has been a game-changer for our user engagement. We've seen a 200% increase in user retention since implementation.",
      author: "Sarah Johnson",
      position: "Product Director",
      company: "GameVerse",
      color: "bg-gradient-to-r from-purple-500 to-indigo-500", // Custom gradient for testimonial 2
    },
    {
      quote:
        "DataKai's learning management system has completely transformed how we approach employee training. The interface is intuitive and the analytics are invaluable.",
      author: "Michael Rodriguez",
      position: "Learning Director",
      company: "Global Enterprises",
      color: "bg-gradient-to-r from-green-500 to-teal-500", // Custom gradient for testimonial 3
    },
  ];

  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent opacity-80"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border border-zinc-800 relative transition-all hover:scale-105 ${testimonial.color}`}
            >
              <p className="text-white mb-8">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-white">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-medium">{testimonial.author}</h4>
                  <p className="text-gray-200 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
