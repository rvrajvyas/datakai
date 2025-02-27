import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { LampDemo } from "@/components/ui/landing";
import { CardDemo } from "@/components/ui/card";   
import { Card3DScroll } from "@/components/ui/card3dsctroll";
import { Card3D } from "@/components/ui/3dcard";
import { Footer } from "@/components/ui/footer"
import { Contact } from "@/components/ui/contact"
import { Newsletter } from "@/components/ui/newsletter"
import {Team} from "@/components/ui/team"
import { CaseStudies} from "@/components/ui/casestudies"
import { Testimonials} from "@/components/ui/testimonial"

import { Technology} from "@/components/ui/technology"


import { Stats} from "@/components/ui/stats"
export default function Page() {
  return (

    
    <div className="bg-black text-white min-h-screen">
        <LampDemo />
     {/* ✅ Add spacing and center the cards */}
     <section className="py-24 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <CardDemo />
          <CardDemo />
          <CardDemo />
</div>
</section>



      {/* ✅ Section for 3D Cards */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-64 px-6">
          <Card3D
            title="AI Innovations"
            description="Revolutionizing the industry with AI-driven solutions."
            image="/images/673996.png"
          />
          <Card3D
            title="Gaming Revolution"
            description="Building immersive gaming experiences with next-gen technology."
            image="/images/gaming.jpg"
          />
          <Card3D
            title="LMS Solutions"
            description="Creating modern learning platforms for education and training."
            image="/images/lms.jpg"
          />
        </div>
      </section>


      <section className="py-24">
        <Card3DScroll />
      </section>
 
     
<Technology/>
<Stats/>
<CaseStudies/>
<Testimonials/>
<Team/>
<Newsletter/>
<Contact/>
<Footer/>













   
    </div>
  );
}
