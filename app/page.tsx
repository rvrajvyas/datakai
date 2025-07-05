// page.tsx
import { HeroParallax } from "@/components/ui/hero";
import { HeroOverlay } from "@/components/ui/HeroOverlay";
// import { CardGrid } from "@/components/ui/card";
import { Cover } from "@/components/ui/heroalternative";
import { Card3DScroll } from "@/components/ui/card3dsctroll"; // This will use our new component
import { Footer } from "@/components/ui/footer";
import { Contact } from "@/components/ui/contact";
import { Newsletter } from "@/components/ui/newsletter";
import { Team } from "@/components/ui/team";
import { CaseStudies } from "@/components/ui/casestudies";
import { Testimonials } from "@/components/ui/testimonial";
import { Technology } from "@/components/ui/technology";
import { CustomNavbar } from "@/components/ui/navbar";
import { Products } from "@/components/ui/productsdemo";
import { ScrollRevealText } from "@/components/ui/Scrolltext";
import { WhoWeAre } from "@/components/ui/Scrolltextreveal";

export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen">
      <CustomNavbar />

      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero5.jpg')", // Set your image path here
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.5 }} // Adjust opacity here (0 to 1)
        ></div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 text-white tracking-wide">
          <span className="animate-fontChange1">Shaping</span>
          <span className="animate-fontChange2">Digital</span>
          <Cover>
            <span className="text-transparent font-poppins bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text mr-4">
              Future{" "}
            </span>
          </Cover>
        </h1>
      </div>
    

<WhoWeAre/>
   
      <div className="relative max-w-6xl mx-auto px-6 text-center text-white z-10">
        <h2 className="text-6xl font-bold font-LemonMilk mb-1 tracking-wide">
          Our Products{" "}
        </h2>

        <section id="productsdemo">
          {/* Content for Products Section */}
          <Products />
        </section>
      </div>

      <section className="relative py-24">
        {/* ✅ Overlay Using RGBA Instead of bg-opacity */}
        <div
          className="absolute inset-0 z-5"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // 50% opacity black overlay
        ></div>

        {/* Content on Top */}
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white z-10">
          {/* Heading and subheading */}
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-2 font-poppins uppercase tracking-widest">
            CORE FEATURES
          </p>

          <h2 className="text-6xl font-bold font-LemonMilk mb-1 tracking-wide">
            Built For Performance
          </h2>

          {/* 3D Cards */}
          <Card3DScroll />
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology">
        <Technology />
      </section>

      <section className="relative py-24">
        {/* Overlay using RGBA Instead of bg-opacity */}
        <div
          className="absolute inset-0 z-5"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // 50% opacity black overlay
        ></div>
      </section>

      {/* <section>
        <Stats/>
      </section> */}

      {/* Case Studies Section */}
      <section id="case-studies">
        <CaseStudies />
      </section>

      <main className="flex flex-col min-h-screen bg-black">
        {/* Other components might go here */}

        <div className="py-24 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden py-8">
              {/* Both components are now rendered inside a single white card */}
              <Testimonials />
              <Team />

              <Newsletter />
            </div>
          </div>
        </div>

        {/* Other components might go here */}
      </main>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
