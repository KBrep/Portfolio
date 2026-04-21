"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    title: "UI/UX Design",
    formula: "Research \u2192 Structure \u2192 Interface",
    description: "User-centred design rooted in behavioural insight and systematic thinking.",
  },
  {
    title: "Content Strategy",
    formula: "Audience \u00d7 Intent = Engagement",
    description: "Strategic content ecosystems that align with user needs and business goals.",
  },
  {
    title: "Behavioural Psychology",
    formula: "Cognition \u2192 Decision \u2192 Action",
    description: "Applying behavioural models to design systems that guide meaningful outcomes.",
  },
  {
    title: "Digital Media",
    formula: "Channel + Context \u2192 Conversion",
    description: "Data-driven media strategies across paid, owned, and earned touchpoints.",
  },
  {
    title: "Backend Development",
    formula: "Logic \u00b7 Data \u00b7 Scale",
    description: "Technical fluency to bridge strategy and implementation seamlessly.",
  },
];

export default function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="py-10 sm:py-14 px-6 sm:px-8 bg-secondary/50" data-tour="capabilities-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-muted-foreground mb-8">
            Capabilities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {capabilities.map((cap: { title: string; formula: string; description: string }, i: number) => (
              <motion.div
                key={cap.title}
                className="bg-background p-8 sm:p-10 group hover:bg-secondary/30 transition-colors duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <p className="text-[10px] font-mono tracking-wider text-muted-foreground/60 mb-4">
                  {cap.formula}
                </p>
                <h3 className="text-lg font-semibold tracking-tight mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
            {/* Fill empty grid cell to maintain uniform appearance */}
            <div className="bg-background p-8 sm:p-10 hidden lg:block" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
