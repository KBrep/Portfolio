"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Metric {
  value: string;
  label: string;
}

const metrics: Metric[] = [
  { value: "5", label: "Moderated Usability Sessions" },
  { value: "3", label: "Core Project Phases" },
  { value: "2", label: "Primary Digital Contexts" },
  { value: "1", label: "Central Premise Validated" },
];

export default function ReflectFlowMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10">
        Key Metrics
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
        {metrics.map((metric: Metric, i: number) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.06 * i }}
            className="bg-background p-6 sm:p-8"
          >
            <p className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              {metric.value}
            </p>
            <p className="text-xs tracking-wider uppercase text-muted-foreground">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Metric context */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <p className="text-sm leading-relaxed text-muted-foreground text-justify">
            Five moderated usability testing sessions with digitally active users
            aged 18 to 35.
          </p>
        </div>
        <div>
          <p className="text-sm leading-relaxed text-muted-foreground text-justify">
            Three core phases: Research, Make, and Check, structuring the journey
            from insight to validation.
          </p>
        </div>
        <div>
          <p className="text-sm leading-relaxed text-muted-foreground text-justify">
            Two primary digital contexts studied: e-commerce and social media,
            where impulsivity peaks differ.
          </p>
        </div>
        <div>
          <p className="text-sm leading-relaxed text-muted-foreground text-justify">
            One central design premise validated: well-crafted emotional cues can
            invite reflection at precisely the moment impulsivity peaks.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
