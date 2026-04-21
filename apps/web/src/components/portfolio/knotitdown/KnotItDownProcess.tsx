"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    phase: "01",
    name: "Concept Fracture",
    description:
      "Breaking apart conventional assumptions about how history is taught and consumed. Deconstructing the timeline as a form, questioning linearity, and identifying where embodied experience could enter the learning process.",
  },
  {
    phase: "02",
    name: "Metaphor Development",
    description:
      "Developing the knot as a central metaphor for historical events. Each knot carries weight, texture, and position, encoding information not through text but through material properties. The act of tying becomes the act of understanding.",
  },
  {
    phase: "03",
    name: "Educational Anchoring",
    description:
      "Grounding the speculative concept in real pedagogical frameworks. Mapping the knot metaphor against constructivist learning theory and identifying which aspects of history education would benefit most from tactile engagement.",
  },
  {
    phase: "04",
    name: "Sensory Layering",
    description:
      "Adding depth to the experience through multi-sensory design. Sound, resistance, texture, and spatial arrangement were explored as channels for encoding historical significance, causation, and temporal relationships.",
  },
  {
    phase: "05",
    name: "Branding",
    description:
      "Developing a visual and verbal identity for the project that communicated its intellectual ambition while remaining approachable. The name itself, 'Knot it Down,' plays on the tension between note-taking and physical knotting.",
  },
];

const coreDesignConcepts = [
  {
    name: "Memory Loom",
    description:
      "A speculative interface where historical events are arranged spatially on a loom-like structure. Users navigate history not by scrolling a timeline but by traversing a woven fabric of interconnected events, each node a knot that reveals its content through interaction.",
  },
  {
    name: "Knot-as-Event",
    description:
      "Every historical event is represented as a distinct knot type. The complexity, size, and texture of each knot communicates the event's significance, duration, and emotional weight. Simple events are loose ties; pivotal moments are dense, tightly wound structures.",
  },
  {
    name: "Temporal Tension",
    description:
      "The physical tension between knots on a cord represents temporal distance. Events close together sit on slack cord; events separated by centuries stretch the material taut. Time becomes something you can feel in your hands.",
  },
  {
    name: "Causal Threading",
    description:
      "Cause-and-effect relationships are rendered as threads connecting knots across different cords. Pulling one event reveals the network of causes and consequences radiating outward, making historical causation visible and tangible.",
  },
];

const tools = [
  "Miro",
  "Figma",
  "Unreal Engine",
  "Pen-and-paper Sketches",
];

export default function KnotItDownProcess() {
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
        Process &amp; Design Concepts
      </p>

      {/* 5-Phase Process */}
      <div className="mb-16 sm:mb-20">
        <h3 className="heading-md mb-8">
          5-Phase Process{" "}
          <span className="text-muted-foreground/50 font-normal text-lg sm:text-xl">
            / Speculative Design
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {phases.map(
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
          {/* Empty cell to complete 3-column grid (5 items + 1 empty = 6) */}
          <div className="bg-background p-6 sm:p-8 hidden lg:block" />
        </div>
      </div>

      {/* Core Design Concepts */}
      <div className="mb-16 sm:mb-20">
        <h3 className="heading-md mb-4">
          Core Design Concepts{" "}
          <span className="text-muted-foreground/50 font-normal text-lg sm:text-xl">
            / 4 Pillars
          </span>
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground mb-8 max-w-2xl text-justify">
          Four interconnected design concepts form the experiential foundation
          of the project, each translating an aspect of historical learning
          into a tactile, spatial interaction.
        </p>

        <div className="space-y-0 border-t border-border">
          {coreDesignConcepts.map(
            (
              concept: { name: string; description: string },
              i: number
            ) => (
              <motion.div
                key={concept.name}
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
                    {concept.name}
                  </p>
                </div>
                <div className="sm:col-span-8">
                  <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                    {concept.description}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
          Tools &amp; Methods
        </h3>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool: string) => (
            <span
              key={tool}
              className="text-[0.7rem] font-medium tracking-wider uppercase px-3 py-1.5 border border-border text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
