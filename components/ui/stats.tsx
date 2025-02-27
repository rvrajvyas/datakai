"use client";

import { useEffect, useState } from "react";

export function Stats() {
  const stats = [
    { value: 98, label: "Customer Satisfaction" },
    { value: 24, label: "Countries Served" },
    { value: 300, label: "Projects Completed" },
    { value: 45, label: "Tech Specialists" },
  ];

  return (
    <section className="py-24 px-6 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Animated Counter Component
const AnimatedCounter = ({ value, label }: { value: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const stepTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">
        {count}
        {label.includes("%") ? "%" : "+"}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
};
