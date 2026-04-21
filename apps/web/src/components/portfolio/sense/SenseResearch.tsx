"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const interviewees = [
  { role: "Kidney stone patients", count: "2", detail: "Recurring condition, 3+ episodes" },
  { role: "Consultant urologist", count: "1", detail: "NHS, 15+ years clinical experience" },
  { role: "Retired doctor", count: "1", detail: "General practice, patient advocacy" },
  { role: "R&D engineer", count: "1", detail: "Medical device prototyping" },
];

export default function SenseResearch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const designRef = useRef(null);
  const designInView = useInView(designRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Research Methods */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10">
          Research Methods
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Literature Review
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
              A systematic review of 11 academic papers spanning ultrasound
              miniaturisation, Bio-HCI frameworks, AI-assisted diagnostics,
              and patient experience in nephrology. The review established the
              technical feasibility landscape and identified where existing
              research stopped short of addressing the patient&rsquo;s
              emotional and behavioural relationship with monitoring
              technology.
            </p>

            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Behavioural Framing
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground text-justify">
              Drawing on health psychology and behaviour change models, the
              research framed kidney stone monitoring not as a clinical task
              but as an ongoing negotiation between awareness and anxiety.
              This lens shaped every subsequent design decision, from
              notification tone to data visualisation density.
            </p>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Semi-Structured Interviews
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
              Five in-depth interviews conducted across clinical, patient, and
              engineering perspectives. Each session lasted 45-75 minutes,
              following a semi-structured protocol designed to surface lived
              experience alongside professional insight.
            </p>

            <div className="space-y-0 border-t border-border">
              {interviewees.map(
                (
                  person: { role: string; count: string; detail: string },
                  i: number
                ) => (
                  <motion.div
                    key={person.role}
                    initial={{ opacity: 0, x: -8 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + 0.08 * i }}
                    className="flex items-baseline justify-between py-4 border-b border-border"
                  >
                    <div>
                      <p className="text-sm font-medium">{person.role}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {person.detail}
                      </p>
                    </div>
                    <span className="text-2xl font-bold tracking-tight ml-4">
                      {person.count}
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Design Methods - separated by a visual break */}
      <div className="my-16 sm:my-24 border-t border-border" />

      <motion.section
        ref={designRef}
        initial={{ opacity: 0, y: 20 }}
        animate={designInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10">
          Design Methods
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {[
            {
              title: "Affinity Mapping",
              description:
                "Synthesised interview transcripts and literature findings into thematic clusters, revealing patterns across clinical, emotional, and behavioural dimensions.",
            },
            {
              title: "Persona Development",
              description:
                "Created research-grounded personas representing distinct patient archetypes, from the anxious first-timer to the fatigued repeat sufferer.",
            },
            {
              title: "Journey Mapping",
              description:
                "Mapped the full 6-phase patient journey from first symptom through long-term management, identifying emotional peaks and intervention opportunities.",
            },
            {
              title: "Ideation Techniques",
              description:
                "Combined structured brainstorming with speculative design methods: How Might We prompts, crazy eights, and scenario planning for near-future healthcare contexts.",
            },
            {
              title: "Prototype Development",
              description:
                "Progressed from paper wireframes through mid-fidelity Figma screens to an interactive high-fidelity prototype, testing at each stage.",
            },
            {
              title: "Heuristic Evaluation",
              description:
                "Applied Nielsen's usability heuristics alongside healthcare-specific criteria to audit the interface before participant testing.",
            },
          ].map(
            (
              method: { title: string; description: string },
              i: number
            ) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 12 }}
                animate={designInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.06 * i }}
                className="bg-background p-6 sm:p-8"
              >
                <p className="text-sm font-semibold tracking-tight mb-3">
                  {method.title}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                  {method.description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </motion.section>
    </>
  );
}
