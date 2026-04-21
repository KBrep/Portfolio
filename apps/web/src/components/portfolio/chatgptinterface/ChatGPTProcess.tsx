"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const processPhases = [
  {
    phase: "01",
    name: "Research & Framing",
    description:
      "Literature review, system mapping, identifying the gap in shared AI spaces",
  },
  {
    phase: "02",
    name: "Scenario Development",
    description:
      "Three user scenarios modelling multilingual, collaborative, and mediation contexts",
  },
  {
    phase: "03",
    name: "Wireframing & User Flows",
    description:
      "Four iterative rounds translating research into multi-thread interface layouts",
  },
  {
    phase: "04",
    name: "Key Design Decisions",
    description:
      "Colour-coded threads, emotion modules, facilitation mode, adaptive tone",
  },
  {
    phase: "05",
    name: "Prototyping",
    description:
      "High-fidelity Figma prototype demonstrating the full multi-user experience",
  },
  {
    phase: "06",
    name: "Evaluation & Refinement",
    description:
      "Heuristic walkthrough and peer review feeding back into design iteration",
  },
];

const designQuestions = [
  "How should an AI manage simultaneous prompts from users with competing intentions?",
  "What visual language communicates prompt ownership without creating hierarchy?",
  "Where does emotional awareness become invasive rather than supportive in group settings?",
  "How might real-time translation preserve conversational nuance across languages?",
];

const features = [
  {
    name: "Multi-user mode",
    description:
      "A shared conversational space where multiple users can simultaneously interact with a single AI instance, with the system maintaining contextual awareness of each participant's contributions and intent.",
  },
  {
    name: "Coloured prompt threads",
    description:
      "Each user's prompts and the AI's responses are visually distinguished through a colour-coding system, enabling participants to trace conversational threads without losing the collective context of the shared dialogue.",
  },
  {
    name: "Emotion-aware response module",
    description:
      "The AI adapts its tone, pacing, and language complexity based on detected emotional signals within the conversation, shifting from analytical to empathetic registers as the group dynamic requires.",
  },
  {
    name: "Real-time facilitation mode",
    description:
      "An AI-driven facilitation layer that manages turn-taking, synthesises divergent viewpoints, and surfaces areas of agreement or tension, positioning the AI as an active participant in group conversation rather than a passive responder.",
  },
  {
    name: "Multilingual adaptive communication",
    description:
      "Seamless real-time translation across languages within the shared space, designed to preserve conversational nuance, cultural context, and emotional tone rather than producing literal translations.",
  },
];

export default function ChatGPTProcess() {
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
        <h3 className="heading-md mb-6">Research & Framing</h3>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <p className="text-lg sm:text-xl leading-relaxed mb-4 text-justify">
              Mapping the landscape of conversational AI revealed a
              fundamental assumption baked into every major platform:
              conversation is a private, linear exchange between one person
              and one machine. The research reframed the design brief from
              &ldquo;improving ChatGPT&rsquo;s interface&rdquo; to
              &ldquo;designing for AI as a shared social space,&rdquo;
              where the dynamics of group communication, cultural difference,
              and emotional context become first-class design concerns.
            </p>
          </div>
        </div>
      </div>

      {/* Process Phases */}
      <div className="mb-16 sm:mb-20">
        <h3 className="heading-md mb-8">
          Design Process{" "}
          <span className="text-muted-foreground/50 font-normal text-lg sm:text-xl">
            / 6 Phases
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
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
              Each wireframe iteration was driven by a set of unresolved
              design questions that emerged from the research. These
              questions did not always have definitive answers, but they
              shaped the decision space and kept the design grounded in
              the complexity of real human communication.
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
          Interface Modules{" "}
          <span className="text-muted-foreground/50 font-normal text-lg sm:text-xl">
            / 5 Key Features
          </span>
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground mb-8 max-w-2xl text-justify">
          The interface crystallised around five interconnected modules,
          each addressing a distinct dimension of multi-user AI interaction
          surfaced through the research and scenario modelling process.
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
