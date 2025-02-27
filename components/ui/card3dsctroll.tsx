"use client";
import { Card3D } from "@/components/ui/3dcard";

export function Card3DScroll() {
  return (
    <div className="relative w-full py-24">
      {/* ✅ Scrollable Container */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-8 px-6 md:px-12 w-max">
          {/* ✅ Six Scrollable Cards */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-96 flex-shrink-0">
              <Card3D
                title={`Feature ${index + 1}`}
                description="This is an amazing feature of our product."
                image={`/images/ai.jpg`} // Replace with actual images
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
