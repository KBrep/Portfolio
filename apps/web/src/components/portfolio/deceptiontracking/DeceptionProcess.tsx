"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const processPhases = [
  {
    phase: "01",
    name: "Research & Feasibility Mapping",
    description:
      "Literature review, biosignal taxonomy, mapping the gap between lab deception science and real-world VR interaction",
  },
  {
    phase: "02",
    name: "Interaction Scenario Design",
    description:
      "Two core scenarios: high-stakes negotiation and intimate personal disclosure, each stress-testing different trust dynamics",
  },
  {
    phase: "03",
    name: "Feedback Form Iteration",
    description:
      "Three visual approaches to truthfulness feedback: honesty meter, halo system, and opacity modulation, each encoding data differently",
  },
  {
    phase: "04",
    name: "Ethical Design Framing",
    description:
      "Structured confrontation with consent, surveillance, false positives, and power asymmetry through ethical scenario mapping",
  },
];

const designQuestions = [
  "Should truthfulness feedback be visible only to the observer, or symmetrically available to both parties in the interaction?",
  "How do you design for ambiguity when biosignals are inherently noisy and culturally variable in their expression?",
  "At what point does surfacing sincerity data cross from assistive technology to a tool of social surveillance?",
  "Can the visual language of feedback be designed to resist binary true/false thinking and preserve the complexity of human states?",
];

const features = [
  {
    name: "Avatar honesty meter",
    description:
      "A continuous gauge rendered alongside the avatar, aggregating six biosignal inputs into a single truthfulness indicator. The meter deliberately avoids binary states, using a gradient spectrum from warm to cool tones to communicate degrees of congruence between spoken content and physiological response.",
  },
  {
    name: "Visual halo feedback",
    description:
      "A luminous aura surrounding the avatar that shifts in colour saturation and intensity based on real-time biosignal analysis. The halo operates as ambient feedback, perceptible without direct attention, designed to inform intuition rather than trigger conscious judgment about a speaker's sincerity.",
  },
  {
    name: "Numeric sincerity score",
    description:
      "A direct quantitative overlay displaying a computed sincerity percentage derived from biosignal correlation analysis. Included as a deliberate provocation: the most precise feedback form and also the most ethically charged, reducing complex human states to a number.",
  },
  {
    name: "Opacity modulation",
    description:
      "The avatar's visual solidity shifts in response to biosignal coherence. Greater alignment between stated intent and physiological signals renders the avatar more opaque and present; incongruence causes the avatar to become translucent, a metaphor for the relationship between authenticity and social visibility.",
  },
];

export default function DeceptionProcess() {
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
        <h3 className="heading-md mb-6">Research &amp; Feasibility Mapping</h3>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <p className="text-lg sm:text-xl leading-relaxed mb-4 text-justify">
              The research began by mapping the landscape of biosignal
              interpretation: what can be measured, what can be inferred,
              and where the science ends and speculation begins. EEG, galvanic
              skin response, heart rate variability, vocal stress patterns,
              pupil dilation, and micro-facial movements were catalogued as
              the six biosignal types with varying degrees of reliability
              for truthfulness inference. The critical finding was that none
              of these signals, individually or combined, can reliably
              determine deception. The project proceeded not despite this
              limitation but because of it, asking what happens when we
              design as if they could.
            </p>
          </div>
        </div>
      </div>

      {/* Process Phases */}
      <div className="mb-16 sm:mb-20">
        <h3 className="heading-md mb-8">
          Design Process{" "}
          <span className="text-muted-foreground/50 font-normal text-lg sm:text-xl">
            / 4 Phases
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-px bg-border">
          {processPhases.map(
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

      {/* Design Questions */}
      <div className="mb-16 sm:mb-20">
        <h3 className="heading-md mb-8">
          Key Design Decisions
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
              The design process was shaped by a set of questions that
              refused easy resolution. Each question exposed a tension
              between the technical possibility of biosignal feedback
              and the ethical reality of deploying it in social space.
              These questions were not obstacles to be overcome but
              constraints that defined what responsible speculative
              design looks like.
            </p>
            <div className="space-y-0 border-t border-border">
              {designQuestions.map((question: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + 0.08 * i }}
                  className="flex gap-4 py-5 border-b border-border"
                >
                  <span className="text-2xl font-bold tracking-tight text-muted-foreground/30 flex-shrink-0">
                    Q{i + 1}
                  </span>
                  <p className="text-base leading-relaxed pt-1 text-justify">
                    {question}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="heading-md mb-4">
          Feedback Modalities{" "}
          <span className="text-muted-foreground/50 font-normal text-lg sm:text-xl">
            / 4 Approaches
          </span>
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground mb-8 max-w-2xl text-justify">
          Four distinct feedback forms were developed, each encoding
          biosignal-derived truthfulness data through a different visual
          language. Together they map the spectrum from ambient suggestion
          to explicit quantification, exposing how the form of feedback
          shapes its ethical implications.
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
