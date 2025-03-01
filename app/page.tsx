// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// import { LampDemo } from "@/components/ui/landing";
// import { CardDemo } from "@/components/ui/card";   
// import { Card3DScroll } from "@/components/ui/card3dsctroll";
// import { Card3D } from "@/components/ui/3dcard";
// import { Footer } from "@/components/ui/footer"
// import { Contact } from "@/components/ui/contact"
// import { Newsletter } from "@/components/ui/newsletter"
// import {Team} from "@/components/ui/team"
// import { CaseStudies} from "@/components/ui/casestudies"
// import { Testimonials} from "@/components/ui/testimonial"

// import { Technology} from "@/components/ui/technology"
// import { CustomNavbar } from "@/components/ui/navbar"

// import { Stats} from "@/components/ui/stats"
// export default function Page() {
//   return (

    
//     <div className="bg-black text-white min-h-screen">
//       <CustomNavbar />
//         <LampDemo />
        
//      {/* ✅ Add spacing and center the cards */}
//      <section className="py-24 flex justify-center">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           <CardDemo />
//           <CardDemo />
//           <CardDemo />
// </div>
// </section>



//       {/* ✅ Section for 3D Cards */}
//       <section className="py-24">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-64 px-6">
//           <Card3D
//             title="AI Innovations"
//             description="Revolutionizing the industry with AI-driven solutions."
//             image="/images/673996.png"
//           />
//           <Card3D
//             title="Gaming Revolution"
//             description="Building immersive gaming experiences with next-gen technology."
//             image="/images/gaming.jpg"
//           />
//           <Card3D
//             title="LMS Solutions"
//             description="Creating modern learning platforms for education and training."
//             image="/images/lms.jpg"
//           />
//         </div>
//       </section>


//       <section className="py-24">
//         <Card3DScroll />
//       </section>
 
     
// <Technology/>
// <Stats/>
// <CaseStudies/>
// <Testimonials/>
// <Team/>
// <Newsletter/>
// <Contact/>
// <Footer/>













   
//     </div>
//   );
// }


import { HeroSection } from "@/components/ui/hero";

import { LampDemo } from "@/components/ui/landing";
import { CardDemo, CardDemo1, CardDemo2 } from "@/components/ui/card";   
import { Card3DScroll } from "@/components/ui/card3dsctroll";
import { Card3D } from "@/components/ui/3dcard";
import { Footer } from "@/components/ui/footer"
import { Contact } from "@/components/ui/contact"
import { Newsletter } from "@/components/ui/newsletter"
import { Team } from "@/components/ui/team"
import { CaseStudies } from "@/components/ui/casestudies"
import { Testimonials } from "@/components/ui/testimonial"
import { Technology } from "@/components/ui/technology"
import { CustomNavbar } from "@/components/ui/navbar"
import { Stats } from "@/components/ui/stats"
//import { BackgroundBeamsWithCollision }  from "@/components/ui/hero"
export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen">
      <CustomNavbar />
      
       <HeroSection/>

 

      
      <section id="products" className="py-24 flex justify-center">
      <div className="max-w-6xl mx-auto px-6">
    {/* Add heading and subheading here */}
     <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-5">Our Solutions</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Discover our innovative technologies designed to transform how you interact with digital experiences.
      </p>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <CardDemo />
          <CardDemo1 />
          <CardDemo2 />
        </div>
        </div>
      </section>

      {/* 3D Cards Section
      <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
    {/* Add heading and subheading here */}
    {/* <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-5">Our Solutions</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Discover our innovative technologies designed to transform how you interact with digital experiences.
      </p>
    </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-64 px-6">
          <Card3D
            title="AI Innovations"
            description="Next-generation virtual personalities powered by advanced AI, 
            creating authentic connections and engaging content."
            image="/images/aiavtar.png"
          />
          <Card3D
            title="Gaming Revolution"
            description="Immersive gaming experiences that push the boundaries 
            of technology and storytelling."
            image="/images/vr.jpg"
          />
          <Card3D
            title="LMS Solutions"
            description="Advanced learning management system designed for modern 
            education and corporate training needs."
            image="/images/eLearning-visual.png"
          />
          </div>
        </div>
      </section> */} 

<section className="relative py-24">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/images/a.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* ✅ Overlay Using RGBA Instead of bg-opacity */}
  <div
    className="absolute inset-0 z-5"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // 50% opacity black overlay
  ></div>

  {/* Content on Top */}
  <div className="relative max-w-6xl mx-auto px-6 text-center text-white z-10">
    {/* Heading and subheading */}
    <p className="text-lg text-gray-300 max-w-xl mx-auto mb-2 uppercase tracking-widest">
      CORE FEATURES
    </p>
    <h2 className="text-4xl font-bold mb-1">Built For Performance</h2>

    {/* 3D Cards */}
    <Card3DScroll />
  </div>
</section>


     
      {/* Technology Section */}
      <section id="technology">
        <Technology/>
      </section>
      
      <section>
        <Stats/>
      </section>
      
      {/* Case Studies Section */}
      <section id="case-studies">
        <CaseStudies/>
      </section>
      
      <section>
        <Testimonials/>
      </section>
      
      {/* Team Section */}
      <section id="team">
        <Team/>
      </section>
      
      <section>
        <Newsletter/>
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <Contact/>
      </section>
      
      <Footer/>
    </div>
  );
}
