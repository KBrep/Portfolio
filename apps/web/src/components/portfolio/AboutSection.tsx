"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-80px" });

  return (
    <section id="about" data-tour="about-section">
      {/* Structured About content block */}
      <div ref={aboutRef} className="px-6 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-normal tracking-[0.3em] uppercase text-muted-foreground mb-8 sm:mb-10">
              About
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
          >
            <div className="lg:col-span-7">
              <p className="text-xl sm:text-2xl md:text-3xl font-light leading-[1.45] tracking-tight text-foreground">
                A multidisciplinary digital strategist working across UX research, behavioural psychology, content strategy, and development, shaping how people experience systems and stories.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-5">
              <p className="text-sm sm:text-[0.935rem] text-muted-foreground leading-relaxed">
                With a foundation in both creative and technical disciplines, this practice spans user experience design, behavioural psychology, content strategy, digital media, and development.
              </p>
              <p className="text-sm sm:text-[0.935rem] text-muted-foreground leading-relaxed">
                The work is driven by a belief that great digital experiences are built at the intersection of human understanding and systematic thinking.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
