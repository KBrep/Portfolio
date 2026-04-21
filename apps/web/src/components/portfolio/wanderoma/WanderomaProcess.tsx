"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const designThinkingPhases = [
  {
    phase: "01",
    name: "Empathise",
    description:
      "Immersed in traveller and local perspectives through participatory activities, contextual interviews, and emotional mapping exercises.",
  },
  {
    phase: "02",
    name: "Define",
    description:
      "Synthesised research into a clear problem statement: travellers want cultural depth but existing tools prioritise logistics over meaning.",
  },
  {
    phase: "03",
    name: "Ideate",
    description:
      "Generated speculative feature concepts through How Might We prompts, crazy eights, and collaborative brainstorming with participants.",
  },
  {
    phase: "04",
    name: "Prototype",
    description:
      "Built 25+ wireframe screens in iterative cycles, moving from paper sketches through mid-fidelity layouts to an interactive Figma prototype.",
  },
  {
    phase: "05",
    name: "Test",
    description:
      "Conducted two rounds of evaluation: guerrilla testing for quick directional feedback and structured 5-act interviews for deeper insight.",
  },
];

const features = [
  {
    name: "Dynamic Journey Builder",
    description:
      "A personalised itinerary engine that weaves cultural narratives into travel plans. Rather than listing attractions, it constructs a journey arc, connecting places through stories, traditions, and local rhythms.",
  },
  {
    name: "Locals Love It",
    description:
      "Community-curated recommendations surfaced through local voices rather than algorithmic ranking. Places, foods, and practices endorsed by residents who understand the cultural significance behind each suggestion.",
  },
  {
    name: "Learn-by-Practice Quests",
    description:
      "Interactive cultural challenges that invite travellers to participate rather than observe: cooking a traditional dish with guidance, learning a greeting ritual, or joining a local craft workshop.",
  },
  {
    name: "Cultural Story Map",
    description:
      "An interactive map layered with cultural narratives, oral histories, and local lore. Each pin tells a story rather than listing opening hours, transforming navigation into an act of discovery.",
  },
  {
    name: "Ritual & Tradition Calendar",
    description:
      "Time-aware suggestions aligned with local festivals, ceremonies, and seasonal practices. The app surfaces cultural moments that a guidebook would miss, connecting travellers to the living rhythm of a place.",
  },
  {
    name: "Voice of the Place",
    description:
      "Audio narratives from locals sharing personal stories about meaningful locations. First-person accounts that give a place emotional texture, moving beyond factual descriptions into lived experience.",
  },
  {
    name: "Reflection Journal",
    description:
      "A personal travel diary with culturally aware prompts that encourage deeper engagement. Questions like 'What surprised you about this tradition?' or 'How did this change what you assumed?' foster genuine reflection.",
  },
];

export default function WanderomaProcess() {
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
              The participatory research revealed a consistent pattern:
              travellers do not lack access to information about destinations.
              They lack access to meaning. Guidebooks and review platforms
              optimise for convenience and popularity, while the stories,
              rituals, and daily practices that define a culture remain invisible
              to outsiders. The synthesis reframed the design challenge from
              &ldquo;better travel planning&rdquo; to &ldquo;deeper cultural
              connection.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Design Thinking Phases */}
      <div className="mb-16 sm:mb-20">
        <h3 className="heading-md mb-8">
          Design Thinking{" "}
          <span className="text-muted-foreground/50 font-normal text-lg sm:text-xl">
            / 5 Phases
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {designThinkingPhases.map(
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
          {/* Empty cell to complete the grid */}
          <div className="bg-background p-6 sm:p-8 hidden lg:block" />
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="heading-md mb-4">
          Key Features{" "}
          <span className="text-muted-foreground/50 font-normal text-lg sm:text-xl">
            / 7 Speculative Concepts
          </span>
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground mb-8 max-w-2xl text-justify">
          Each feature was designed to shift the traveller&rsquo;s posture from
          consumer to participant, creating moments of cultural exchange rather
          than cultural consumption.
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
