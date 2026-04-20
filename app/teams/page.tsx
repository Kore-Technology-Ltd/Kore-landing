import { Header } from "@/components/header";
import { FooterKoreSection } from "@/components/sections/footer-kore-section";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { TeamAvatar } from "@/components/team-avatar";

export default function TeamsPage() {
  const founders = [
    {
      name: "Toluwanimi Durojaiye Timothy",
      shortName: "Toluwanimi",
      initials: "TDT",
      role: "Co-Founder & Chief Executive Officer",
      roleShort: "CEO",
      tagline: "Vision. Strategy. Growth.",
      description:
        "Toluwanimi leads Korè's business strategy, product vision, investor relations, and go-to-market execution. With a background in MERN stack engineering and a deep understanding of Nigerian commerce, he bridges the gap between technology and the real-world market challenges facing millions of Nigerian traders and farmers. He is the driving force behind Korè's mission to build Africa's most trusted digital marketplace.",
      mission:
        "\"I grew up watching brilliant Nigerian entrepreneurs run incredible businesses from physical stalls with no digital tools, no trust infrastructure, and no way to scale. Korè exists to change that — permanently.\"",
      skills: [
        "Business Strategy",
        "Product Vision",
        "Fundraising & Investor Relations",
        "Go-To-Market",
        "MERN Stack",
        "Partnerships",
        "Software Engineering",
      ],
      responsibilities: [
        "Overall company direction and vision",
        "Investor outreach and pre-seed fundraising",
        "Brand, marketing, and public representation",
        "Strategic partnerships and merchant relations",
        "Legal and regulatory compliance oversight",
      ],
      image: "/tolu-davis.jpg",
      linkedin: "https://www.linkedin.com/in/toluwanimi-durojaiye-9272b3294/",
      email: "tolu@kore.ng",
      github: "https://github.com/davistolu",
      location: "Lagos, Nigeria",
      accentColor: "from-[#E07B2A]/20 to-[#C9A84C]/20",
      borderColor: "border-[#E07B2A]/30",
      tagColor: "text-[#E07B2A]",
      badgeColor: "bg-[#E07B2A]/10 text-[#E07B2A]",
      dotColor: "bg-[#E07B2A]",
    },
    {
      name: "Samuel Ayomide Adeyemi",
      shortName: "Samuel",
      initials: "SAA",
      role: "Co-Founder & Chief Technology Officer",
      roleShort: "CTO",
      tagline: "Architecture. Engineering. Scale.",
      description:
        "Samuel leads Korè's entire technology stack — from platform architecture and backend systems to DevOps infrastructure and product engineering. He built the core platform using Laravel, TypeScript, and Supabase, with a focus on performance at scale across Nigeria's varied network conditions. His engineering decisions underpin the trust, security, and reliability that Korè's marketplace is built on.",
      mission:
        "\"The best technology is invisible — it just works. My job is to build the infrastructure that makes every farmer, trader, and buyer on Korè feel like the platform was designed specifically for them.\"",
      skills: [
        "Backend Engineering",
        "PHP & Laravel",
        "Supabase & PostgreSQL",
        "DevOps & Cloud Run",
        "API Architecture",
        "Product Development",
      ],
      responsibilities: [
        "Platform architecture and technical direction",
        "Backend and frontend development",
        "Cloud infrastructure and DevOps (Google Cloud Run)",
        "Payment gateway integration (Paystack / Flutterwave)",
        "Data security and NDPA 2023 compliance",
      ],
      image: "/sam-ayo.jpg",
      linkedin: "https://www.linkedin.com/in/samuelayo0507/",
      email: "samuel@kore.ng",
      github: "https://github.com/sam-uel-ayo",
      location: "Ibadan, Nigeria",
      accentColor: "from-[#1B3A6B]/20 to-[#C9A84C]/20",
      borderColor: "border-[#1B3A6B]/30",
      tagColor: "text-[#C9A84C]",
      badgeColor: "bg-[#C9A84C]/10 text-[#C9A84C]",
      dotColor: "bg-[#C9A84C]",
    },
  ];

  const companyStats = [
    { value: "2026", label: "Founded" },
    { value: "Lagos", label: "Headquartered" },
    { value: "CAMA 2020", label: "Incorporated Under" },
    { value: "$1M", label: "Pre-Money Valuation" },
  ];

  const timeline = [
    {
      period: "Early 2026",
      title: "The Problem Became Personal",
      description:
        "Toluwanimi and Samuel identified a painful gap in Nigerian commerce: 40M+ MSMEs with no trusted digital marketplace, and 38M tonnes of food wasted every year because farmers couldn't reach buyers fast enough.",
    },
    {
      period: "March 2026",
      title: "Company Incorporated",
      description:
        "Kore Technology Limited was formally incorporated in Lagos, Nigeria, under CAMA 2020. The Founders' Agreement and Articles of Association were executed, establishing the company's dual-class share structure and governance framework.",
    },
    {
      period: "April 2026",
      title: "Platform Architecture Built",
      description:
        "Samuel completed the core platform architecture — Laravel backend, TypeScript API, Supabase database, Google Cloud Run infrastructure. Toluwanimi defined the product roadmap, brand identity, and go-to-market strategy.",
    },
    {
      period: "Q3 2026",
      title: "MVP Launch — Target",
      description:
        "Korè platform goes live. First 500 verified sellers onboarded in Lagos. Food and agricultural goods as the anchor category. Escrow payments via Paystack. Logistics integration active.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ── HERO ── */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E07B2A]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1B3A6B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-mono tracking-[0.3em] text-foreground/30 uppercase mb-5">
              The People Behind Korè
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-foreground mb-6">
              Two Founders.
              <br />
              <span className="text-[#E07B2A]">One Mission.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed mb-10">
              Korè was built by two Nigerian engineers who saw a broken market
              and decided to fix it — not from a Silicon Valley office, but from
              Lagos, where the problem lives.
            </p>

            {/* Company stats bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 rounded-xl overflow-hidden border border-foreground/10">
              {companyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background px-4 py-5 text-center"
                >
                  <p className="text-lg font-serif font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-foreground/40 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER CARDS ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="space-y-16 md:space-y-24">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-start ${
                  index % 2 !== 0 ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Left: Profile card */}
                <div className={index % 2 !== 0 ? "[direction:ltr]" : ""}>
                  <div
                    className={`relative rounded-2xl border ${founder.borderColor} overflow-hidden`}
                  >
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${founder.accentColor} opacity-50`}
                    />

                    <div className="relative p-8 md:p-10">
                      {/* Avatar */}
                      <div className="relative w-28 h-28 mb-6">
                        <TeamAvatar
                          image={founder.image}
                          name={founder.name}
                          initials={founder.initials}
                          tagColor={founder.tagColor}
                          accentColor={founder.accentColor}
                          borderColor={founder.borderColor}
                        />
                        {/* Role badge */}
                        <div
                          className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full ${founder.badgeColor} border border-foreground/10 flex items-center justify-center`}
                        >
                          <span className="text-xs font-mono font-bold">
                            {founder.roleShort}
                          </span>
                        </div>
                      </div>

                      {/* Name & role */}
                      <div className="mb-6">
                        <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-1">
                          {founder.name}
                        </h2>
                        <p className={`text-sm font-medium ${founder.tagColor} mb-1`}>
                          {founder.role}
                        </p>
                        <p className="text-xs text-foreground/40 font-mono flex items-center gap-1">
                          <span>📍</span> {founder.location}
                        </p>
                      </div>

                      {/* Tagline */}
                      <div
                        className={`border-l-2 ${founder.borderColor} pl-4 mb-6`}
                      >
                        <p className="text-sm font-mono text-foreground/50 tracking-widest uppercase">
                          {founder.tagline}
                        </p>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {founder.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${founder.badgeColor} border border-foreground/10`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Social links */}
                      <div className="flex gap-3">
                        <a
                          href={`mailto:${founder.email}`}
                          className="flex items-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 rounded-lg text-sm text-foreground/60 hover:text-foreground transition-all"
                          aria-label={`Email ${founder.shortName}`}
                        >
                          <Mail size={14} />
                          <span className="hidden sm:inline">Email</span>
                        </a>
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 rounded-lg text-sm text-foreground/60 hover:text-foreground transition-all"
                          aria-label={`${founder.shortName} on LinkedIn`}
                        >
                          <Linkedin size={14} />
                          <span className="hidden sm:inline">LinkedIn</span>
                        </a>
                        <a
                          href={founder.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 rounded-lg text-sm text-foreground/60 hover:text-foreground transition-all"
                          aria-label={`${founder.shortName} GitHub`}
                        >
                          <Github size={14} />
                          <span className="hidden sm:inline">GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Bio & responsibilities */}
                <div className={index % 2 !== 0 ? "[direction:ltr]" : ""}>
                  <div className="space-y-8">
                    {/* Bio */}
                    <div>
                      <p className="text-foreground/70 leading-relaxed text-base md:text-lg">
                        {founder.description}
                      </p>
                    </div>

                    {/* Mission quote */}
                    <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-6">
                      <p className={`text-sm font-serif italic ${founder.tagColor} leading-relaxed`}>
                        {founder.mission}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h3 className="text-xs font-mono tracking-[0.2em] text-foreground/30 uppercase mb-4">
                        Responsibilities at Korè
                      </h3>
                      <ul className="space-y-3">
                        {founder.responsibilities.map((resp) => (
                          <li key={resp} className="flex items-start gap-3">
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${founder.dotColor} mt-2 flex-shrink-0`}
                            />
                            <span className="text-sm text-foreground/60 leading-relaxed">
                              {resp}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="border-t border-foreground/10" />
      </div>

      {/* ── OUR STORY ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-mono tracking-[0.3em] text-foreground/30 uppercase mb-4">
                Origin Story
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
                How Korè Was Born
              </h2>
              <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                Not from a whiteboard session. From a real problem, in a real country,
                affecting real people.
              </p>
            </div>

            {/* Problem stats that triggered the idea */}
            <div className="grid md:grid-cols-3 gap-4 mb-16">
              {[
                {
                  stat: "38M Tonnes",
                  label: "Food wasted in Nigeria yearly",
                  sub: "#1 in Africa — EU & FAO",
                  color: "border-[#E07B2A]/40 bg-[#E07B2A]/5",
                  textColor: "text-[#E07B2A]",
                },
                {
                  stat: "140M",
                  label: "Nigerians living in poverty",
                  sub: "63% rate — World Bank 2025",
                  color: "border-[#1B3A6B]/40 bg-[#1B3A6B]/5",
                  textColor: "text-foreground",
                },
                {
                  stat: "40M+",
                  label: "MSMEs with no digital storefront",
                  sub: "eCommerce penetration <3%",
                  color: "border-[#C9A84C]/40 bg-[#C9A84C]/5",
                  textColor: "text-[#C9A84C]",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-xl border p-6 ${item.color}`}
                >
                  <p
                    className={`text-3xl font-serif font-bold ${item.textColor} mb-2`}
                  >
                    {item.stat}
                  </p>
                  <p className="text-sm font-medium text-foreground/80 mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-foreground/40">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Story paragraph */}
            <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-8 md:p-12 mb-16">
              <div className="max-w-3xl mx-auto space-y-5 text-foreground/70 leading-relaxed">
                <p>
                  Korè didn't start with a pitch deck. It started with a
                  question Toluwanimi and Samuel couldn't stop asking:{" "}
                  <span className="text-foreground italic">
                    "Why does Nigeria produce enough food to feed itself, yet
                    38 million tonnes rot every year while 140 million people
                    live in poverty?"
                  </span>
                </p>
                <p>
                  The answer wasn't a lack of farmers, goods, or buyers. It was
                  the complete absence of trusted, efficient digital
                  infrastructure connecting the two ends of the market. Farmers
                  couldn't reach buyers at scale. Traders had no digital
                  presence beyond a WhatsApp status. Buyers had no reliable
                  platform to source local produce. And nobody trusted anyone
                  they hadn't met face-to-face.
                </p>
                <p>
                  Toluwanimi and Samuel — both engineers, both Nigerians, both
                  deeply familiar with how commerce actually works on Lagos
                  streets — decided to build the missing layer. Not a clone of
                  Amazon. Not a copy of Jumia. Something built from scratch for
                  how Nigerians actually buy, sell, negotiate, and transact.
                </p>
                <p>
                  In early 2026, they incorporated Kore Technology Limited in
                  Lagos under CAMA 2020, built the platform architecture, and
                  began working toward the launch of{" "}
                  <span className="text-foreground font-medium">Oja Market</span>{" "}
                  — with food and agricultural goods as the first vertical,
                  because that's where the waste crisis is most urgent, and
                  where the impact will be most immediate.
                </p>
                <p className="text-[#E07B2A] font-serif italic text-lg">
                  "Oja ti wa ni tiwa." The market has always been ours.
                  <br />
                  <span className="text-sm font-sans not-italic text-foreground/40">
                    Now we're building it.
                  </span>
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xs font-mono tracking-[0.3em] text-foreground/30 uppercase mb-10 text-center">
                Company Timeline
              </h3>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-foreground/10 -translate-x-1/2" />

                <div className="space-y-10">
                  {timeline.map((item, index) => (
                    <div
                      key={item.period}
                      className={`relative flex gap-8 md:gap-0 ${
                        index % 2 === 0
                          ? "md:flex-row"
                          : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Dot */}
                      <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#E07B2A] border-2 border-background -translate-x-1/2 mt-1.5 z-10" />

                      {/* Spacer for opposite side on desktop */}
                      <div className="hidden md:block md:w-1/2" />

                      {/* Card */}
                      <div className="pl-10 md:pl-0 md:w-1/2 md:px-10">
                        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-5 hover:border-[#E07B2A]/30 transition-colors">
                          <p className="text-xs font-mono text-[#E07B2A] mb-2">
                            {item.period}
                          </p>
                          <h4 className="font-serif text-lg text-foreground mb-2">
                            {item.title}
                          </h4>
                          <p className="text-sm text-foreground/60 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOIN US ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-[#E07B2A]/20 bg-gradient-to-br from-[#E07B2A]/5 to-[#1B3A6B]/5 p-8 md:p-12 text-center">
              <p className="text-xs font-mono tracking-[0.3em] text-foreground/30 uppercase mb-4">
                We're Hiring
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Want to Build With Us?
              </h2>
              <p className="text-foreground/60 leading-relaxed mb-8 max-w-xl mx-auto">
                Korè is a pre-seed startup building something that matters.
                We're looking for engineers, designers, and operations leads
                who believe the Nigerian market deserves world-class
                infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@kore.ng"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E07B2A] text-white rounded-lg font-medium hover:bg-[#C9691A] transition-colors"
                >
                  <Mail size={16} />
                  careers@kore.ng
                </a>
                <a
                  href="https://linkedin.com/company/kore-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground/5 border border-foreground/10 text-foreground/70 rounded-lg font-medium hover:bg-foreground/10 transition-colors"
                >
                  <Linkedin size={16} />
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterKoreSection />
    </main>
  );
}