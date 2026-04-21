"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const statements = [
  "Every interface is a philosophy in disguise, quietly guiding what we notice, choose, and become.",
  "We do not merely design systems; we participate in shaping the conditions that shape us.",
  "Design is the practice of giving form to intention, and life is the consequence of how those forms are lived.",
  "What we build in systems, we inherit in behaviour.",
  "Clarity is not simplicity alone; it is the discipline of understanding what truly matters.",
];

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="section-padding px-6 sm:px-8 lg:px-12 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-normal tracking-[0.3em] uppercase opacity-40 mb-8">
            Philosophy
          </p>

          <div className="space-y-7 sm:space-y-8">
            {statements.map((statement: string, i: number) => (
              <motion.div
                key={i}
                className="border-l border-background/15 pl-8 sm:pl-12"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
              >
                <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed tracking-tight opacity-85">
                  &ldquo;{statement}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
