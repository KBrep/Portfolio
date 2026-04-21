"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const journeyPhases = [
  { phase: "01", name: "First Symptoms", description: "Confusion, denial, pain escalation" },
  { phase: "02", name: "Acute Episode", description: "Emergency intervention, loss of control" },
  { phase: "03", name: "Diagnosis", description: "Relief mixed with anxiety about recurrence" },
  { phase: "04", name: "Treatment", description: "Procedure decisions, recovery uncertainty" },
  { phase: "05", name: "Monitoring Gap", description: "The invisible period: no feedback, rising worry" },
  { phase: "06", name: "Long-term Management", description: "Lifestyle adaptation, vigilance fatigue" },
];

const hypotheses = [
  "Continuous wearable monitoring will reduce patient anxiety between clinical appointments.",
  "AI-translated insights will be perceived as more accessible than raw clinical data.",
  "Non-invasive ultrasound tracking will increase patient engagement with their own health data.",
  "Companion-framed technology (vs. clinical-framed) will produce higher trust and sustained usage.",
];

const features = [
  { name: "Real-time stone tracking", description: "Live ultrasound visualisation of kidney stone position, size, and movement, abstracted into patient-friendly visual language." },
  { name: "AI risk assessment", description: "Predictive analysis translating scan data into plain-language risk indicators with contextual health recommendations." },
  { name: "Hydration integration", description: "Behavioural nudge system connecting fluid intake tracking to stone formation risk, creating a tangible feedback loop." },
  { name: "Clinical sharing", description: "One-tap report generation for sharing monitoring history with healthcare providers, bridging the home-clinic information gap." },
  { name: "Emotional calibration", description: "Adaptive notification system that modulates alert frequency and tone based on patient stress patterns and preferences." },
];

export default function SenseProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10">
        Process Highlights
      </p>

      {/* Research Synthesis */}
      <div className="mb-16 sm:mb-20">
        <h3 className="heading-md mb-6">Research Synthesis</h3>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <p className="text-lg sm:text-xl leading-relaxed mb-4 text-justify">
              Cross-referencing clinical literature with patient narratives
              revealed a critical disconnect: the medical system optimises for
              stone detection and removal, while patients experience the
              condition as a chronic psychological presence. The synthesis
              reframed the design brief, from &ldquo;better monitoring
              tool&rdquo; to &ldquo;companion for living with
              uncertainty.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Journey Mapping */}
      <div className="mb-16 sm:mb-20">
        <h3 className="heading-md mb-8">
          Journey Mapping{" "}
          <span className="text-muted-foreground/50 font-normal text-lg sm:text-xl">
            / 6 Phases
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {journeyPhases.map(
            (
              phase: { phase: string; name: string; description: string },
              i: number
            ) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.06 * i }}
                className="bg-background p-6 sm:p-8"
              >
                <span className="text-xs font-medium tracking-wider text-muted-foreground/40">
                  Phase {phase.phase}
                </span>
                <p className="text-base font-semibold tracking-tight mt-2 mb-1">
                  {phase.name}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Hypotheses */}
      <div className="mb-16 sm:mb-20">
        <h3 className="heading-md mb-8">
          Ideation &amp; Hypothesis Formation
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
              From the research synthesis, four core hypotheses emerged, each
              testable through prototype interaction and participant feedback.
            </p>
            <div className="space-y-0 border-t border-border">
              {hypotheses.map((hypothesis: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + 0.08 * i }}
                  className="flex gap-4 py-5 border-b border-border"
                >
                  <span className="text-2xl font-bold tracking-tight text-muted-foreground/30 flex-shrink-0">
                    H{i + 1}
                  </span>
                  <p className="text-base leading-relaxed pt-1 text-justify">
                    {hypothesis}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* UI/UX Evolution */}
      <div>
        <h3 className="heading-md mb-4">
          UI/UX Evolution{" "}
          <span className="text-muted-foreground/50 font-normal text-lg sm:text-xl">
            / 5 Key Features
          </span>
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground mb-8 max-w-2xl text-justify">
          The interface evolved across four prototype iterations, converging
          on five core features that directly addressed the hypotheses and
          patient needs surfaced in research.
        </p>

        <div className="space-y-0 border-t border-border">
          {features.map(
            (
              feature: { name: string; description: string },
              i: number
            ) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + 0.08 * i }}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-6 border-b border-border"
              >
                <div className="sm:col-span-4">
                  <span className="text-xs text-muted-foreground/40 font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-semibold tracking-tight mt-1">
                    {feature.name}
                  </p>
                </div>
                <div className="sm:col-span-8">
                  <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
}
