"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projectPhases = [
  {
    phase: "01",
    name: "Research",
    description:
      "Grounded the project in evidence through extensive desk research, assumption mapping, heuristic reviews of existing platforms, and persona development. Mapped the emotional landscape of impulsive digital behaviour to identify where design interventions could meaningfully intervene.",
  },
  {
    phase: "02",
    name: "Make",
    description:
      "Translated research insights into design through journey mapping, low-fidelity wireframes, and iterative high-fidelity prototypes in Figma. Developed a metaphorical design language using fluid transitions, ripple animations, and colour gradients to embody emotional awareness.",
  },
  {
    phase: "03",
    name: "Check",
    description:
      "Validated the design through five moderated usability testing sessions with digitally active users aged 18 to 35. Gathered qualitative feedback on the effectiveness, intrusiveness, and emotional resonance of reflective cues across e-commerce and social media contexts.",
  },
];

const features = [
  {
    name: "Reflective Pause Cues",
    description:
      "Subtle interaction moments embedded at peak impulsivity points. Rather than blocking the user, these cues introduce a brief, visually elegant pause that invites self-awareness. The design goal was not to prevent action but to create a space for intentional decision-making.",
  },
  {
    name: "Fluid Visual Transitions",
    description:
      "Smooth, flowing transitions between interface states that mirror the fluidity of emotional experience. These transitions serve a dual purpose: they soften the pace of interaction and communicate that the interface is responding to the user as a person, not just processing a command.",
  },
  {
    name: "Colour Gradient Modulation",
    description:
      "Dynamic colour shifts that respond to interaction context. Gradients move between warmer and cooler tones to reflect the emotional temperature of a decision moment, providing a non-verbal signal that invites the user to notice their own state before proceeding.",
  },
  {
    name: "Ripple Animations",
    description:
      "Concentric ripple effects that radiate outward from interaction points, visually representing the impact of a digital decision. The metaphor is deliberate: every click has consequences that extend beyond the screen, and the animation makes that visible for a brief, contemplative moment.",
  },
  {
    name: "Self-Directed Reflection Prompts",
    description:
      "Gentle, non-prescriptive prompts that surface at contextually appropriate moments. These are not warnings or restrictions but open-ended invitations: questions designed to help users articulate their own emotional state and intention before completing an impulsive action.",
  },
];

export default function ReflectFlowProcess() {
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
              The research revealed a consistent pattern across both digital
              contexts studied: the interfaces that most effectively drive
              impulsive behaviour are also the ones that offer the least
              opportunity for self-reflection. Speed, scarcity cues, and
              social validation are woven into the interaction fabric of
              e-commerce and social media platforms, and users have
              internalised these rhythms to the point where pausing feels
              unnatural. The synthesis reframed the design challenge from
              &ldquo;how do we stop impulsive behaviour&rdquo; to &ldquo;how
              do we make reflection feel as natural as the impulse itself.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Project Phases */}
      <div className="mb-16 sm:mb-20">
        <h3 className="heading-md mb-8">
          Project Phases{" "}
          <span className="text-muted-foreground/50 font-normal text-lg sm:text-xl">
            / Research, Make, Check
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {projectPhases.map(
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
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                  {phase.description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Features / Design Language */}
      <div>
        <h3 className="heading-md mb-4">
          Design Language{" "}
          <span className="text-muted-foreground/50 font-normal text-lg sm:text-xl">
            / 5 Key Features
          </span>
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground mb-8 max-w-2xl text-justify">
          Each feature was designed to surface emotional awareness through
          metaphor, creating interaction moments that invite users to notice
          their own state before completing an impulsive action.
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

      {/* Tools */}
      <div className="mt-12">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Tools Used
        </p>
        <div className="flex flex-wrap gap-2">
          {["Figma", "Miro", "Trello", "Otter.ai", "Adobe Tools"].map(
            (tool: string) => (
              <span
                key={tool}
                className="text-[0.7rem] font-medium tracking-wider uppercase px-3 py-1.5 border border-border text-muted-foreground"
              >
                {tool}
              </span>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
}
