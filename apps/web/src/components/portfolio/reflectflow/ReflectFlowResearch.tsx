"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const researchActivities = [
  {
    method: "Desk Research",
    count: "Extensive",
    detail: "Literature review on impulsive behaviour, persuasive design patterns, and emotional regulation in digital contexts",
  },
  {
    method: "Assumption Mapping",
    count: "Core",
    detail: "Identified and challenged assumptions about when and why users act impulsively in e-commerce and social media",
  },
  {
    method: "Heuristic Reviews",
    count: "Multiple",
    detail: "Evaluated existing digital platforms for persuasive patterns that exploit impulsivity rather than invite reflection",
  },
  {
    method: "Persona Development",
    count: "Detailed",
    detail: "Created user archetypes grounded in behavioural research, representing digitally active users aged 18 to 35",
  },
];

export default function ReflectFlowResearch() {
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
              Understanding Impulsive Behaviour
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
              The research began with an extensive desk research phase,
              examining existing literature on impulsive behaviour in digital
              environments, persuasive design patterns, and the psychology of
              emotional self-regulation. This foundation revealed a critical
              gap: while persuasive design has been widely studied as a tool
              for driving engagement, very little design research explores how
              the same principles might be redirected to support user
              self-awareness.
            </p>

            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Cognitive and Emotional Framing
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground text-justify">
              The research adopted a lens informed by cognitive psychology and
              emotional awareness. Rather than treating impulsivity as a user
              flaw to be corrected, the project framed it as a natural response
              to interfaces designed for speed. This reframing shaped the entire
              design direction: interventions were evaluated not by how
              effectively they blocked behaviour but by whether they created
              genuine space for self-reflection.
            </p>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Research Activities
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
              Multiple research methods were layered to build a comprehensive
              understanding of how impulsive digital behaviour manifests and
              where design might meaningfully intervene without creating
              friction.
            </p>

            <div className="space-y-0 border-t border-border">
              {researchActivities.map(
                (
                  activity: { method: string; count: string; detail: string },
                  i: number
                ) => (
                  <motion.div
                    key={activity.method}
                    initial={{ opacity: 0, x: -8 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + 0.08 * i }}
                    className="flex items-baseline justify-between py-4 border-b border-border"
                  >
                    <div>
                      <p className="text-sm font-medium">{activity.method}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {activity.detail}
                      </p>
                    </div>
                    <span className="text-sm font-bold tracking-tight ml-4 flex-shrink-0">
                      {activity.count}
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Design Methods */}
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
              title: "Assumption Mapping",
              description:
                "Systematically identified and interrogated assumptions about user impulsivity, separating evidence-based insights from design intuition before committing to any solution direction.",
            },
            {
              title: "Journey Mapping",
              description:
                "Mapped the emotional arc of impulsive digital behaviour across e-commerce and social media, identifying the precise moments where emotional self-awareness could be surfaced through design.",
            },
            {
              title: "Low-Fidelity Prototyping",
              description:
                "Explored early concepts through sketches and wireframes, testing the placement and timing of reflective cues before investing in visual refinement or interaction complexity.",
            },
            {
              title: "High-Fidelity Prototyping",
              description:
                "Built detailed interactive prototypes in Figma, refining the visual language of fluid transitions, ripple animations, and colour gradients that form the core design vocabulary.",
            },
            {
              title: "Metaphorical Design Language",
              description:
                "Developed a design system rooted in metaphor: fluidity for emotional states, ripples for the impact of decisions, and gradients for the spectrum between impulse and intention.",
            },
            {
              title: "Heuristic Walkthrough",
              description:
                "Evaluated prototype flows against usability principles and cognitive load criteria, ensuring reflective cues felt integrated rather than imposed on the user experience.",
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
