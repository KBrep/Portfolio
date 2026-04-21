"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const researchActivities = [
  {
    method: "Bull\u2019s Eye Diagram",
    count: "9",
    detail: "Mapped proximity of cultural values to travel motivations",
  },
  {
    method: "Love/Hate Letter",
    count: "9",
    detail: "Emotional relationship with travel experiences and cultural encounters",
  },
  {
    method: "Contextual Interviews",
    count: "5",
    detail: "In-depth conversations with frequent travellers and cultural practitioners",
  },
];

export default function WanderomaResearch() {
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
              Participatory Design Activities
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
              Rather than starting with assumptions about what travellers want,
              the research began with participatory methods designed to surface
              emotional truths. The Bull&rsquo;s Eye Diagram helped participants
              rank what matters most when they travel, revealing that cultural
              connection consistently sat closer to the centre than convenience
              or cost. Love/Hate Letters invited participants to write directly
              to their travel experiences, uncovering desires and frustrations
              that structured interviews often miss.
            </p>

            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Emotional Framing
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground text-justify">
              The research adopted an emotionally attuned lens, treating travel
              not as a logistics problem but as a search for belonging and
              meaning. This framing shaped the entire design direction: features
              were evaluated not by efficiency but by whether they deepened the
              traveller&rsquo;s sense of connection to a place and its people.
            </p>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Research Activities
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
              Nine participants engaged across multiple research touchpoints.
              Each activity was designed to move beyond surface preferences and
              into the territory of aspiration, nostalgia, and cultural
              curiosity.
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
                    <span className="text-2xl font-bold tracking-tight ml-4">
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
              title: "Affinity Mapping",
              description:
                "Clustered research data into thematic groups, surfacing recurring desires for authenticity, storytelling, and participatory cultural experiences across all participants.",
            },
            {
              title: "Persona Development",
              description:
                "Built personas grounded in emotional archetypes: the curious wanderer seeking depth, the heritage seeker reconnecting with roots, and the spontaneous explorer open to surprise.",
            },
            {
              title: "Speculative Scenario Building",
              description:
                "Imagined near-future travel contexts where cultural storytelling is embedded into the journey itself, not bolted on as an afterthought or marketed as an excursion.",
            },
            {
              title: "Wireframing & Prototyping",
              description:
                "Developed 25+ wireframe screens progressing from low-fidelity sketches to interactive Figma prototypes, testing navigation, content hierarchy, and emotional resonance at each stage.",
            },
            {
              title: "Participatory Co-Design",
              description:
                "Invited participants into the design process itself, using feedback loops to shape features collaboratively rather than designing in isolation and validating after the fact.",
            },
            {
              title: "Heuristic Walkthrough",
              description:
                "Evaluated prototype flows against usability principles and cultural sensitivity criteria, ensuring the app respected the communities it aimed to represent.",
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
