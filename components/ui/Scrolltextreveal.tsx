  // // components/WhoWeAre.jsx
  // export function WhoWeAre() {
  //     return (
  //       <section className="bg-black-950 text-white py-60 px-6">
          
  //         <div className="max-w-5xl mx-auto text-center">
  //           <h2 className="text-6xl font-maus mb-15 font-poppins bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text ">Who We Are</h2>
  //           <p className="text-lg md:text-4xl mb-6 text-gray-300">
  //             We're building a <span className="text-transparent font-cool bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text font-semibold">DIGITAL SANDBOX</span> — a space where developers and learners
  //             can experiment, fail fast, build better, and grow smarter.
  //           </p>
  //           <p className="text-lg md:text-4xl mb-6  text-gray-300">At dataKai, we believe the best way to grow is by *doing*. So we’re designing tools, projects, and environments that let you get your hands dirty, 
  //             </p>
  //           <p className="text-lg md:text-4xl text-gray-300">
  //             Whether you're launching your first project or your next big idea,
  //             we provide the tools, environment, and freedom to *create*.
  //           </p>
          
  //         </div>
  //       </section>
  //     );
  //   }
    
  'use client';
  import { motion } from 'framer-motion';

  export function WhoWeAre() {
    return (
      <section className="relative bg-black min-h-screen flex flex-col justify-center px-6 py-20 overflow-hidden">
        {/* Vertical Highlighted Text */}
        <motion.div 
    className="hidden md:block absolute right-[-190px] top-1/2 transform -translate-y-1/2 rotate-90"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h3 className="text-9xl font-[600] font-Brunson text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500 uppercase tracking-tight">
      WHO WE ARE
    </h3>
  </motion.div>
        {/* Main Content */}
        <div className="max-w-5xl mx-auto grid gap-8 text-left">
          <motion.h2 
            className="text-6xl font-bold font-LemonMilk tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
          We aRe Engineers 
          </motion.h2>

          <motion.p
            className="text-3xl text-gray-300 leading-tight"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building a <span className="text-purple-400 font-semibold">DIGITAL SANDBOX</span> — a space where developers and learners can experiment, fail fast, build better, and grow smarter.
          </motion.p>

          <motion.p
            className="text-3xl text-gray-300 leading-tight"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At dataKai, we believe the best way to grow is by <span className="italic">doing</span>. We're designing tools, projects, and environments that let you get your hands dirty.
          </motion.p>

          <motion.p
            className="text-3xl text-gray-300 leading-tight"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Whether you're launching your first project or your next big idea, we provide the tools, environment, and freedom to <span className="italic">create</span>.
          </motion.p>
        </div>
      </section>
    );
  }
