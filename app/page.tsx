// page.tsx
import { HeroParallax } from "@/components/ui/hero";
import { HeroOverlay } from "@/components/ui/HeroOverlay";
// import { CardGrid } from "@/components/ui/card";   
import { Card3DScroll } from "@/components/ui/card3dsctroll"; // This will use our new component
import { Card3D } from "@/components/ui/3dcard";
import { Footer } from "@/components/ui/footer";
import { Contact } from "@/components/ui/contact";
import { Newsletter } from "@/components/ui/newsletter";
import { Team } from "@/components/ui/team";
import { CaseStudies } from "@/components/ui/casestudies";
import { Testimonials } from "@/components/ui/testimonial";
import { Technology } from "@/components/ui/technology";
import { CustomNavbar } from "@/components/ui/navbar";
import { Stats } from "@/components/ui/stats";
import { TextParallax } from "@/components/ui/TextParallax"; // ✅ Add this import

export default function Page() {
  return (

    
    <div className="bg-black text-white min-h-screen">
      <CustomNavbar />


  
      <HeroParallax
          products={[
            { title: 'AI Avatar', link: '/product1', thumbnail: '/images/ai.jpg' },
            { title: 'AR/VR', link: '/product2', thumbnail: '/images/arvr.jpg' },
            { title: 'Content resource', link: '/product1', thumbnail: '/images/crm.jpg' },
            { title: 'Social Media Management', link: '/product2', thumbnail: '/images/socialmedia.jpg' },
            { title: 'Gaming', link: '/product1', thumbnail: '/images/hero6.jpg' },
            
            
          ]}
        />

      
      <HeroOverlay/>
   
       

      <section className="relative py-24">
     

        {/* ✅ Overlay Using RGBA Instead of bg-opacity */}o2
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
          <h2 className="text-6xl font-bold mb-1 tracking-wide">Built For Performance</h2>

          {/* 3D Cards */}
          <Card3DScroll /> 
        </div>
      </section>
      
      {/* Technology Section */}
      <section id="technology">
        <Technology/>
      </section>
      
      {/* <section>
        <Stats/>
      </section> */}
      
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