"use client";

import { motion } from "framer-motion";
import { Layers, TrendingUp, Users, Target } from "lucide-react";

interface Campaign {
  title: string;
  description: string;
  approach: string;
  outcome: string;
  icon: React.ReactNode;
}

const campaigns: Campaign[] = [
  {
    title: "International Tea Day Campaign",
    description: "Creative wordplay campaign for 24|7.ai demonstrating AI capabilities through culturally relevant messaging. Leveraged 'CHAI' (tea) concept to create 'AI' connection, showcasing Artificial Intelligence positioning.",
    approach: "Strategic use of phonetic similarity and cultural context to bridge brand identity with product capabilities. Typography and color palette aligned with brand guidelines while maintaining festive appeal.",
    outcome: "Successfully demonstrated creative thinking while maintaining technical accuracy and brand alignment for AI-focused company.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Festive Series Campaigns",
    description: "Series of vibrant, psychologically-informed social media posts designed to capture audience attention during high-engagement festival periods. Focused on emotional resonance and shareability.",
    approach: "Applied behavioral psychology principles to visual design—vibrant colors triggering excitement, happiness associations. Content structured to prioritize visual hierarchy and instant emotional connection over text-heavy messaging.",
    outcome: "Enhanced engagement through emotionally-driven creative execution that aligned with natural human psychological responses to festive content.",
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: "Children's Day Creative",
    description: "Divergent perspective campaign positioning childlike creativity as strategic asset. Visual execution mimicked children's drawings to convey authenticity and nostalgia.",
    approach: "Questioned conventional approach by asking 'what would a child draw?' Result: simple house, hill, airplane illustration that captured pure, unfiltered creative expression. Demonstrated understanding of divergent thinking in creative strategy.",
    outcome: "Authentic visual storytelling that differentiated from standard corporate messaging, creating memorable brand moment through psychological insight.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Trending Content Adaptation",
    description: "Real-time social media trend integration maintaining brand voice while capitalizing on viral moments. Example: Password strength trend adapted for UX/CX positioning.",
    approach: "Monitored social media trends, identified opportunities for brand-relevant adaptation. Balanced trending format with brand persona (AI and Human-Computer Interaction focus). Maintained authenticity while riding trend momentum.",
    outcome: "Successfully integrated into trending conversations without forced brand insertion. Demonstrated agile content strategy and platform fluency.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "International Coffee Day Campaign",
    description: "Conceptual metaphor campaign connecting coffee bean hemispheres to brain hemispheres, illustrating left-brain/right-brain collaboration theme.",
    approach: "Developed visual metaphor aligning with neuroscience concepts and productivity messaging. Combined scientific reference with accessible visual language. Reinforced brand's analytical yet creative positioning.",
    outcome: "Intellectually engaging content that elevated standard holiday post format through layered conceptual thinking.",
    icon: <Layers className="w-6 h-6" />
  }
];

export default function DigitalMediaGrid() {
  return (
    <div className="px-6 sm:px-8 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Campaign Examples */}
        <div className="grid grid-cols-1 gap-6 mb-12">
          {campaigns.map((campaign: Campaign, index: number) => (
            <motion.div
              key={campaign.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-background border border-border rounded-2xl p-8 hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-muted/20 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-muted/40 transition-colors">
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {campaign.icon}
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-foreground/90 transition-colors">
                      {campaign.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {campaign.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Approach</h4>
                      <p className="text-sm text-muted-foreground/90 leading-relaxed">
                        {campaign.approach}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Outcome</h4>
                      <p className="text-sm text-muted-foreground/90 leading-relaxed">
                        {campaign.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Creative Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-8 bg-background border border-border rounded-2xl"
        >
          <h3 className="text-lg font-semibold mb-6 text-foreground">Social Media Creative Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground/90 mb-2">Audience Understanding</h4>
              <p>Identifying target demographics, interests, and preferences to tailor designs for maximum engagement and relevance.</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground/90 mb-2">Campaign Objectives</h4>
              <p>Clearly articulating goals—brand awareness, lead generation, or product promotion—to guide creative direction.</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground/90 mb-2">Platform Consideration</h4>
              <p>Adapting designs to platform-specific visual requirements and user behaviors for optimal performance.</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground/90 mb-2">Research & Inspiration</h4>
              <p>Conducting research on topics, industry trends, and competitor analysis to inform strategic creative decisions.</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground/90 mb-2">Visual Storytelling</h4>
              <p>Crafting narratives through imagery, graphics, and video that capture brand essence and campaign messaging.</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground/90 mb-2">Typography & Color</h4>
              <p>Strategic selection of typography and color palettes aligned with brand guidelines and psychological impact.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <h4 className="text-sm font-medium text-foreground/90 mb-3">Professional Experience Highlights</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/50 mt-1">•</span>
                <span>Managed 13+ social media accounts with $39K monthly budget across Meta and Google Ads</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/50 mt-1">•</span>
                <span>Achieved 35% uplift in engagement and 18% growth in conversions through data-driven campaigns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/50 mt-1">•</span>
                <span>Led creative execution and supervised team of two, delivering 95% on-time campaign milestones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/50 mt-1">•</span>
                <span>Conducted audience research improving alignment between user intent and messaging (21% bounce rate reduction)</span>
              </li>
            </ul>
            <p className="text-xs italic text-muted-foreground/70 mt-6">
              Note: Due to data protection policies in previous roles, specific client creatives cannot be displayed. Campaign descriptions represent strategic approach and creative thinking applied across multinational corporate clients.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
