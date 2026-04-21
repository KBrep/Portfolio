import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create demo user
  const hashedPassword = await bcrypt.hash("demo1234", 10);

  const user = await prisma.user.upsert({
    where: { email: "demo@example.com" },
    update: {},
    create: {
      email: "demo@example.com",
      name: "Digital Strategist",
      password: hashedPassword,
    },
  });

  console.log(`Created demo user: ${user.email}`);

  // Create projects
  const projects = [
    {
      slug: "fintech-platform-redesign",
      title: "Fintech Platform Redesign",
      description: "End-to-end UX strategy and interface redesign for a B2B fintech platform serving 200k+ users.",
      category: "UX Strategy",
      role: "Lead Digital Strategist",
      year: "2024",
      order: 1,
      problem:
        "The platform had grown organically over five years, accumulating feature debt and inconsistent patterns. User onboarding completion rates had dropped to 34%, and support tickets related to navigation confusion had tripled. The business needed to scale but the existing experience was actively hindering growth.",
      approach:
        "Conducted a comprehensive UX audit across 47 user flows, identifying 23 critical friction points. Ran behavioural analysis using session recordings and heatmaps from 12,000 sessions. Facilitated stakeholder workshops to align business objectives with user needs. Developed a phased redesign strategy that prioritised high-impact, low-effort improvements first, followed by structural changes to the information architecture.",
      decisions:
        "Chose to implement a progressive disclosure pattern rather than a full interface overhaul, reducing risk and enabling iterative validation. Prioritised the onboarding flow and dashboard experience based on impact analysis. Introduced a component-based design system to ensure consistency across the platform. Selected a data-driven approach to navigation restructuring, using card sorting studies with 150 participants.",
      outcome:
        "Onboarding completion increased from 34% to 78% within three months. Support tickets related to navigation dropped by 62%. User satisfaction scores improved from 3.2 to 4.6 out of 5. The redesign contributed to a 28% increase in platform adoption among enterprise clients.",
    },
    {
      slug: "healthcare-content-ecosystem",
      title: "Healthcare Content Ecosystem",
      description: "Strategic content architecture and SEO framework for a healthcare provider network reaching 2M+ patients.",
      category: "Content Strategy",
      role: "Digital Strategy Consultant",
      year: "2024",
      order: 2,
      problem:
        "A regional healthcare network with 15 facilities had fragmented digital content across multiple microsites, inconsistent messaging, and declining organic search visibility. Patient acquisition through digital channels had plateaued despite increasing media spend. Content was being produced reactively without strategic direction.",
      approach:
        "Mapped the complete patient journey from awareness to appointment booking, identifying content gaps at each stage. Conducted competitive content analysis across 8 comparable healthcare networks. Developed a unified content taxonomy and governance framework. Created a semantic SEO strategy targeting condition-specific, intent-driven keywords with a focus on local search optimisation.",
      decisions:
        "Consolidated 15 microsites into a single content hub with a clear hierarchical structure. Implemented a topic cluster model organised around patient conditions rather than service lines. Chose to prioritise educational content over promotional content based on search intent analysis. Developed a content scoring system to measure strategic alignment and performance.",
      outcome:
        "Organic traffic increased by 156% within six months. The content hub became the primary patient acquisition channel, reducing cost-per-acquisition by 41%. Average time on site increased from 1.2 to 4.7 minutes. The framework was adopted as the standard content model across all 15 facilities.",
    },
    {
      slug: "saas-product-launch",
      title: "SaaS Product Launch Strategy",
      description: "Go-to-market strategy and digital experience design for an enterprise SaaS product launch.",
      category: "Product Strategy",
      role: "Digital Strategist & UX Lead",
      year: "2023",
      order: 3,
      problem:
        "An enterprise software company was launching a new analytics product into a competitive market with established players. They had strong technology but lacked a clear positioning strategy and had no existing digital presence for the new product. The launch timeline was compressed to 12 weeks.",
      approach:
        "Developed a positioning framework through competitive analysis of 12 competitors and interviews with 30 potential customers. Created user personas based on buying committee roles within target organisations. Designed a conversion-optimised website with structured product storytelling. Built a multi-channel digital launch plan spanning content marketing, targeted LinkedIn campaigns, and strategic partnerships.",
      decisions:
        "Positioned the product around decision intelligence rather than analytics, differentiating from feature-heavy competitors. Designed the website experience around use cases rather than features, reflecting how buyers evaluate solutions. Chose a product-led growth approach with a self-service trial, supported by high-touch onboarding for enterprise prospects. Implemented a sequential content strategy that built awareness before driving conversion.",
      outcome:
        "Generated 1,200 qualified trial signups in the first 8 weeks, exceeding the target by 340%. The website achieved a 12% visitor-to-trial conversion rate. Three enterprise contracts were closed within the first quarter. The positioning framework was adopted as the company-wide messaging standard.",
    },
    {
      slug: "ecommerce-behavioural-optimisation",
      title: "E-commerce Behavioural Optimisation",
      description: "Applied behavioural psychology principles to optimise the purchase journey for a luxury retail brand.",
      category: "Behavioural Design",
      role: "Behavioural Strategist",
      year: "2023",
      order: 4,
      problem:
        "A luxury fashion retailer had a high-traffic website but struggled with a 1.8% conversion rate, well below the 3.2% industry average. Cart abandonment was at 79%. Qualitative research revealed that the digital experience failed to convey the brand's premium positioning, and the checkout flow created unnecessary cognitive load.",
      approach:
        "Applied behavioural economics frameworks including loss aversion, social proof, and the endowment effect to identify optimisation opportunities. Conducted eye-tracking studies with 40 participants across key purchase flows. Mapped decision points in the customer journey and identified where cognitive biases could be ethically leveraged. Designed and executed a structured A/B testing programme across 14 experiments.",
      decisions:
        "Implemented scarcity signals based on real inventory data rather than artificial urgency. Redesigned product pages to lead with editorial storytelling before presenting purchase options, aligning with luxury buying psychology. Simplified the checkout to three steps with progress indication. Introduced a saved-items feature with gentle re-engagement nudges based on the endowment effect.",
      outcome:
        "Conversion rate increased from 1.8% to 3.4% over four months. Cart abandonment reduced from 79% to 58%. Average order value increased by 23% due to improved cross-sell positioning. The testing programme generated insights that informed the broader brand digital strategy.",
    },
    {
      slug: "government-digital-transformation",
      title: "Government Digital Transformation",
      description: "User-centred digital service redesign for a government department serving 5M+ citizens annually.",
      category: "Service Design",
      role: "Senior Digital Strategist",
      year: "2022",
      order: 5,
      problem:
        "A government department processing 5 million annual service requests was operating with a 20-year-old digital system. Only 23% of requests were completed online, with the majority requiring phone or in-person interactions. The existing digital service had a 67% abandonment rate, costing the department an estimated £12M annually in avoidable contact.",
      approach:
        "Led discovery research with 200+ citizens and 50 frontline staff to understand pain points and service needs. Mapped end-to-end service blueprints covering digital, phone, and in-person channels. Applied GOV.UK design standards and accessibility requirements. Developed a phased transformation roadmap that delivered quick wins while building toward systemic change.",
      decisions:
        "Adopted a progressive enhancement approach to ensure the service worked for all users regardless of device or connection speed. Redesigned the application form using plain language principles, reducing it from 47 to 12 questions. Implemented real-time eligibility checking to prevent users from completing forms they wouldn't qualify for. Chose to integrate with existing backend systems rather than replace them, reducing delivery risk.",
      outcome:
        "Online completion rate increased from 23% to 71% within six months. Abandonment rate dropped from 67% to 19%. Phone contact volume reduced by 44%, saving an estimated £5.3M annually. The service achieved a 92% user satisfaction rating and was recognised as a model for digital transformation across government.",
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: {},
      create: {
        ...project,
        userId: user.id,
      },
    });
  }

  console.log(`Created ${projects.length} projects`);
  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
