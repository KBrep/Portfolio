"use client";

import { motion } from "framer-motion";
import { Brain, AlertCircle, Users, Sparkles, Shield, Heart } from "lucide-react";

interface PsychologyArticle {
  title: string;
  description: string;
  principles: { name: string; description: string }[];
  icon: React.ReactNode;
}

const articles: PsychologyArticle[] = [
  {
    title: "Don't be fooled: The Logical Fallacies",
    description: "An analytical exploration of flaws in logic regularly used by lawmakers and media to mislead individuals. Understanding these fallacies restructures argumentation and critical thinking capabilities.",
    icon: <AlertCircle className="w-6 h-6" />,
    principles: [
      {
        name: "Ad Hominem (Against the man)",
        description: "Attacking opponent's character rather than addressing the argument itself. The second person attacks personality instead of engaging with the genuine issue."
      },
      {
        name: "Ad Ignorantiam (Argument from ignorance)",
        description: "Arguing something must be true simply because it hasn't been proven false, or vice versa. Making assumptions based on absence of evidence rather than examining facts."
      },
      {
        name: "False Analogy",
        description: "Argument based on assumed similarity between two things that aren't truly comparable. Creating misleading comparisons that ignore fundamental differences."
      },
      {
        name: "Appeal to Emotions",
        description: "Manipulating emotional response instead of presenting valid or compelling argument. Provoking feelings rather than logic to influence decision-making."
      },
      {
        name: "Either-Or / False Dilemma",
        description: "Presenting only two alternative states as the only possibilities when more options exist. Creating artificial constraints that ignore other viable solutions."
      }
    ]
  },
  {
    title: "Science of Persuasion: Principles that guide human behavior",
    description: "Based on Robert Cialdini's 'Influence: The Psychology of Persuasion,' this framework shows how to develop behavioral skills that ethically influence individual decisions. These principles drive success beyond luck, position, and power.",
    icon: <Brain className="w-6 h-6" />,
    principles: [
      {
        name: "Reciprocity",
        description: "People are obliged to give back the form of behavior (gift/service) they have received first. Key: Be first to give in personalized and unexpected ways to create feeling of debt. Example: Free samples convert customers; giving one chocolate increases tip by 3%, two chocolates by 14%, but personalized delivery increases by 25%."
      },
      {
        name: "Scarcity",
        description: "People want more of things they can have less of. Key: Point out what they stand to lose, not just gain. Highlight exclusivity and limited availability. Example: 'FOR A LIMITED TIME ONLY' and 'LAST 10 PIECES LEFT' messaging. When availability is limited, perceived value increases."
      },
      {
        name: "Authority",
        description: "People follow the lead of credible and knowledgeable experts. Key: Signal to others what makes you a knowledgeable person before influencing. Academic titles (PhD, Professor) create authority feeling even without knowing actual achievements. Demonstrate expertise authentically."
      },
      {
        name: "Consistency / Commitment",
        description: "Activated by looking for and asking for small initial commitments before influencing in the long run. Key: Ask for small commitments that create familiarity before larger requests. Example: YouTube creators getting one video view creates commitment leading to millions. Each small action builds toward ocean of engagement."
      },
      {
        name: "Social Proof",
        description: "People look to the actions of others to determine their own behavior. Key: Point out what others are doing, especially similar ones. Example: App reviews, movie ratings (IMDb), online shopping reviews, TripAdvisor. People look for validation from peer actions before making decisions."
      },
      {
        name: "Liking",
        description: "People prefer to say YES to those they like. Three key factors: Similarity (we like those like us), Compliments (we like those who compliment us), Cooperation (we like those working toward mutual goals). Key: Create sense of delight through shared similarities and genuine compliments before influencing."
      }
    ]
  }
];

export default function PsychologyGrid() {
  return (
    <div className="px-6 sm:px-8 pb-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {articles.map((article: PsychologyArticle, articleIndex: number) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: articleIndex * 0.1 }}
            className="bg-background border border-border rounded-2xl p-8"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-14 h-14 rounded-xl bg-muted/20 border border-border flex items-center justify-center flex-shrink-0">
                <div className="text-muted-foreground">
                  {article.icon}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                  {article.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {article.principles.map((principle: { name: string; description: string }, index: number) => (
                <motion.div
                  key={principle.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: articleIndex * 0.1 + index * 0.05 }}
                  className="p-6 bg-secondary/20 border border-border rounded-xl hover:bg-secondary/40 transition-all duration-300"
                >
                  <h3 className="text-base font-semibold mb-2 text-foreground/90">
                    {principle.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Application in UX/Digital Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="p-8 bg-background border border-border rounded-2xl"
        >
          <h3 className="text-lg font-semibold mb-6 text-foreground">Psychology in User Experience & Digital Design</h3>
          <div className="space-y-6 text-sm text-muted-foreground">
            <p className="leading-relaxed">
              Psychology and content writing play a crucial role in user interface and experience design by bridging the gap between technical functionalities and user engagement. Fortifying knowledge of psychological distinction enhances the ability to decipher the nuances of characters and user behavior.
            </p>
            <p className="leading-relaxed">
              In summary, <strong className="text-foreground/90">psychology and content writing</strong> in user interface and experience design goes beyond words on a screen; it is a strategic effort to enhance user engagement, facilitate smooth interactions, and create interfaces that align with the cognitive and emotional aspects of the user experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground/90 mb-1">Behavioral Research</h4>
                  <p className="text-xs text-muted-foreground/80">
                    Conducted audience research improving user intent alignment, resulting in 21% bounce rate reduction
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground/90 mb-1">Persuasive Design</h4>
                  <p className="text-xs text-muted-foreground/80">
                    Applied persuasion principles to achieve 35% engagement uplift and 18% conversion growth
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground/90 mb-1">User-Centered Content</h4>
                  <p className="text-xs text-muted-foreground/80">
                    Increased session duration by 30% through data-driven UX insights and refined messaging
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
